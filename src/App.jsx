import { Menu } from "./components/Menu";

import GamePlay from "./components/GamePlay";
import ScoreContextProvider from "./contexts/ScoreContext";
import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScoreContextProvider>
        {/* <img
          src={BackgroundImg}
          alt=''
          className=' absolute  size-full object-center object-cover brightness-150 -z-10'
        /> */}
        <Menu />
        <GamePlay />
      </ScoreContextProvider>{" "}
    </QueryClientProvider>
  );
}

export default App;
