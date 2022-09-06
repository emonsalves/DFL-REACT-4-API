function FiltersBtn({ name, index, items }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          id={`${name}-${index}`}
          value=""
          className="hidden peer "
          name={name}
          required=""
        />
        <label
          htmlFor={`${name}-${index}`}
          className="flex justify-center p-2 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-900 peer-checked:bg-green-400 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-white peer-checked:text-white hover:bg-green-50 dark:text-gray-400 dark:bg-green-800 dark:hover:bg-green-800"
        >
          <div className="">
            <div className="text-lg text-center font-semibold">{items}</div>
          </div>
        </label>
      </li>
    </>
  )
}

export default FiltersBtn
