// import { createAsyncThunk } from "@reduxjs/toolkit";
// import PokemonService from "./service";
// import { Result } from "./reducer";
// export class ListThunk {
//   //

//   public static getData = createAsyncThunk(
//     "/pokemon/get/List",
//     async (offset: number) => {
//       // Inital Response of List
//       const pokemonList = await PokemonService.getList(offset);
//       // Update type
//       let data: Result[] = [];
//       const result = pokemonList?.results || [];
//       // Iterate through list

//       for (const iterator of result) {
//         const res = await PokemonService.getPokemon(iterator.url);
//         const details = { ...res };
//         // Inject the new object to the data array
//         data = data.concat({ pokemonName: iterator.name, details });
//       }

//       // return the data array
//       data = data.sort((a, b) => (a.pokemonName > b.pokemonName ? 1 : -1));
//       return data;
//     }
//   );
// }

// // pokemonList?.results.forEach(
// //   async (element: { url: string; name: string }) => {
// //     // Call the detail api

// //     const res = await PokemonService.getPokemon(element.url);
// //     const details = { ...res };

// //     // Merge the list item from the loop and the data from api

// //     data = data.concat({ pokemonName: element.name, details });
// //     // console.log(res);
// //   }
// // );
