import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});
api.interceptors.response.use((response) => {
  return {
    name: response.data.name,
    pic: response.data.sprites.other.dream_world.front_default,
    isClicked: false,
  };
});
export default api;
