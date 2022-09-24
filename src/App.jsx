import logo from './logo.svg';
import './App.css';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


function App() {
const [coins, setcoins] = useState([])
const [limit, setLimit] = useState(50)

useEffect(()=> {
  const fetchCoins = async () => {
const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`);
const data = await res.json()
console.log(data.data)
setcoins(data.data)


  }
  fetchCoins()
}, [limit])

const handleRefresh = () =>{
  setLimit(20)
  window.scrollTo(0,0)
}

  return (
    <div className="App">
    <div className="nav">
      <div className="left">
<p>Coins</p>
<p>Exchanges</p>
<p>Swap</p>
      </div>
      <div className="center">
      <img src='https://coincap.io/static/logos/black.svg' alt='logo' />
      </div>
     
      <div className="right">
        <a><SearchIcon /></a>
<a><SettingsIcon /></a>


<button>Connect Wallet</button>

      </div>
   

    </div>
    {/* navbar ends here */}
    <div className="bluebox">
    </div>
<div className='table'>
<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th> Name</th>
      <th>Price (USD)</th>
    </tr> 
    
  </thead>

  <tbody>
    
 
  {coins.map((coin)=>{
    return(
      <tr key={coin.id}>
  <td>
   {coin.rank}
  </td>
  <td>
   {coin.name}
  </td>
  <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
 </tr>
 
    )})}

 
  </tbody>
  <div className="buttons">
  <button onClick={()=> setLimit(limit + 20)}>Next</button>
<button onClick={handleRefresh}>refresh</button>
  </div>
 
  
</table>
</div>




    </div>
    
  );
}

export default App;
