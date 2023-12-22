import { useRecoilValue } from "recoil"
import { categorizedMoviesSelector } from "../atoms/Movies/selectors/categorizedMoviesSelector"

import { MovieCard } from "./MovieCard"

import { capitalize } from "../utils/capitalize"

type CategorizedProps = {
  category: string
}

export function CategorizedCard({ category }: CategorizedProps) {
  const categorizedMovies = useRecoilValue(categorizedMoviesSelector(category))

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between px-4">
        <strong className="text-xl font-semibold ">
          {capitalize(category)}
        </strong>

        <a className="text-[#F3CC4F] text-sm font-medium" href="#">
          <button>Show more</button>
        </a>
      </div>

      <div className="flex items-center px-4 gap-4 overflow-x-scroll">
        {categorizedMovies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}
