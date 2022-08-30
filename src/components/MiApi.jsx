import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function MiApi() {
  const { data } = useContext(DataContext)
  const { setData } = useContext(DataContext)

  return <div></div>
}

export default MiApi
