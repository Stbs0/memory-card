import PropTypes from "prop-types";
import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

function Card({ pic, name, isClicked, refetch, handleShuffle }) {
  const { score, setScore, bestScore, setBestScore } = useContext(ScoreContext);



  return (
    <button
      onClick={handleOnClick}
      className=' flex flex-col items-center shadow-lg bg-slate-400/40 rounded-lg w-fit px-2 pt-2 justify-center space-y-2'>
      <img
        className='size-40 rounded-md  '
        src={pic}
        alt='pokemon'
      />

      <p className='capitalize text-lg font-semibold'>{name}</p>
    </button>
  );
}

Card.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
  handleShuffle: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default Card;
