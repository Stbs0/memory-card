import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import shuffle from "../utilis/shuffleCards";
// TODO: add status to keep score
function GamePlay({count}) {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=15").then((res) => {
      const picsAndNames = res.data.results.map((pokemon) => {
        pokemon.pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          pokemon.url.split("/")[6]
        }.svg`;
        delete pokemon.url;
        return pokemon;
      });
      setCards(picsAndNames);
    });
  }, []);
  console.log(cards);
  const shuffledCards = shuffle([...cards])
  return (
    <div className='bg-slate-500/70   backdrop-blur-sm  container  mx-auto  rounded-lg text-white    px-5  py-4  '>
      <div className=' flex flex-wrap justify-center   gap-7 '>
        {shuffledCards.map((card) => {
          return (
            <Card
              key={card.name}
              img={card.pic}
              name={card.name}
            />
          );
        })}
      </div>
    </div>
  );
}
export default GamePlay;
