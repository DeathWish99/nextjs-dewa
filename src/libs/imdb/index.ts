const ACCESS_TOKEN = process.env.API_KEY;
const IMDB_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer" +
      ` eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjIxOWM0Y2QzNTAzZmJmMmZkODdjNzc2ZjBkNDQ3YSIsInN1YiI6IjY0YzBhNWRmNDIwMjI4MDEzZDkxNzExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gjsKrv26-rXFWt_uWG5vjWrVED9BKRuXkh93pbYSJhM`,
  },
};

export { IMDB_URL, options, ACCESS_TOKEN };
