import { useState } from "react";
import BackgroundImg from "./assets/bg.jpg";
import { Pokedex } from "pokeapi-js-wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen relative *:text-white '>
      <img
        src={BackgroundImg}
        alt=''
        className=' absolute  w-full object-center object-cover h-full opacity-70 -z-10'
      />
      <div className='h-16  bg-slate-700 rounded-b-xl'>hello</div>
    </div>
  );
}

export default App;
