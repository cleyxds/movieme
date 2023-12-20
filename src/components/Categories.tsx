import { useRecoilValue } from "recoil"
import { categorizedMoviesSelector } from "../atoms/Movies/selectors/categorizedMoviesSelector"

import { IMovie } from "../atoms/Movies"

import { capitalize } from "../utils/capitalize"

type CategorizedProps = {
  category: string
}

export function CategorizedCard({ category }: CategorizedProps) {
  const categorizedMovies = useRecoilValue(categorizedMoviesSelector(category))

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <strong className="text-xl font-semibold ">
          {capitalize(category)}
        </strong>

        <a className="text-[#F3CC4F] text-sm font-medium" href="#">
          <button>Show more</button>
        </a>
      </div>

      <div className="flex items-center gap-4 overflow-x-hidden">
        {categorizedMovies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

function MovieCard(movie: IMovie) {
  const movieCardAlt = `${movie?.title} poster`
  const movieCardUrl = movie?.["poster_path"]

  return (
    <img
      className="w-[208px] h-[275px] rounded-lg"
      src={movieCardUrl}
      alt={movieCardAlt}
    />
  )
}
