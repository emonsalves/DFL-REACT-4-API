import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [info, setInfo] = useState("")
  let [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`

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
      value={{ data, page, setPage, info, search, setSearch }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
