import Card from "./Card";
function GamePlay() {
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
