import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import background from "../assets/wallpaper.jpg"

function Pagination() {
  const { pageNumber, setPageNumber, info } = useContext(DataContext)

  let prev = () => {
    pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
  }
  let next = () => {
    pageNumber < info.pages ? setPageNumber(pageNumber + 1) : null
  }

  return (
    <div
      className="flex justify-center bg-cover bg-no-repeat bg-fixed bg-center pt-2 border-none"
      style={{ backgroundImage: `url(${background})` }}
    >
      <button
        onClick={prev}
        type="button"
        className="text-black bg-[#43d22b] focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 mb-2"
      >
        Prev
      </button>
      <button
        onClick={next}
        type="button"
        className="text-black bg-[#43d22b] focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-6 mb-2 "
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
