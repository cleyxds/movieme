import { selectorFamily } from "recoil"

import { MoviesAtom } from ".."

export const categorizedMoviesSelector = selectorFamily({
  key: "categorizedMoviesSelector",
  get:
    (category: string) =>
    ({ get }) => {
      const { data: movies } = get(MoviesAtom)

      const movieCategory = category?.toLowerCase()

      // TODO
      // Implement Category Filter

      return movies
    },
})
