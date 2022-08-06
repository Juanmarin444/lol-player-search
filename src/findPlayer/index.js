import { useState } from 'react';
import PlayerInfo from '.././playerInfo';

const apiKey = process.env.REACT_APP_API_KEY;

const FindPlayer = () => {

  const [ username, setUsername ] = useState('');
  const [ data, setData ] = useState(null);
  
  
  const searchPlayer = () => {
    fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey}`)

    // fetch('http://54.173.30.106/health-check')
    .then((response) => {
        console.log(response)
        if (!response.ok) {
            return {};
        } else {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data)
        setData({
            playerData: data
        })
    })
  }

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>Account Share Buster</h1>
      <button onClick={searchPlayer}>Click Here</button>
      <p>Search for a player</p>
      <input onChange={handleChange}></input>
      <PlayerInfo props={data}/>
    </>
  );
  
}

export default FindPlayer;