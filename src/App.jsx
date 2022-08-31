import DataProvider from "./context/DataContext"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Container from "./components/Container"

function App() {
  return (
    <DataProvider>
      <Header />
      <Container />
      <Footer />
    </DataProvider>
  )
}

export default App
