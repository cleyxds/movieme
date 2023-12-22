import { useCallback } from "react"

import { useRecoilState } from "recoil"
import { MovieSearchInput } from "../atoms/Movies/search"

export function Search() {
  const [movieSearch, setMovieSearch] = useRecoilState(MovieSearchInput)

  const handleChangeSearch = useCallback(
    (input: string) => {
      setMovieSearch(input)
    },
    [setMovieSearch]
  )

  return (
    <div className="sticky top-4">
      <input
        className="bg-[#7676803D] text-[#767680] text-lg p-2 rounded-lg w-full"
        type="text"
        id="search"
        name="Procurar"
        value={movieSearch}
        placeholder="Pesquise o nome do filme, atores ..."
        onChange={(event) => handleChangeSearch(event.target.value)}
      />
    </div>
  )
}
