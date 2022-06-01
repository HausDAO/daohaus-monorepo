import { Haus } from '@daohaus/dao-data';
import { Keychain } from '@daohaus/common-utilities';
import { Queue } from 'bull';

//  Dao address
//  safe address
//  network
const rpcConfig = {
  '0x5': 'https://.goerli.rpc.rivet.cloud',
};

const networks = ['0x5'] as Array<keyof Keychain>;

const main = async () => {
  const producerQueue = new Queue('dao-producer', 'redis://127.0.0.1:6379');
  const haus = Haus.create(rpcConfig);
  for (const networkId of networks) {
    const resp = await haus.query.listDaos({ networkId });
    for (const dao of resp.data.daos) {
      producerQueue.add({
        address: dao.id,
        safeAddress: dao.safeAddress,
        network: networkId,
      });
    }
  }
};

main();
