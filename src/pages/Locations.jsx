import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import background from "../assets/wallpaper.jpg"
import Cards from "../components/Cards"

function Locations() {
  const { locationsData, locationsResults, locationsTotal, setLocations } =
    useContext(DataContext)
  let { name, dimension } = locationsData

  const pageChange = (e) => {
    setLocations(e.target.value)
  }

  return (
    <>
      <div className="bg-black text-white text-[18px] sm:text-[24px] mt-[98px] sm:mt-32 p-2 pt-10 sm:pt-0 flex items-center justify-around">
        <div className="Flex justify-center items-center text-[18px] ms:text-[24px]">
          <h1>
            Location : 
            <span className="text-[#43d22b] text-[18px] ms:text-[24px] pl-2">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h1>
            Dimension : 
            <span className="text-[#43d22b] text-[18px] ms:text-[24px] pl-2">
              {dimension === "" ? "Umknown" : dimension}
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="pr-4">Locations :</h1>
          <select
            onChange={pageChange}
            className="w-22 text-center form-select appearance-none px-3 py-1.5 text-base font-normal text-white bg-black bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-[#43d22b] focus:border-[#43d22b] focus:outline-none overflow-auto"
            aria-label="Default select example"
          >
            {/* [...Array(Variable).keys()] transforma a array y luego un key que nos devuelve el correlativo en este caso */}
            {[...Array(locationsTotal).keys()].map((x) => {
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
        <Cards results={locationsResults} />
        <Cards />
      </div>
    </>
  )
}

export default Locations
