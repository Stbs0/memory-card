import Card  from "./Card";
function GamePlay() {
  return (
    <div className='bg-slate-500/70 justify-center backdrop-blur-sm   rounded-lg text-white  mx-auto  w-2/3 min-w-80 py-3 '>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-3 '>
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  );
}
export default GamePlay;
