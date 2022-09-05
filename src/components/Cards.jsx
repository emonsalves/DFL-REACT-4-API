import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Cards() {
  const { data } = useContext(DataContext)

  return (
    <div className="flex flex-wrap col-span-3 justify-items-center bg-cover bg-fixed bg-center bg-no-repeat gap-6 pt-10 w-full justify-center">
      {data.results ? (
        data.results.map((slot) => (
          <div
            key={slot.id}
            className="w-56 rounded-lg shadow-md dark:bg-transparent hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <img
              className="rounded-full mx-auto w-56"
              src={slot.image}
              alt={slot.name}
            />
            <div className="p-4 w-56">
              {(() => {
                if (slot.status === "Alive") {
                  return (
                    <span className="relative -top-60 -left-5 bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                      {slot.status}
                    </span>
                  )
                } else if (slot.status === "Dead") {
                  return (
                    <span className="relative -top-60 -left-5 bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                      {slot.status}
                    </span>
                  )
                } else {
                  return (
                    <span className="relative -top-60 -left-5 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {slot.status}
                    </span>
                  )
                }
              })()}

              <h5 className="bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-2xl mb-3 text-2xl text-center font-bold tracking-tight text-black">
                {slot.name}
              </h5>
              <p className="bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-2xl mb-2 pl-2 font-normal text-black ">
                <strong>Location :</strong> {slot.location.name}
              </p>
            </div>
          </div>
        ))
      ) : (
        <h1>Sin coincidencias</h1>
      )}
    </div>
  )
}

export default Cards
