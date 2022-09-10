import FiltersBtn from "../FiltersBtn"

function Species() {
  const species = [
    "Human",
    "Humanoid",
    "Alien",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ]
  return (
    <details className="w-full border rounded-lg border-slate-500 cursor-pointer mb-3">
      <summary className="w-full dark:bg-[#43d22b] focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-green-800/80 text-dark flex justify-between px-4 py-3 after:content-['+'] rounded-lg">
        Specie
      </summary>
      {species.map((items, index) => (
        <FiltersBtn key={index} name="species" index={index} items={items} />
      ))}
    </details>
  )
}

export default Species
