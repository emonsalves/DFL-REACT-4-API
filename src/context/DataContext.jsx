import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  let [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [data, setData] = useState("")
  const [info, setInfo] = useState("")

  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  async function getFetch() {
    let dataGet = await fetch(apiUrl)
      .then((response) => response.json())
      .catch((error) => error)
    setData(dataGet)
  }

  // IIFE ya que no alcanzaba a traer la data en el -> dataGet
  // IIFE (()=>{})() sintaxis

  useEffect(() => {
    ;(async function () {
      let dataGet = await fetch(apiUrl)
        .then((response) => response.json())
        .catch((error) => error)
      setInfo(dataGet.info)
      setData(dataGet.results)
      console.log("useEffect Fetch Initial")
    })()
  }, [apiUrl])

  // useEffect(() => {
  //   getFetch(), console.log("useEffect Fetch Url")
  // }, [apiUrl])

  return (
    <DataContext.Provider
      value={{
        data,
        pageNumber,
        search,
        info,
        setPageNumber,
        setSearch,
        setStatus,
        setGender,
        setSpecies,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
