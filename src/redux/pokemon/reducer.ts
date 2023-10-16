// import { createSlice } from "@reduxjs/toolkit";
// import { ListThunk } from "./action";
// import { IPokemonDetail } from "./types";

// export interface IPokemonListItem {
//   name: string;
// }

// export interface Result {
//   pokemonName: string;
//   details: IPokemonDetail;
// }

// export interface ILimits {
//   limit: number;
//   offset: number;
// }

// interface IInitialState {
//   data: Result[];
//   limits: ILimits;
// }

// const initialState: IInitialState = {
//   data: [] as Result[],
//   limits: {
//     limit: 20,
//     offset: 0,
//   } as ILimits,
// };

// const ListSlice = createSlice({
//   name: "pokemon-list",
//   initialState,
//   reducers: {
//     setLimit: (state: IInitialState, action) => {
//       state.limits.offset = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(ListThunk.getData.fulfilled, (state, action) => {
//       state.data = action.payload;
//     });
//   },
// });

// export const ListActions = { ...ListSlice.actions };
// export default ListSlice;
