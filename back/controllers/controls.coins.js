const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

exports.bitcoin = async (req, res) => {
  try {
    let data = await CoinGeckoClient.simple.price({
      ids: ["bitcoin"],
    });
    console.log(data.data);
    return res.status(200).json(data.data.bitcoin.usd);
  } catch (error) {
    res.status(500).json("back eroor : ", error);
  }

  //.then((res) => res.status(201).json({ message: res.data.bitcoin.usd }))
};

/*
//3. Make calls
var func = async () => {
  let data = await CoinGeckoClient.simple.price({
    ids: ["bitcoin"],
  });
  console.log(data.data);
};

*/
