import { useRecoilValue } from "recoil"
import { carouselMovieListSelector } from "../atoms/Movies/selectors/carouselMovieListSelector"

import { Carousel as ReactCarousel } from "react-responsive-carousel"

import { IMovie } from "../atoms/Movies"

export function Carousel() {
  const carousel = useRecoilValue(carouselMovieListSelector)

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Principais</h1>

      <ReactCarousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        stopOnHover
        showStatus={false}
      >
        {carousel?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </ReactCarousel>
    </div>
  )
}

function MovieCard(movie: IMovie) {
  return (
    <div className="relative">
      <CardHover {...movie} />

      <img
        src={movie?.["poster_path"]}
        className="w-[355px] h-[429px] rounded-lg"
      />
    </div>
  )
}

function CardHover(movie: IMovie) {
  return (
    <div className="w-full h-full inset-0 absolute z-50">
      <h1>{movie.title}</h1>
    </div>
  )
}
