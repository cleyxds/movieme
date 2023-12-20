import { selectorFamily } from "recoil"

import { MoviesAtom } from ".."

export const searchMoviesSelector = selectorFamily({
  key: "searchMoviesSelector",
  get:
    (searchInput: string) =>
    ({ get }) => {
      const { data: movies } = get(MoviesAtom)

      const movieSearchInput = searchInput?.toLowerCase()

      if (movieSearchInput?.length < 3) {
        return []
      }

      const filter = movies?.filter((movie) => {
        const movieTitle = movie.title.toLowerCase()

        return movieTitle?.includes(movieSearchInput)
      })

      return filter
    },
})
