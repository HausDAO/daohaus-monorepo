import { Haus } from '../src/index';

describe('haus', () => {
  const rpcConfig = {
    '0x4': `https://${process.env['NX_RIVET_KEY']}.rinkeby.rpc.rivet.cloud`,
    '0x64': 'https://rpc.gnosischain.com',
    '0x1': `https://${process.env['NX_RIVET_KEY']}.eth.rpc.rivet.cloud`,
  };
  let haus: Haus;

  beforeAll(async () => {
    haus = await Haus.create(rpcConfig);
  });

  it('should have a profile class', () => {
    expect(haus.profile).toBeTruthy();
  });

  it('should have a ceramic profile', async () => {
    const profile = await haus.profile.get(
      '0x83aB8e31df35AA3281d630529C6F4bf5AC7f7aBF'
    );
    expect(profile.name).toBeTruthy();
  }, 7000);

  it('should have a return a proper fallback if missing profile', async () => {
    const profile = await haus.profile.get(
      '0xf100041473280B594D78AB5Fa4C44Ba81edd367B'
    );
    expect(profile.name).toBeUndefined();
  }, 7000);
  it('should have an ens', async () => {
    const profile = await haus.profile.get(
      '0x83aB8e31df35AA3281d630529C6F4bf5AC7f7aBF'
    );
    expect(profile.ens).toBe('samkuhlmann.eth');
  }, 7000);
});
