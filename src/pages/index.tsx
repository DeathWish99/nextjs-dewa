import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AllMovie, { AllMovieProps } from "@/libs/imdb/AllMovie";
import { options } from "@/libs/imdb";
import CardsWrapper from "@components/Card/CardList";
interface HomeProps {
  movies: AllMovieProps;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const genre = context.query["genre"] as string;
  try {
    const request = await AllMovie(genre || "");
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
export default function Home({ movies }: Props) {
  return (
    <div>
      <CardsWrapper resultArr={movies.results} />
    </div>
  );
}
