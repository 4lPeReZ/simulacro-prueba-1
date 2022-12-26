import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const GIPHY_API_KEY = "HqSU9kMh3q0kwP93m5bhl5Kfaqd05d48"; // need a new Key
  const [catFact, setCatFact] = useState('');
  const [catGif, setCatGift] = useState('');

  const callGiphyAPI = (string) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.data[0].images.original.url)
      setCatGift(data.data[0].images.original.url)
    });

  };


  const callAPI = () => {
    fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => {
      setCatFact(data.fact || "La API no funciona");
      callGiphyAPI(data.fact.split(' ').slice(0, 3).join(' '));
      console.log(data.fact);
    });
    //console.log("API Call");
  };



  useEffect(
    callAPI,
    [],
  );

  return (
    <div style={{display: 'flex', gap: '1rem', alignItems:'center'}}>

      <img src={catGif} style={{objectFit: 'contain'}}/>
      <h1>{catFact}</h1>

    </div>
  )
}

export default App
