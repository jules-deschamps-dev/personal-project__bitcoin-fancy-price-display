import React from "react";
import axios from "axios";

const Price = () => {
  let btc = "*****";

  const bitcoin = () => {
    try {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/coins/bitcoin`,
      }).then((res) => {
        btc = res.data;
        console.log("Price : ", btc);
        localStorage.setItem("btcPrice", btc);
        let hexPrice = btc.toString(6);
        document.getElementById("bitcoin-price").innerHTML = btc + " $";
        document.getElementById("bitcoin-price").style.color = "#" + hexPrice;
        document.getElementsByTagName("html")[0].style.backgroundColor =
          "#" + hexPrice;
      });
    } catch (error) {
      console.log("erreur !", error);
    }
  };

  setInterval(bitcoin, 4200);

  return (
    <div className="price-bloc">
      <h1 id="bitcoin-price">*****</h1>
    </div>
  );
};

export default Price;
