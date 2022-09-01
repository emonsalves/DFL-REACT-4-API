import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Characters() {
  const { characters } = useContext(DataContext)

  characters.map((slot) => {
    console.log(slot.name, slot.image)
  })

  return (
    <div className="grid justify-items-center gap-4 mt-4 w-full justify-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {characters.map((slot, index) => (
        <div
          key={slot.id}
          className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <img
            className="flex rounded-t-lg mx-auto w-full"
            src={slot.image}
            alt={slot.name}
          />

          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters
