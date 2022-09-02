import { Suspense, lazy } from "react"
import Loading from "../components/Loading"
const Characters = lazy(() => import("../components/Characters"))

function Container() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Characters />
      </Suspense>
    </div>
  )
}

export default Container
