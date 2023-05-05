import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


export default function App() {

  const [nome, setNome] = useState("Charizard");
  const [url, setUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",);

  const GetRandomPoke = async () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+randomNumber);
    let pokeData = await res.json();
    let nomeAPI = await pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
    let urlAPI = await pokeData.sprites?.other.home.front_default;
    setNome(nomeAPI);
    setUrl(urlAPI);
    return pokeData;

  }

  return (
    <div class="container">
      <div >
        <img class="image" src={url} alt="" />
      </div>
      <div class="name">
        <h1>{nome}</h1>
      </div>
      <div class="randomPoke">
        <button class="button" onClick={GetRandomPoke}>Random Poke</button>
      </div>
    </div>
  );
}


