import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Suspense, lazy } from "react"
import DataProvider from "./context/DataContext"
import Loading from "./components/Loading/Loading"
const Pagination = lazy(() => import("./components/Pagination"))
const Header = lazy(() => import("./layout/Header"))
const Footer = lazy(() => import("./layout/Footer"))
const Container = lazy(() => import("./layout/Container"))
const Episodes = lazy(() => import("./pages/Episodes"))
<<<<<<< HEAD
const Locations = lazy(() => import("./pages/Locations"))
=======
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df

function App() {
  return (
    <DataProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Container />
            </Route>
            <Route path="/Episodes">
              <Episodes />
            </Route>
            <Route path="/Locations">
<<<<<<< HEAD
              <Locations />
=======
              <Episodes />
>>>>>>> 3e794a49987c948f939a133abb16a74f713380df
            </Route>
          </Switch>
          <Pagination />
          <Footer />
        </Suspense>
      </Router>
    </DataProvider>
  )
}

export default App

// function App() {
//   return (
//     <DataProvider>
//       <Suspense fallback={<Loading />}>
//         <Header />
//         <Container />
//         <Pagination />
//         <Footer />
//       </Suspense>
//     </DataProvider>
//   )
// }

// export default App
