import { useState } from "react"
import Grender from "./Categories/Grender"
import Species from "./Categories/Species"
import Status from "./Categories/Status"
import styles from "./Filters.css"
const Filters = () => {
  const [statusActive, setStatusActive] = useState("hidden")
  const [speciesActive, setSpeciesActive] = useState("hidden")
  const [genderActive, setGenderActive] = useState("hidden")

  const clickHidden = (e) => {
    setStatusActive(e.target.s)
  }

  return (
    <>
      <div className="w-full flex items-start mt-20">
        <div className="w-48 px-5 py-8 mx-auto bg-black rounded-lg shadow-xl">
          <h1 className="text-xl mb-1 text-center text-white">Filters</h1>
          <h1
            className="text-l mb-5 text-center text-red-500 underline"
            style={{ cursor: "pointer" }}
          >
            Clear Filters
          </h1>
          <Species />
          <Status />
          <Grender />
        </div>
      </div>
    </>
  )
}
export default Filters
