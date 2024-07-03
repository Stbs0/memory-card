import { useState } from "react";

function Card({ img, name, handleOnClick }) {
  const [isClicked, setIsClicked] = useState(false);

  // Todo: dispacth isnt working correctly
  // score isClicked isnt reseting to defualt
  // does not render when clicked

  return (
    <button
      onClick={() => handleOnClick(isClicked, setIsClicked)}
      className=' flex flex-col items-center shadow-lg bg-slate-400/40 rounded-lg w-fit px-2 pt-2  space-y-2'>
      <img
        className='size-40 rounded-md  '
        src={img}
        alt='pokemon'
      />

      <p className='capitalize text-lg font-semibold'>{name}</p>
    </button>
  );
}
export default Card;
