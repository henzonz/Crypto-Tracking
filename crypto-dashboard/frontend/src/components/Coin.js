import React from 'react';
const Coin = ({
    rank, 
    name, 
    image, 
    current_price, 
    price_change_percentage_24h, 
    market_cap,
    volume, 
    circulating_supply, 
    symbol
}) =>
    {
        return(
            <tr className="overscroll-x">
              <th scope="row">{rank}</th>
              <td><img className="mr-2" src={image} style={{height: '25px', width: '25px'}} />{name} <span className="text-muted">{symbol.toUpperCase()}</span></td>
              <td>${current_price.toLocaleString()}</td>
              <td className={`${price_change_percentage_24h > 0 ? "green-text" : "red-text"}`}>{price_change_percentage_24h.toFixed(3)}%</td>
              <td>${market_cap.toLocaleString()}</td>
              <td>${volume.toLocaleString()}</td>
              <td>{circulating_supply.toLocaleString()} <span className="text-muted">{symbol.toUpperCase()}</span></td>
            </tr>
        );
        
    }

    export default Coin;