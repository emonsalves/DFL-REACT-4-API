<<<<<<< HEAD
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import background from "../assets/wallpaper.jpg"
import Cards from "../components/Cards"
import Filters from "../components/Filters/Filters"

function Episodes() {
  const { episodesData, episodesResults, episodesTotal, setEpisodes } =
    useContext(DataContext)
  let { name, air_date } = episodesData

  const pageChange = (e) => {
    setEpisodes(e.target.value)
  }

  return (
    <>
      <div className="bg-black text-white text-[1.25rem] mt-32 p-2 flex items-center justify-around">
        <div className="Flex justify-center items-center">
          <h1>
            Name Episode :
            <span className="text-[#43d22b] text-[1.5rem]">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h1>
            Air date :
            <span className="text-[#43d22b] text-[1.5rem]">
              {air_date === "" ? "Umknown" : air_date}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="pr-4">Episodio N°</h1>
          <select
            onChange={pageChange}
            className="w-16 text-center form-select appearance-none px-3 py-1.5 text-base font-normal text-white bg-black bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-[#43d22b] focus:border-[#43d22b] focus:outline-none"
            aria-label="Default select example"
          >
            {/* [...Array(Variable).keys()] transforma a array segun el valor de la variable */}
            {[...Array(episodesTotal).keys()].map((x) => {
              return (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div
        className="grid grid-cols-6 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background}) ` }}
      >
        <Cards results={episodesResults} />
        <Cards />
      </div>
    </>
  )
=======
const Episodes = () => {
  return <div>Episodes</div>
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
}

export default Episodes
