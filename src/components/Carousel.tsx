import { useRecoilValue } from "recoil"
import { carouselMovieListSelector } from "../atoms/Movies/selectors/carouselMovieListSelector"

import { Carousel as ReactCarousel } from "react-responsive-carousel"

import { IMovie } from "../atoms/Movies"

export function Carousel() {
  const carousel = useRecoilValue(carouselMovieListSelector)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Principais</h1>

      <ReactCarousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        stopOnHover
        showStatus={false}
      >
        {carousel?.map((movie) => (
          <CarouselMovieCard key={movie.id} {...movie} />
        ))}
      </ReactCarousel>
    </div>
  )
}

function CarouselMovieCard(movie: IMovie) {
  return (
    <img
      src={movie?.["poster_path"]}
      className="w-full h-full max-h-1/2 max-w-[355px] md:w-[355px] rounded-lg"
    />
  )
}
