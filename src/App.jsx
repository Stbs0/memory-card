import { Menu } from "./components/Menu";


import GamePlay from "./components/GamePlay";
import ScoreContextProvider from "./contexts/ScoreContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScoreContextProvider>

        <Menu />
        <GamePlay />
      </ScoreContextProvider>
    </QueryClientProvider>
  );
}

export default App;
