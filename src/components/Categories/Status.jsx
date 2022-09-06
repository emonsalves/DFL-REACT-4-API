import FiltersBtn from "../FiltersBtn"

function Status() {
  let status = ["Alive", "Death", "Unknown"]
  return (
    <details className="w-full  border border-slate-500 cursor-pointer mb-3">
      <summary className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-dark flex justify-between px-4 py-3 after:content-['+']">
        Status
      </summary>
      {status.map((items, index) => (
        <FiltersBtn key={index} name="status" index={index} items={items} />
      ))}
    </details>
  )
}

export default Status
