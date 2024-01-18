import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AllMovie, { AllMovieProps } from "@/libs/imdb/AllMovie";
import SearchMovie from "@/libs/imdb/SearchMovie";
import CardsWrapper from "@components/Card/CardList";
interface SearchProps {
  movies: AllMovieProps;
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context
) => {
  const genre = context.params!["search"] as string;
  try {
    const request = await SearchMovie(genre || "");
    return {
      props: {
        movies: request,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Search({ movies }: Props) {
  return (
    <div>
      <CardsWrapper resultArr={movies.results} />
    </div>
  );
}
