import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {

  let [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")


  const [info, setInfo] = useState("")
  const [data, setData] = useState([])
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  const fetchData = async () => {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    fetchData(apiUrl)
  }, [apiUrl])

  const fetchInfo = async () => {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setInfo(data.info))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchInfo(apiUrl)
  }, [apiUrl])

  return (
    <DataContext.Provider
      value={{ data, pageNumber, setPageNumber, info, search, setSearch, setStatus, setGender, setSpecies }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
