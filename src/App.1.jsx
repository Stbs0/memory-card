import { useState } from "react";
import BackgroundImg from "./assets/bg.jpg";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen container mx-auto  relative *:text-white :'>
      <img
        src={BackgroundImg}
        alt=''
        className=' absolute  w-full object-center object-cover h-full opacity-70 -z-10'
      />

      <div className='   w-1/2 backdrop-blur-md bg-indigo-500/50 absolute  bottom-0 rounded-t-xl   '>
        <div className=''>
          Created by Stbs0{" "}
          <a
            href='https://github.com/Stbs0'
            className='size-9'>
            <img
              className='size-8 inline'
              src='src\assets\githublogo.svg'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  );
}
