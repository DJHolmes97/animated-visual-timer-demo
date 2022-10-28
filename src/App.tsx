import React from "react"
import logo from "./logo.svg"
import "./App.css"
import VisualTimer from "./components/VisualTimer/VisualTimer"

function App() {
  const TEN_MINUTES_IN_MS = 1 * 60 * 1000
  const NOW_IN_MS = new Date().getTime()
  const dateTimeAfterTenMinutes = NOW_IN_MS + TEN_MINUTES_IN_MS
  return (
    <div className="App">
      <header className="App-header">
        <VisualTimer targetTime={dateTimeAfterTenMinutes} />
      </header>
    </div>
  )
}

export default App
