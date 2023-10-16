// import { Container, Grid } from "@mui/material";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { GET_DATA, GET_LIMIT } from "../../redux/pokemon/selector";
// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Result } from "../../redux/pokemon/reducer";
// import { ListThunk } from "../../redux/pokemon/action";

// export default function Details() {
//    const dispatch = useAppDispatch();
//   const { data } = useAppSelector(GET_DATA);
//    const offset = useAppSelector(GET_LIMIT);
//   const [pokemonDetail, setPokemonDetail] = useState<Result[]>([]);
//    const [id] = useSearchParams();
//   const pokemonId = id.get("id");

//   useEffect(() => {
//     dispatch(ListThunk.getData(offset));
//   }, [dispatch, offset]);

//   useEffect(() => {
//     data.filter((item: Result) => {
//       if (item.details.id === Number(pokemonId)) {
//         setPokemonDetail([item]);
//       }
//     });
//   }, [data, pokemonId]);
  

//   //   const ImageStyle = styled('img')({
//   //     height:"200px",
//   //     width:"200px"
//   //   })

//   return (
//     <Container maxWidth="sm" sx={{backgroundColor:"gray",marginTop: "50px" }}>
//       <Grid
//         container
//         spacing={4}
//         sx={{ justifyContent: "space-around", alignContent: "space-between" }}
//       >
//         {pokemonDetail.map((item) => {
//           return (
//             <Grid key={pokemonId}>
//               <h1
//                 style={{
//                   padding: "20px",
//                   textAlign: "center",
//                 }}
//               >
//                 {item.pokemonName.toUpperCase()}
//               </h1>
//               <img
//                 width="100px"
//                 height="100px"
//                 src={item.details.sprites.other["official-artwork"].front_shiny}
//                 alt="pokemon"
//               />
//               <Grid>
//                 <h2>Generation-i</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-i"]["red-blue"]
//                       .front_transparent
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-i"].yellow
//                       .front_transparent
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-ii</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-ii"].crystal
//                       .front_shiny_transparent
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-ii"].gold
//                       .front_transparent
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-ii"].silver
//                       .front_transparent
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-iii</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iii"].emerald
//                       .front_shiny
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iii"][
//                       "firered-leafgreen"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iii"][
//                       "ruby-sapphire"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-iv</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iv"][
//                       "diamond-pearl"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iv"][
//                       "heartgold-soulsilver"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-iv"].platinum
//                       .front_shiny
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-v</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-v"]["black-white"]
//                       .front_shiny
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-vi</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-vi"][
//                       "omegaruby-alphasapphire"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-vi"]["x-y"]
//                       .front_shiny
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-vii</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-vii"][
//                       "ultra-sun-ultra-moon"
//                     ].front_shiny
//                   }
//                   alt=""
//                 />
//                 <h2>Generation-viii</h2>
//                 <img
//                   src={
//                     item.details.sprites.versions["generation-viii"].icons
//                       .front_default
//                   }
//                   alt=""
//                 />
//               </Grid>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Container>
//   );
// }
