import { Haus } from '@daohaus/dao-data';
import { Keychain, DAO_PRODUCER_QUEUE } from '@daohaus/common-utilities';
import { Queue } from 'bull';

const rpcConfig = {
  '0x5': 'https://.goerli.rpc.rivet.cloud',
};

const networks = ['0x5'] as Array<keyof Keychain>;
const REDIS_URL = process.env.REDIS_URL;

const main = async () => {
  console.log('Starting dao producer job');
  const producerQueue = new Queue(DAO_PRODUCER_QUEUE, REDIS_URL);
  const haus = Haus.create(rpcConfig);
  for (const networkId of networks) {
    const resp = await haus.query.listDaos({ networkId });
    for (const dao of resp.data.daos) {
      console.log(
        `Pushing dao ${dao.id} from chain ${networkId} onto the queue`
      );
      producerQueue.add({
        address: dao.id,
        safeAddress: dao.safeAddress,
        network: networkId,
      });
    }
  }
  console.log('Finished!');
};

main();
