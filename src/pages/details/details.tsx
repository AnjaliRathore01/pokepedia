// import { Container, Grid } from "@mui/material";

import { useLocation } from "react-router-dom";
import { IPokemonDetail } from "../../redux/pokemon/types";
import { useGetPokemonByNameQuery } from "../../redux/pokemon/service";
import { Container, Grid } from "@mui/material";

export default function Details() {
  const name = useLocation();

 const pokemonName =( name.search).split("?");

  console.log();
  const { data }: { data?: IPokemonDetail } = useGetPokemonByNameQuery(
    `${pokemonName[1]}`
  );
  console.log(data);

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "gray", marginTop: "50px" }}
    >
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "space-around", alignContent: "space-between" }}
      >
        <Grid >
          <h1
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            {pokemonName}
          </h1>
          <img width="170px" height="200px" src={data?.sprites.other["official-artwork"].front_shiny} alt="pokemon" />
          {/* <Grid>
                <h2>Generation-i</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-i"]["red-blue"]
                      .front_transparent
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-i"].yellow
                      .front_transparent
                  }
                  alt=""
                />
                <h2>Generation-ii</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-ii"].crystal
                      .front_shiny_transparent
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-ii"].gold
                      .front_transparent
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-ii"].silver
                      .front_transparent
                  }
                  alt=""
                />
                <h2>Generation-iii</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-iii"].emerald
                      .front_shiny
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-iii"][
                      "firered-leafgreen"
                    ].front_shiny
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-iii"][
                      "ruby-sapphire"
                    ].front_shiny
                  }
                  alt=""
                />
                <h2>Generation-iv</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-iv"][
                      "diamond-pearl"
                    ].front_shiny
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-iv"][
                      "heartgold-soulsilver"
                    ].front_shiny
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-iv"].platinum
                      .front_shiny
                  }
                  alt=""
                />
                <h2>Generation-v</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-v"]["black-white"]
                      .front_shiny
                  }
                  alt=""
                />
                <h2>Generation-vi</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-vi"][
                      "omegaruby-alphasapphire"
                    ].front_shiny
                  }
                  alt=""
                />
                <img
                  src={
                    item.details.sprites.versions["generation-vi"]["x-y"]
                      .front_shiny
                  }
                  alt=""
                />
                <h2>Generation-vii</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-vii"][
                      "ultra-sun-ultra-moon"
                    ].front_shiny
                  }
                  alt=""
                />
                <h2>Generation-viii</h2>
                <img
                  src={
                    item.details.sprites.versions["generation-viii"].icons
                      .front_default
                  }
                  alt=""
                />
              </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}
