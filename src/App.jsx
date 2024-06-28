import { useState } from "react";

import { Pokedex } from "pokeapi-js-wrapper";

function App() {
  const [count, setCount] = useState(0);
  const P = new Pokedex();
  return (
    <>
      <div>hello</div>
    </>
  );
}

export default App;
