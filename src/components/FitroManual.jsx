import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"

const FitroManual = () => {
<<<<<<< HEAD
  const { results, info} = useContext(DataContext)
=======
  const { data, info} = useContext(DataContext)
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  
  console.log(info)
  const [inputCapture, setInputCapture] = useState("")

  // const arrayMap = results.map((item) => {
  //   return {
  //     id: item.id,
  //     name: item.name,
  //     status: item.status,
  //     gender: item.gender,
  //     species: item.species,
  //   }
  // })

  const keyPress = (e) => {
    setInputCapture(e.target.value)
    console.log(inputCapture)
  }

  // const listaX = !inputCapture
<<<<<<< HEAD
  //   ? results
  //   : results.filter((item) =>
=======
  //   ? data.results
  //   : data.results.filter((item) =>
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  //       item.name.toUpperCase().includes(inputCapture.toUpperCase())
  //     )

  return (
    <div>
      <input
        onChange={keyPress}
        value={inputCapture}
        type="search"
        name="Search"
        placeholder="Buscar..."
        className="w-40 py-2 pl-10 mt-20 text-sm rounded-md focus:outline-none border border-green-400 dark:bg-black dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
      />
      
      {info.map((item) => (        
        <div key={item.id} className="text-white pl-52">
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
          <h1>{item.status}</h1>
          <h1>{item.gender}</h1>
          <h1>{item.species}</h1>
          <br />
        </div>
      ))}
    </div>
  )
}

export default FitroManual
