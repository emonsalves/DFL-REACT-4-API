import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
<<<<<<< HEAD
import Gender from "../Filters/Categories/Gender"
import Species from "../Filters/Categories/Species"
import Status from "../Filters/Categories/Status"
=======
import Gender from "../Categories/Gender"
import Species from "../Categories/Species"
import Status from "../Categories/Status"
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
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
<<<<<<< HEAD
      <div className="w-full flex items-start">
=======
      <div className="w-full flex items-start mt-44 sm:mt-40">
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
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
