import Card from "./Card";
import shuffle from "../utilis/shuffleCards";
import { queryClient } from "../App";
import usePokemon from "../hooks";
function GamePlay() {
  const { data, isLoading, refetch } = usePokemon();

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  const handleShuffle = () => {
    const queryKey = ["pokemon"];

    const cachedData = queryClient.getQueryData(queryKey);

    if (cachedData) {
      const shuffledData = shuffle([...cachedData]); // Shuffle the data
      queryClient.setQueryData(queryKey, shuffledData); // Update the cache with shuffled data
    }
  };

  console.log(data);
  return (
    <div className='bg-slate-500/70 grid sm:grid-cols-2 md:grid-cols-3 backdrop-blur-sm    mx-auto my-auto rounded-lg text-black gap-10 place-items-center   px-16 py-10  '>
      {data.slice(9).map((card) => {
        return (
          <Card
            handleShuffle={handleShuffle}
            key={card.name}
            refetch={refetch}
            {...card}
          />
        );
      })}
    </div>
  );
}
export default GamePlay;
