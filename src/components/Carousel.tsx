import { useRecoilValue } from "recoil"
import { carouselMovieListSelector } from "../atoms/Movies/selectors/carouselMovieListSelector"

import { Carousel as ReactCarousel } from "react-responsive-carousel"

import { IMovie } from "../atoms/Movies"

export function Carousel() {
  const carousel = useRecoilValue(carouselMovieListSelector)

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Principais</h1>

      <ReactCarousel infiniteLoop autoPlay showStatus={false}>
        {carousel?.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </ReactCarousel>
    </div>
  )
}

function MovieCard(movie: IMovie) {
  return (
    <div key={movie.id}>
      <img
        src={movie?.["poster_path"]}
        className="w-[355px] h-[429px] rounded-lg"
      />

      <p className="legend">{movie.title}</p>
    </div>
  )
}
