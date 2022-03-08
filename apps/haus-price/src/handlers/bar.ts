const axios = require('axios');

export const handler = async (event: any, context: any) => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xf2051511b9b121394fa75b8f7d4e7424337af687&vs_currencies=usd`;
    try {
      const res = await axios.get(url);

      return res.data;
    } catch (err) {
      console.error(err);
      return err;
    }
    console.log('Lambda run');
    return 'success';
  } catch {
    throw new Error('We failed');
  }
};
