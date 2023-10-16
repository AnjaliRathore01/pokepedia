import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { ListActions } from "../../redux/pokemon/reducer";
// import { GET_LIMIT } from "../../redux/pokemon/selector";

export default function PaginationControlled() {
  // const dispatch = useAppDispatch();
  // const offset = useAppSelector(GET_LIMIT);
  const [page, setPage] = React.useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (value > page) {
      // dispatch(ListActions.setLimit(offset + 20));
    } else {
      // dispatch(ListActions.setLimit(offset - page*20));
    }
  };

  return (
    <Stack spacing={2}>
      <Typography sx={{display:"flex",justifyContent:"center"}}>Page: {page}</Typography>
      <Pagination sx={{display:"flex",justifyContent:"center"}} count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
