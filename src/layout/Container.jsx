import background from "../assets/wallpaper.jpg"
import Filters from "../components/Filters"
import Cards from "../components/Cards"

const Container = () => {
  return (
    <div  
      className="grid grid-cols-4 gap-2 justify-items-center bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background}) ` }}
    >
      <Filters className/>
      <Cards className/>
    </div>
  )
}

export default Container
