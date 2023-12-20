import { useRecoilValue } from "recoil"
import { searchMoviesSelector } from "../atoms/Movies/selectors/searchMovieSelector"
import { MovieSearchInput } from "../atoms/Movies/search"

import { CategorizedCard } from "./Categories"

export function CategoriesList() {
  const searchInput = useRecoilValue(MovieSearchInput)
  const result = useRecoilValue(searchMoviesSelector(searchInput))

  return (
    <>
      <CategorizedCard category="drama" />
      <CategorizedCard category="comédia" />
      <CategorizedCard category="super heróis" />
    </>
  )
}
