import axios from './AxiosConfig';

export const getPokemons = (limit = 50) => axios.get(`/pokemon?limit=${limit}`);
