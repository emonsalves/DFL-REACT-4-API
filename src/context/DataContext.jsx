import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()
import { db } from "../data/db"

const DataProvider = ({ children }) => {
  const [data, setData] = useState(db)
  const [texto, setTexto] = useState("hola")

  const keyPrivada = "7041d30d6fb320dc56ed4bad7945a9c7f4881abb"
  const keyPublica = "a94d34e270e5dd65ae177755ec5b879a"
  const ts = 1
  const md5 = "(ts+privateKey+publicKey)"
  hash = "938c843bdb78560535c72666a17f5150"

  useEffect(() => {
    setData(data)
  }, [])

  return (
    <DataContext.Provider value={{ db, texto, setTexto }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
