import MediaCard from "./cardlist";
import ListHeader from "./header";
import PaginationControlled from "./pagination";

export default function MyApp() {
  return (
    <>
      <ListHeader />
      <MediaCard />
      <PaginationControlled />
    </>
  );
}
