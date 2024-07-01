import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
function GamePlay() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=30").then((res) => {
      const picsAndNames = res.data.results.map((pokemon) => {
        pokemon.pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          pokemon.url.split("/")[6]
        }.svg`;
        delete pokemon.url
        return pokemon;
      });
      setCards(picsAndNames);
    });
  }, []);
  console.log(cards)
  return (
    <div className='bg-slate-500/70   backdrop-blur-sm  container  mx-auto  rounded-lg text-white    px-5  py-4  '>
      <div className=' flex flex-wrap justify-center   gap-7 '>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default GamePlay;
