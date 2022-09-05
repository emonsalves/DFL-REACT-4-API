import { useState } from "react"
import styles from "./Filters.css"
const Filters = () => {
  const [statusActive, setStatusActive] = useState("hidden")
  const [speciesActive, setSpeciesActive] = useState("hidden")
  const [genderActive, setGenderActive] = useState("hidden")

  const clickHidden = (e) => {
    setStatusActive(e.target.s)
  }

  return (
    <>
      <div class="w-full flex items-start justify-center mt-20">
        <div class="w-full px-5 py-8 mx-auto bg-black rounded-lg shadow-xl">
          <h1 class="text-xl mb-1 text-center text-white">Filters</h1>
          <h1 class="text-l mb-5 text-center text-red-500 underline" style={{cursor: "pointer"}}>Clear Filters</h1>

          <details class="w-full  border border-slate-500 cursor-pointer mb-3">
            <summary class="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-dark flex justify-between px-4 py-3 after:content-['+']">
              Status
            </summary>
            <p class="px-4 py-3 text-white">
              Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt
              diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut
              blandit eget, auctor vel eros. In ut dolor ante
            </p>
          </details>

          <details class="w-full border border-slate-500 cursor-pointer mb-3">
            <summary class="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-dark flex justify-between px-4 py-3 after:content-['+']">
              Specie
            </summary>
            <p class="px-4 py-3 text-white">
              Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend
              sit amet, imperdiet id libero. Suspendisse et tempus leo, et
              lacinia arcu. Etiam at ante in est efficitur fringilla eleifend
              nec tellus. Integer sed auctor lectus, nec ullamcorper arcu.
              Nullam nec eros elit. Nulla tempor massa ut quam elementum
              dignissim. Sed eu pulvinar est, vel vehicula dolor. Pellentesque
              in ante vel elit facilisis consectetur eu id felis
            </p>
          </details>

          <details class="w-full  border border-slate-500 cursor-pointer mb-3">
            <summary class="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-dark flex justify-between px-4 py-3 after:content-['+']">
              Gender
            </summary>
            <p class="px-4 py-3 text-white">
              Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
              tincidunt dignissim, magna tortor mollis augue, at maximus ante
              lacus vel tellus. Vestibulum vestibulum consectetur tortor id
              sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
              condimentum arcu
            </p>
          </details>
        </div>
      </div>
    </>
  )
}
export default Filters
