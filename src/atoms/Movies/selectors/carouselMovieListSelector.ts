import { selector } from "recoil"

import { MoviesAtom } from ".."

export const carouselMovieListSelector = selector({
  key: "carouselMovieListSelector",
  get: ({ get }) => {
    const { data: movies } = get(MoviesAtom)

    return movies?.slice(0, 10)
  },
})
