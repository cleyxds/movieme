/* eslint-disable @typescript-eslint/no-explicit-any */

import { atom } from "recoil"
import { getMovies } from "../../utils/movie"

export type IMovie = {
  id: number
  adult: boolean
  title: string
  original_title: string
}

export type IMoviesAtom = {
  loading: boolean
  data: IMovie[]
  page?: number
  total_pages?: number
  total_results?: number
}

const DEFAULT_MOVIES_STATE: IMoviesAtom = {
  loading: true,
  data: [],
}

export const MoviesAtom = atom<IMoviesAtom>({
  key: "moviesAtom",
  default: DEFAULT_MOVIES_STATE,
  effects: [initializeMoviesAtom],
})

function initializeMoviesAtom({ setSelf }: unknown | any) {
  getMovies().then((response) => {
    const data: IMoviesAtom = {
      data: response?.["results"],
      loading: false,
      page: response["page"],
      total_pages: response["total_pages"],
      total_results: response["total_results"],
    }

    setSelf(data)
  })
}
