import { IMovie } from "../atoms/Movies"

export function MovieCard(movie: IMovie) {
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
