import { Carousel } from "./components/Carousel"
import { CategoriesList } from "./components/CategoriesList"
import { Search } from "./components/Search"

export function App() {
  return (
    <div className="flex flex-col gap-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Movie.me</h1>

      <Search />

      <Carousel />

      <CategoriesList />
    </div>
  )
}
