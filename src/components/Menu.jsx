import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

export const Score = () => {
  const { score, bestScore } = useContext(ScoreContext);
  return (
    <>
      <p>score: {score}</p>
      <p>best score: {bestScore}</p>
    </>
  );
};

export function Menu() {
  return (
    <div className='backdrop-blur-md rounded-b-xl px-4 py-2 flex flex-col sm:flex-row items-center justify-around gap-4 text-white'>
      <div>
        <h1 className='text-4xl font-bold'>Pokemon Memory Card Game</h1>
        <p className='text-xl font-semibold'>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
      </div>
      <div className='px-2 flex gap-4 items-center shrink-0'>
        <Score />
        <a
          href='https://github.com/Stbs0'
          target='_blank'
          referrerPolicy='no-referrer'
          className=' pl-2'>
          <img
            className='min-w-fit size-7 invert -translate-y-0.5 inline'
            src='src\assets\githublogo.svg'
            alt=''
          />
        </a>
      </div>
    </div>
  );
}
