import { Suspense, lazy } from "react"
import DataProvider from "./context/DataContext"
import Loading from "./components/Loading/Loading"
const Pagination = lazy(()=> import("./components/Pagination"))
const Header = lazy(() => import("./layout/Header"))
const Footer = lazy(() => import("./layout/Footer"))
const Container = lazy(() => import("./layout/Container"))

function App() {
  return (
    <DataProvider>
      <Suspense fallback={<Loading />}>
        <Header />
        <Container />
        <Pagination/>
        <Footer />
      </Suspense>
    </DataProvider>
  )
}

export default App
