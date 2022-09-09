import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
<<<<<<< HEAD
  const [activaSearch, setActivaSearch] = useState("w-full dark:text-gray-100 ml-5")
  const [pageNumber, setPageNumber] = useState(1)
=======
  let [pageNumber, setPageNumber] = useState(1)
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
<<<<<<< HEAD
  const [results, setResults] = useState("")
=======
  const [data, setData] = useState("")
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  const [info, setInfo] = useState("")

  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

<<<<<<< HEAD
=======
  async function getFetch() {
    let dataGet = await fetch(apiUrl)
      .then((response) => response.json())
      .catch((error) => error)
    setData(dataGet)
  }

>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
  // IIFE ya que no alcanzaba a traer la data en el -> dataGet
  // IIFE (()=>{})() sintaxis

  useEffect(() => {
    ;(async function () {
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df

  return (
    <DataContext.Provider
      value={{
<<<<<<< HEAD
        results,
=======
        data,
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
        pageNumber,
        search,
        info,
        setPageNumber,
        setSearch,
        setStatus,
        setGender,
        setSpecies,
<<<<<<< HEAD
        episodesResults,
        episodesData,
        episodesTotal,
        setEpisodes,
        activaSearch,
        setActivaSearch,
=======
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
