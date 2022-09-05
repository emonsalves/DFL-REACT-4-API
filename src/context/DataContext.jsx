import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  let [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [info, setInfo] = useState([])
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`

  const fetchCharacters = async () => {
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.results), setInfo(data.info))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(apiUrl)
  }, [apiUrl])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}

export default DataProvider
