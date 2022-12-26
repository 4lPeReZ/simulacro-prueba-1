import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [catFact, setCatFact] = useState('')

  const callAPI = () => {
    fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => {
      setCatFact(data.fact);
      console.log(data.fact);
    });
    //console.log("API Call");
  };

  

  useEffect(
    callAPI,
    [],
  );

  return (
    <div>


      <h1>{catFact}</h1>


    </div>
  )
}

export default App
