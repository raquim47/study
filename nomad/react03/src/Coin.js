import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(0);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
    
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <br />
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select
          onChange={(e) => {
            setSelectCoin(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="">select coin!</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form>
        <input
          onChange={(e) => {
            setMoney(e.target.value);
          }}
          type="number"
          min="1"
          placeholder="my money ex) 20"
        ></input>{" "}
        <span>USD</span>
      </form>
      <h3>{money} 달러로 {(money / selectCoin).toFixed(4)}코인 살 수 있어</h3>
    </div>
  );
}

export default Coin;
