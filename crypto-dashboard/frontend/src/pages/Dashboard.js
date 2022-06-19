
import React, { useState, useEffect } from 'react';
import '../css/App.css';
import axios from 'axios';
import '../css/bootstrap.min.css'
import Coin from '../components/Coin'
import Searchbar from '../components/Searchbar'


function App() {

  const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
  const [coins, setCoins] = useState([]);
  const [searchCrypto, setSearchCrypto] = useState("");

  useEffect(() => {
    axios.get(API_URL).then(response => {
      setCoins(response.data);
      console.log(response.data);
    })
  }, [])


  const filterCoins = coins.filter((coin) => {
    if (searchCrypto === "") {
      return coin;
    } else if (coin.name.toLowerCase().includes(searchCrypto.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchCrypto.toLowerCase())) {
      return coin;
    }
  })

  return (
    <div className="main-page">

      <Searchbar handleSearchCrypto={setSearchCrypto} />
      {/* Coins */}
      <div className="table-responsive">
        <table className="table table-dark">
          <thead className="table-header__fontsize">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">24h (<span className="text-muted">%</span>)</th>
              {/* <th scope="col">7d %</th> */}
              <th scope="col">Mkt. Cap</th>
              <th scope="col">Volume(<span className="text-muted">24h</span>)</th>
              <th scope="col">Circulating Supply</th>
            </tr>
          </thead>
          <tbody className="table-body__fontsize">
            {filterCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  rank={coin.market_cap_rank}
                  image={coin.image}
                  name={coin.name}
                  current_price={coin.current_price}
                  price_change_percentage_24h={coin.price_change_percentage_24h}
                  market_cap={coin.market_cap}
                  volume={coin.total_volume}
                  circulating_supply={coin.circulating_supply}
                  symbol={coin.symbol}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
