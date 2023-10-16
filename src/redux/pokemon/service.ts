// import Axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { buildWebStorage, setupCache } from "axios-cache-interceptor";
// import { IPokemonDetail } from "./types";

// const axios = setupCache(Axios, {
//   storage: buildWebStorage(localStorage, "axios-cache"),
// });

// class PokemonService {
//   public static async getList(offset: number) {
//     const response = await axios({
//       id: offset.toString(),
//       url: `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`,
//       method: "GET",
//     });

//     return response.data;
//   }

//   public static async getPokemon(url: string): Promise<IPokemonDetail> {
//     const res = await axios({ id: url, url: url, method: "GET" });
//     return res.data;
//   }
// }

// export default PokemonService;
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
export const { useGetPokemonByNameQuery } = pokemonApi