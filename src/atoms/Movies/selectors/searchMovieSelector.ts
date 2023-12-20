import { selectorFamily } from "recoil"

import { MoviesAtom } from ".."

export const searchMovies = selectorFamily({
  key: "searchMoviesSelector",
  get:
    (searchInput: string) =>
    ({ get }) => {
      const { data: movies } = get(MoviesAtom)

      const movieSearchInput = searchInput?.toLowerCase()

      const filter = movies?.filter((movie) => {
        const movieTitle = movie.title.toLowerCase()

        return movieTitle?.includes(movieSearchInput)
      })

      return filter
    },
})
