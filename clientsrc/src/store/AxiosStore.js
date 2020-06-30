import Axios from "axios";
export const movieApi = Axios.create({
  baseURL: "https://imdb-api.com/API/Search/k_68mNDZ2P/",
  timeout: 3000
})

export const popularApi = Axios.create({
  baseURL: "https://imdb-api.com/en/API/MostPopularMovies/k_68mNDZ2P",
  timeout: 3000
})