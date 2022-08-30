import "./App.css"
// import Form from "./components/Form"
import MiApi from "./components/MiApi"
import DataProvider from "./context/DataContext"
import Header from "./layout/Header"

function App() {
  return (
    <DataProvider>
      {/* <Form /> */}
      {/* <MiApi /> */}
      <Header />
    </DataProvider>
  )
}

export default App
