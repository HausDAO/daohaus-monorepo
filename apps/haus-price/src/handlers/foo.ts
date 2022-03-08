const axios = require('axios');

export const handler = async (event: any, context: any) => {
  try {
    console.log('yolo');
    const url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xf2051511b9b121394fa75b8f7d4e7424337af687&vs_currencies=usd`;
    const res = await axios.get(url);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(res.data),
    };
  } catch {
    // throw new Error('We failed');

    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'bar' }),
    };
  }
};
