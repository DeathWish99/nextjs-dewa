import { SlControlStart } from "react-icons/sl";
import { IMDB_URL, options } from "./index";
import { AllMovieProps } from "@libs/imdb/AllMovie";
export default async function getAllMovie(
  searchMovie: string
): Promise<AllMovieProps> {
  const req = await fetch(IMDB_URL + "/search/movie?query=" + "irons", options);
  const response = (await req.json()) as unknown;
  if (!req.ok) {
    console.log(searchMovie);
    throw Error("failed to fetch  treading imdb movie ");
  }

  return response as AllMovieProps;
}
