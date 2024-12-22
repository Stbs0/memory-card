import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const ScoreContext = createContext({});

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  

  return (
    <ScoreContext.Provider value={{ score, setScore, bestScore, setBestScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

ScoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScoreContextProvider;
