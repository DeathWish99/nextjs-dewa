import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import MovieById, { MovieByIDProps } from "@/libs/imdb/MovieById";
interface MovieProps {
  movie: MovieByIDProps;
}

export const getServerSideProps: GetServerSideProps<MovieProps> = async (
  context
) => {
  const genre = context.params!["id"] as string;
  try {
    const request = await MovieById(genre || "");
    return {
      props: {
        movie: request,
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
export default function Movie({ movie }: Props) {
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
