import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import Gender from "../Categories/Gender"
import Species from "../Categories/Species"
import Status from "../Categories/Status"
import styles from "./Filters.css"
const Filters = () => {
  const { setPageNumber, setGender, setStatus, setSpecies } =
    useContext(DataContext)

  const clearFilters = () => {
    setPageNumber(1)
    setGender("")
    setSpecies("")
    setStatus("")
    window.location.reload(false);   
  }

  return (
    <>
      <div className="w-full flex items-start mt-20 md:mt-40">
        <div className="w-36 px-5 py-8 mx-auto bg-black rounded-lg shadow-xl">
          <h1 className="text-xl mb-1 text-center text-white">Filters</h1>
          <h1
            className="text-l mb-5 text-center text-red-500 underline"
            style={{ cursor: "pointer" }}
            onClick={clearFilters}
          >
            Clear Filters
          </h1>
          <Species />
          <Status />
          <Gender />
        </div>
      </div>
    </>
  )
}
export default Filters
