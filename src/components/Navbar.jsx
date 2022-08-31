import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Navbar() {
  const { brand } = useContext(DataContext)
  //   console.log(crypto.randomUUID())

  return (
    <nav className="text-white navbar bg-black">
      <div className="container">
        <a className="text-white navbar-brand" href="/">
          {brand}
        </a>
      </div>   
    </nav>
  )
}

export default Navbar
