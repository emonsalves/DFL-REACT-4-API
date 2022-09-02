import { Suspense, lazy } from "react"
import background from "./assets/wallpaper.jpg"
import DataProvider from "./context/DataContext"
import Lazy from "./components/Lazy"
// import Header from "./layout/Header"
// import Footer from "./layout/Footer"
// import Container from "./components/Container"

const Header = lazy(() => import("./layout/Header"))
const Footer = lazy(() => import("./layout/Footer"))
const Container = lazy(() => import("./layout/Container"))

function App() {
  return (
    
    <DataProvider>
      <Suspense fallback={<Lazy/>}>
        <Header />
        <Container />
        <Footer />
      </Suspense>
    </DataProvider>
  )
}

export default App
