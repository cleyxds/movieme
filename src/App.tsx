import { Carousel } from "./components/Carousel"
import { CategoriesList } from "./components/CategoriesList"
import { FilterList } from "./components/FilterList"

export function App() {
  return (
    <main className="flex flex-col gap-6 py-8 min-h-screen">
      <FilterList />

      <div className="px-4 gap-6 flex flex-col">
        <h1 className="text-3xl font-bold">Movie.me</h1>

        <Carousel />
      </div>

      <CategoriesList />
    </main>
  )
}
