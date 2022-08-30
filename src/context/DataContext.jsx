import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()
import { db } from "../data/db"

const DataProvider = ({ children }) => {
  const [data, setData] = useState("")
  const [characters, setCharacters] = useState([])
  const initialUrl = "https://rickandmortyapi.com/api/character"
  const [brand, setBrand] = useState("Rick and Morty")

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialUrl)

    return () => {
      setData(data)
    }
  }, [])

    // useEffect(() => {
    //   setData(data)
    // }, [])

  return (
    <DataContext.Provider value={{ db, brand }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
