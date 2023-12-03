import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useGetPokemonByNameQuery } from "../../redux/pokemon/service";
import { IPokemonDetail } from "../../redux/pokemon/types";

export default function PokemonCard(prop: { name: string }) {
  const { name } = prop;

  const { data }: { data?: IPokemonDetail } = useGetPokemonByNameQuery(
    `${name}`
  );
  const navigate = useNavigate();
  return (
    <>
      <Card elevation={1} sx={{ maxWidth: 330 }}>
        <CardMedia
          sx={{ height:"200px", backgroundSize: "150px" }}
          image={data?.sprites.other["official-artwork"].front_shiny}
          title="Pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={() => navigate(`/details?${name}`)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
