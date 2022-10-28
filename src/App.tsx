import React from "react"
import "./App.css"
import VisualTimer from "./components/VisualTimer/VisualTimer"

function App() {
  const TEN_MINUTES_IN_MS = 1 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterTenMinutes = NOW_IN_MS + TEN_MINUTES_IN_MS
  return (
    <div className="App">
      <VisualTimer targetTime={dateTimeAfterTenMinutes} />
    </div>
  )
}

export default App
