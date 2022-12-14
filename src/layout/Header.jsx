import { Link } from "react-router-dom"
import { useState } from "react"
import Input from "../components/Search"
import background from "../assets/wallpaper.jpg"
import styles from "../components/animation.css"
import { useContext } from "react"
import { DataContext } from "../context/DataContext";

function Header() {
  const {activaSearch, setActivaSearch, setEpisodes, setLocations} = useContext(DataContext)
  
  const hiddenSerch = " hidden w-full dark:text-gray-100 ml-5"
  const showSerch = "w-full dark:text-gray-100 ml-5"

  const classHidden =
    "hidden justify-between items-center w-full md:flex md:w-auto md:z-1"
  const classShow =
    "justify-between items-center w-full md:flex md:w-auto md:z-1"
  const [btnClassHidden, setbtnClassHidden] = useState(classHidden)

  const btnHidden = () => {
    btnClassHidden === classHidden
      ? setbtnClassHidden(classShow)
      : setbtnClassHidden(classHidden)
  }

  const searchInputShow = ()=> {
  setActivaSearch(showSerch)
  setEpisodes(1)
  setLocations(1)
  btnHidden()  
  }
  
  const searchInpuHidden=()=>{
    setActivaSearch(hiddenSerch)
    setEpisodes(1)
    setLocations(1)
    btnHidden()
  }

  return (
    <nav
      className="fixed w-full z-20 top-0 left-0 overflow-hidden bg-cover bg-no-repeat bg-fixed bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="container flex flex-wrap justify-center 
        md:justify-around 2xl:min-w-full"
      >
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/Wpqh08PC/logo.png"
            alt="logo rick and morty"
            className="h-32"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="title text-lg">Ricky</h1>
            <h1 className="title text-lg">And</h1>
            <h1 className="title text-lg">Morty</h1>
          </div>       
          <Input />
          <button
            onClick={btnHidden}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="flex justify-center items-center p-2 text-sm text-green-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-green-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only"></span>
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={btnClassHidden} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-green-400 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 dark:bg-transparent md:bg-transparent dark:border-green-400">
            <li>
              <Link
              onClick={searchInputShow}
                to="/"
                className="da block py-2 pr-4 pl-3 text-green-400 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-400"
                aria-current="page"
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
              onClick={searchInpuHidden}
                to="/Locations"
                className="da block py-2 pr-4 pl-3 text-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
              onClick={searchInpuHidden}
                to="/Episodes"
                className="da block py-2 pr-4 pl-3 text-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Episodes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
