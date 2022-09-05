import { Suspense, lazy } from "react"
import Loading from "../components/Loading"
import Filters from "../components/Filters"
const Characters = lazy(() => import("../components/Characters"))

function Container() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Filters/>
        <Characters />
      </Suspense>
    </div>
  )
}

export default Container
