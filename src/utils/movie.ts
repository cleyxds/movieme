import axios from "axios"

async function getMovies() {
  const request = {
    method: "GET",
    url: "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie",
  }

  const response = await axios(request)
  const data = response.data

  return data
}

export { getMovies }
