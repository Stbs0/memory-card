import { Menu } from "./components/Menu";

import BackgroundImg from "./assets/bg.jpg";

function App() {
  return (
    <>
      <img
        src={BackgroundImg}
        alt=''
        className=' absolute  size-full object-center object-cover brightness-150 -z-10'
      />
      <div className='bg-slate-500/70 backdrop-blur-sm  rounded-lg text-white h-[18rem]  container mx-auto basis-[25rem] min-w-80 '>
        <div className='columns-3'>
          <div>dddd</div>
          <div>ffff</div>
          <div>ffff</div>
          <button></button>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default App;
