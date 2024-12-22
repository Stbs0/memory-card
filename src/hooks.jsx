import { useQuery } from "react-query";
import axios from "axios";
import { POKE_URL } from "./constants";

export default function usePokemon() {

  const { data, isLoading ,refetch} = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const pokemonData = [];
      const startIndex = Math.floor(Math.random() * 85) + 1; // Random number between 1-85
      for (let i = startIndex; i < startIndex + 15; i++) {
        const data = axios.get(POKE_URL + "/" + i);
        pokemonData.push(data);
      }
      return Promise.all(pokemonData);
    },
    
    select: (data) => {
      return data.map((pokemon) => ({
        name: pokemon.data.name,
        pic: pokemon.data.sprites.other.dream_world.front_default,
     
        isClicked: false,
      }));
    },
  });
  

  return { data, isLoading, refetch };
}
