import background from "../assets/wallpaper.jpg"
import Filters from "../components/Filters/Filters"
import Cards from "../components/Cards"
<<<<<<< HEAD
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
// import FitroManual from "../components/FitroManual"

const Container = () => {
  const { results } = useContext(DataContext)
  return (
    <>
      <div
        className="bg-cover bg-fixed bg-center bg-no-repeat mt-40 p-1 flex justify-cente sm:mt-32"
        style={{ backgroundImage: `url(${background}) ` }}
      >
        <h1></h1>
      </div>
      <div
        className="grid grid-cols-7 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background}) ` }}
      >
        <Filters />
        <Cards results={results} />
        {/* <FitroManual /> */}
      </div>
    </>
=======
// import FitroManual from "../components/FitroManual"

const Container = () => {
  return (
    <div
      className="grid grid-cols-7 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background}) ` }}
    >
      <Filters />
      <Cards />
      {/* <FitroManual /> */}
    </div>
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  )
}

export default Container
