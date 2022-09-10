import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [activaSearch, setActivaSearch] = useState(
    "w-full dark:text-gray-100 ml-5"
  )
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [results, setResults] = useState("")
  const [info, setInfo] = useState("")

  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  // IIFE ya que no alcanzaba a traer la data en el -> dataGet
  // IIFE (()=>{})() sintaxis

  useEffect(() => {
    ;(async function () {
      let dataCharacters = await fetch(apiUrl)
        .then((response) => response.json())
        .catch((error) => error)
      setInfo(dataCharacters.info)
      setResults(dataCharacters.results)
      console.log("useEffect Fetch Characters")
    })()
  }, [apiUrl])

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // Episodes
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const [episodes, setEpisodes] = useState(1)
  const [episodesData, setEpisodesData] = useState("")
  const [episodesResults, setEpisodesResults] = useState("")
  const [episodesTotal, setEpisodesTotal] = useState("")

  const episodesUrl = `https://rickandmortyapi.com/api/episode/${episodes}`
  const episodesUrlCount = "https://rickandmortyapi.com/api/episode/"

  useEffect(() => {
    ;(async function () {
      let dataEpisode = await fetch(episodesUrl)
        .then((response) => response.json())
        .catch((error) => error)
      console.log("useEffect Fetch Episodes")
      setEpisodesData(dataEpisode)

      // dataEpisode tiene un campo Characters poblado con url, por lo que hacemos
      // una nueva llamada pero grupal Promise.all con un map que le recorre
      // recordar el return

      let dataCharacters = await Promise.all(
        dataEpisode.characters.map((link) => {
          return fetch(link).then((response) => response.json())
        })
      ) /* recordar los parentesis y el set afuera */
      setEpisodesResults(dataCharacters)
    })()
  }, [episodesUrl])

  useEffect(() => {
    ;(async function () {
      let dataE = await fetch(episodesUrlCount)
        .then((response) => response.json())
        .catch((error) => error)
      setEpisodesTotal(dataE.info.count)
      console.log("useEffect Fetch Number Episodes")
    })()
  }, [])

  // --------------------------------------------------------------------------------------------------------------------------------------------
  // Locations
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const [locations, setLocations] = useState(1)
  const [locationsData, setLocationsData] = useState("")
  const [locationsResults, setLocationsResults] = useState("")
  const [locationsTotal, setLocationsTotal] = useState("")

  const LocationsUrl = `https://rickandmortyapi.com/api/location/${locations}`
  const LocationsUrlCount = "https://rickandmortyapi.com/api/location/"

  useEffect(() => {
    ;(async function () {
      let dataLocation = await fetch(LocationsUrl)
        .then((response) => response.json())
        .catch((error) => error)
      console.log("useEffect Fetch Locations")
      setLocationsData(dataLocation)

      // dataEpisode tiene un campo Characters poblado con url, por lo que hacemos
      // una nueva llamada pero grupal Promise.all con un map que le recorre
      // recordar el return

      let dataLocations = await Promise.all(
        dataLocation.residents.map((link) => {
          return fetch(link).then((response) => response.json())
        })
      ) /* recordar los parentesis y el set afuera */
      setLocationsResults(dataLocations)
    })()
  }, [LocationsUrl])

  useEffect(() => {
    ;(async function () {
      let dataL = await fetch(LocationsUrlCount)
        .then((response) => response.json())
        .catch((error) => error)
      setLocationsTotal(dataL.info.count)
      console.log("useEffect Fetch Number Locations")
    })()
  }, [])

  return (
    <DataContext.Provider
      value={{
        results,
        pageNumber,
        search,
        info,
        setPageNumber,
        setSearch,
        setStatus,
        setGender,
        setSpecies,
        episodesResults,
        episodesData,
        episodesTotal,
        setEpisodes,
        activaSearch,
        setActivaSearch,
        locationsResults,
        locationsData,
        locationsTotal,
        setLocations,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
