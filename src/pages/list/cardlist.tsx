import { Container, Grid } from "@mui/material";

import { useGetPokemonListQuery } from "../../redux/pokemon/service";
import PokemonCard from "./card";
import { IResult } from "../../redux/pokemon/types";

export default function App() {
  const { data, isLoading } = useGetPokemonListQuery("pokemon");
  console.log(import.meta.env.VITE_SOME_KEY);

  return (
    <Container>
      {isLoading ? (
        <span>loading</span>
      ) : (
        <>
          <Grid container spacing={4}>
            {data.results.map((item: IResult) => {
              return (
                <Grid xs={12} sm={6} md={4} lg={3} xl={3} item key={data?.id}>
                  <PokemonCard name={item.name} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Container>
  );
}
