import { Menu } from "./components/Menu";

import BackgroundImg from "./assets/bg.jpg";
import GamePlay from "./components/GamePlay";
function App() {
  return (
    <>
      <img
        src={BackgroundImg}
        alt=''
        className=' absolute  size-full object-center object-cover brightness-150 -z-10'
      />
    <GamePlay     />
      <Menu />
    </>
  );
}

export default App;
