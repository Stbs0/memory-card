import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, reset } from "../reducers/scoreReducer";
function Card({ img, name }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  // Todo: dispacth isnt working correctly
  // score isClicked isnt reseting to defualt
  // does not render when clicked
  const handleClick = () => {
    if (isClicked) {
      dispatch(reset());
    } else {
      dispatch(increment());
    }
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className=' flex flex-col items-center bg-slate-400/40 rounded-lg w-fit px-2 pt-2  space-y-2'>
      <img
        className='size-40 rounded-md'
        src={img}
        alt=''
      />

      <p>{name}</p>
    </button>
  );
}
export default Card;
