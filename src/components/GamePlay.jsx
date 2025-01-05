import { useContext } from "react";
import { queryClient } from "../App";
import { ScoreContext } from "../contexts/ScoreContext";
import usePokemon from "../hooks";
import shuffle from "../utilis/shuffleCards";
function GamePlay() {
  const { data, isLoading, refetch } = usePokemon();
  const { score, setScore, bestScore, setBestScore } = useContext(ScoreContext);

  if (isLoading) return <div>Loading...</div>;
console.log(data)
  const handleShuffle = (card) => {
    const queryKey = ["pokemon"];

    const cachedData = queryClient.getQueryData(queryKey).map((pokemon) => {
      console.log(pokemon);
      if (pokemon.name === card.name) {
        return card;
      }
      return pokemon;
    });

    if (cachedData) {
      const shuffledData = shuffle(cachedData);
      queryClient.setQueryData(queryKey, shuffledData);
    }
  };
  const handleOnClick = (card) => {
    if (bestScore <= score) {
      setBestScore(score + 1);
    }
    if (card.isClicked) {
      console.log("first");
      setScore(0);
      refetch();
    } else {
      console.log(card.isClicked);
      card.isClicked = true;
      setScore(score + 1);
      handleShuffle(card);
    }
  };
  return (
    <div className='bg-slate-500/70 grid sm:grid-cols-2 md:grid-cols-3 backdrop-blur-sm    mx-auto my-auto rounded-lg text-black gap-10 place-items-center   px-16 py-10  '>
      {data.slice(9).map((card) => {
        return (
          <button
            key={card.name}
            onClick={() => handleOnClick(card)}
            className=' outline-none flex flex-col items-center shadow-lg bg-slate-400/40 rounded-lg w-fit px-2 pt-2 justify-center space-y-2'>
            <img
              className='size-40 rounded-md  '
              src={card.pic}
              alt='pokemon'
            />

            <p className='capitalize text-lg font-semibold'>{card.name}</p>
          </button>
        );
      })}
    </div>
  );
}
export default GamePlay;
