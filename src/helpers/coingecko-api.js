import axios from "axios";

const apiHander = axios.create({
  headers: {
    contentType: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: process.env.REACT_APP_COINGECKO_API_URL,
});

export const getBNBPrice = async () => {
  const priceId = "binancecoin";
  const currency = "usd";

  return apiHander
    .get("/simple/price", {
      params: {
        ids: priceId,
        vs_currencies: currency,
      },
    })
    .then((res) => {
      return res.data[priceId][currency];
    })
    .catch((err) => {
      console.error(err);
    });
};
