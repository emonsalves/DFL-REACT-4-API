import "./App.css"
import Form from "./components/Form"
import MiApi from "./components/MiApi"
import DataProvider from "./context/DataContext"

function App() {
  return (
    <DataProvider>
      <Form />
    </DataProvider>
  )
}

export default App
