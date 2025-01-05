import { useQuery } from "@tanstack/react-query";
import { POKE_URL } from "./constants";
import api from "./lib/api";

export default function usePokemon() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const pokemonData = [];
      const startIndex = Math.floor(Math.random() * 85) + 1; // Random number between 1-85
      for (let i = startIndex; i < startIndex + 15; i++) {
        const data = api.get(POKE_URL + "/" + i);
        pokemonData.push(data);
      }
      return await Promise.all(pokemonData);
    },
  });
  return { data, isLoading, refetch };
}
