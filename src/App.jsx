import { Menu } from "./components/Menu";

import BackgroundImg from "./assets/bg.jpg";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore,setBestScore]=useState(0)
  return (
    <>
      <img
        src={BackgroundImg}
        alt=''
        className=' absolute  size-full object-center object-cover brightness-150 -z-10'
      />
      <Menu
        score={score}
        bestScore={bestScore}
      />
      <GamePlay
        setScore={setScore}
        score={score}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
