import { useRecoilValue } from "recoil"
import { searchMoviesSelector } from "../atoms/Movies/selectors/searchMovieSelector"
import { MovieSearchInput } from "../atoms/Movies/search"

import { MovieCard } from "./MovieCard"
import { CategorizedCard } from "./Categories"

export function CategoriesList() {
  const searchInput = useRecoilValue(MovieSearchInput)
  const result = useRecoilValue(searchMoviesSelector(searchInput))

  if (result?.length) {
    return (
      <div className="px-4">
        {result?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    )
  }

  return (
    <>
      <CategorizedCard category="drama" />
      <CategorizedCard category="comédia" />
      <CategorizedCard category="super heróis" />
    </>
  )
}
