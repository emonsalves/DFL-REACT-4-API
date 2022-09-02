import { useState } from "react"
import Navbar from "../components/Navbar"
import Input from "../components/Input"

function Header() {
  const classHidden =
    "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
  const classShow =
    "justify-between items-center w-full md:flex md:w-auto md:order-1"
  const [btnClassHidden, setbtnClassHidden] = useState(classHidden)

  const btnHidden = () => {
    btnClassHidden === classHidden
      ? setbtnClassHidden(classShow)
      : setbtnClassHidden(classHidden)
  }

  return (
    <div className="box-border">
      <nav
        className="fixed w-full z-20 top-0 left-0 mb-1"
        style={{
          backgroundImage: `url("https://images.alphacoders.com/876/876589.jpg")`,
        }}
      >
        <div
          className="container flex flex-wrap 
        md:justify-around 2xl:min-w-full"
        >
          <div className="flex justify-items-stretch">
            <img
              src="/src/assets/logo.png"
              alt="logo rick and morty"
              className="h-14 sm:h-24 flex"
            />
            <span className="self-center text-xl font-semibold dark:text-green-400">
              Rick and Morty
            </span>
          </div>
          <div className="flex justify-around items-center md:order-2 w-full md:w-auto">
            {/* <input
              type="text"
              placeholder="Buscador"
              className="flex items-center rounded-lg pt-2 pb-2 w-24 "
            /> */}
            <Input btnHidden={btnHidden}/> 
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
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-green-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-black md:bg-black dark:border-green-400">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-green-400 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-green-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-lg">
        <div className="mt-16 mb-20 sm:mt-16 sm:mb-8 "></div>
      </div>
    </div>
  )
}

export default Header
