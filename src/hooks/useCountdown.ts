import { useEffect, useState } from "react"

const useCountdown = (
  minutes: number = 0,
  seconds: number = 0,
  paused: boolean = true,
  reset: boolean = false
) => {
  const [isPaused, setIsPaused] = useState(paused)
  const [over, setOver] = useState(false)
  const [[m, s], setTime] = useState([minutes, seconds])
  useEffect(() => {
    setTime([minutes, seconds])
  }, [minutes, seconds])
  const tick = () => {
    if (paused || over) return
    if (m === 0 && s === 0) setOver(true)
    else if (s === 0) {
      setTime([m - 1, 59])
    } else {
      setTime([m, s - 1])
    }
  }

  if (reset) {
    setTime([minutes, seconds])
    setIsPaused(false)
    setOver(false)
    reset = false
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return [m, s]
}

export { useCountdown }
