import background from "../assets/wallpaper.jpg"
import Filters from "../components/Filters/Filters"
import Cards from "../components/Cards"
import FitroManual from "../components/FitroManual"

const Container = () => {
  return (
    <div
      className="grid grid-cols-7 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background}) ` }}
    >
      {/* <Filters />
      <Cards /> */}
      <FitroManual />
    </div>
  )
}

export default Container
