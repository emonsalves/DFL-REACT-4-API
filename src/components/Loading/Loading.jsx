import "./Loading.css"

export default function LoadingSpinner() {
  return (
    <div className="h-screen bg-black spinner-container flex justify-center items-center text-white">
      <div className="loading-spinner"></div>
      <div>
        <h1>Loading A Moment Please</h1>
      </div>
    </div>
  )
}
