import { useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

const FindPlayer = () => {

  const [ username, setUsername ] = useState('');
  const [ player, setPlayer ] = useState(null);
  const [ playerFound, setPlayerFound ] = useState(false);
  
  // fetch('http://54.173.30.106/health-check')
  

  const searchPlayer = async () => {
    try {
      const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${apiKey}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setPlayer({playerData: result});
      setPlayerFound(true);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = event => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>Account Share Buster</h1>
      <input onChange={handleChange}></input>
      <button onClick={searchPlayer}>Click Here</button>
      {playerFound ?
      <div>
        <h1>Player has been found</h1>
        <h3>{player.playerData.name}</h3>
        <p>{player.playerData.puuid}</p>
        <p>Probability of account sharing: 50%</p>
      </div> :
      <div>
        Search for a player
      </div>}
    </>
  );
  
}

export default FindPlayer;