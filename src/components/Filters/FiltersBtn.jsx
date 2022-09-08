import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

function FiltersBtn({ name, index, items }) {
  const { setStatus, setPageNumber, setGender, setSpecies } = useContext(DataContext)

  const btnClick = () => {
    setPageNumber(1)
    name === "status" ? setStatus(items) : null
    name === "gender" ? setGender(items) : null
    name === "species" ? setSpecies(items) : null
  }

  return (
    <>
      <li>
        <input
          onClick={btnClick}
          type="radio"
          id={`${name}-${index}`}
          name={name}
          value="hosting-small"
          className="hidden peer"
          required=""
          style={{display: "none"}}
        />
        <label
          htmlFor={`${name}-${index}`}
          className="flex justify-around items-center p-1 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <div className="w-full text-xs font-semibold">{items}</div>
          </div>
        </label>
      </li>
    </>
  )
}

export default FiltersBtn
