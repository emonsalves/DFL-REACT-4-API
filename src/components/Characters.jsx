import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import background from "../assets/wallpaper.jpg"

function Characters() {
  const { characters } = useContext(DataContext)

  return (
    <div
      className="grid justify-items-center bg-cover bg-fixed bg-center bg-no-repeat gap-6 pt-10 w-full justify-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      // style={{
      //   backgroundImage: `url("https://images.alphacoders.com/876/876589.jpg")`,
      // }}
      style={{ backgroundImage: `url(${background})` }}
    >
      {characters.map((slot, index) => (
        <div
          key={slot.id}
          className="max-w-sm bg-white rounded-lg shadow-md dark:bg-transparent hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <img
            className="flex rounded-full mx-auto w-full"
            src={slot.image}
            alt={slot.name}
          />

          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {slot.name}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Status :</strong> {slot.status}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Location :</strong> {slot.location.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters
