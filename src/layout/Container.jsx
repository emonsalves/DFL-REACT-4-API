import { Suspense, lazy } from "react"
import Loading from "../components/Loading"
import Filters from "../components/Filters"
const Characters = lazy(() => import("../components/Characters"))

function Container() {
  return (
    <div>
      <Suspense fallback={<h1>error</h1>}>
        <Filters/>
        <Characters />
      </Suspense>
    </div>
  )
}

export default Container
