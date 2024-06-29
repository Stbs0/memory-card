import React from "react";
export function Menu() {
  return (
    <div className='place-self-end justify-self-center backdrop-blur-md  bg-white/30 rounded-t-xl h-12 px-4 py-2 flex items-center justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 min-w-52 text-nowrap'>
      <div className=''>
        Created by Stbs0
        <a
          href='https://github.com/Stbs0'
          target='_blank'
          referrerPolicy='no-referrer'
          className=' pl-2'>
          <img
            className='size-7 -translate-y-0.5 inline'
            src='src\assets\githublogo.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
}
