// import { GET_DATA, GET_LIMIT } from "../../redux/pokemon/selector";
// import { ListThunk } from "../../redux/pokemon/action";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useGetPokemonByNameQuery } from "../../redux/pokemon/service";

// export default function MediaCard() {
//   const dispatch = useAppDispatch();
//   const { data } = useAppSelector(GET_DATA);
//   const offset = useAppSelector(GET_LIMIT);
//   const navigate = useNavigate();
//   const CardImage = styled(CardMedia)({
//     height: 200,
//     objectFit: "fill",
//     backgroundSize: "200px",
//   });

//   useEffect(() => {
//     dispatch(ListThunk.getData(offset));
//   }, [dispatch, offset]);

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={4}>
//         {data.map((item, index) => {
//           return (
//             <Grid xs={12} sm={6} md={4} lg={3} xl={3} item key={index}>
//               <Card elevation={1} sx={{ maxWidth: 330 }}>
//                 <CardImage
//                   image={
//                     item.details.sprites.other["official-artwork"].front_shiny
//                   }
//                   title="Pokemon"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {item.pokemonName}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with
//                     over 6,000 species, ranging across all continents except
//                     Antarctica
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Share</Button>
//                   <Button
//                     size="small"
//                     onClick={() => navigate(`/details?id=${item.details.id}`)}
//                   >
//                     Learn More
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Container>
//   );
// }
export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const navigate = useNavigate();
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Grid container spacing={4}>
            <Grid xs={12} sm={6} md={4} lg={3} xl={3} item>
              <Card elevation={1} sx={{ maxWidth: 330 }}>
                <CardMedia image={data.sprites.front_shiny} title="Pokemon" />
                <img src={data.sprites.front_shiny} alt={data.species.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.species.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small" onClick={() => navigate(`/details?`)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : null}
    </div>
  );
}
// //
// // style={{
// //   display: "flex",
// //   justifyContent: "space-evenly",
// //   flexWrap: "wrap",
// //   gap: "20px",
// // }}
