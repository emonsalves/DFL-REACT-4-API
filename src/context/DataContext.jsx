import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const initialUrl = "https://rickandmortyapi.com/api/character"
  const [brand, setBrand] = useState("Rick and Morty")

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error))
  }

  // console.log(characters)

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])

  return (
    <DataContext.Provider value={{ brand, characters }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
