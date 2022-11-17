import { useEffect, useState } from "react"

const useCountdown = (
  minutes: number = 0,
  seconds: number = 0,
  paused: boolean = true,
  reset: boolean = false,
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>
) => {
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

  useEffect(() => {
    if (reset) {
      console.log("reset")

      setTime([minutes, seconds])
      setOver(false)
      setIsReset(false)
    }
  }, [reset])

  console.log(m, s)

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => clearInterval(timerID)
  })

  return [m, s]
}

export { useCountdown }
