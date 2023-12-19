import { useRecoilValue } from "recoil"
import { carouselMovieListSelector } from "../atoms/Movies/selectors/carouselMovieListSelector"

export function Carousel() {
  const carousel = useRecoilValue(carouselMovieListSelector)

  return (
    <div>
      <h1 className="text-4xl font-bold underline">Principais</h1>

      <div className="flex items-center gap-4 overflow-x-scroll">
        {carousel?.map((movie) => (
          <div key={movie.id} className="">
            <p className="text-2xl font-medium">{movie?.["original_title"]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
