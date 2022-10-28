import { useEffect, useState } from "react"

const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval =
      countDown > 1000
        ? setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
          }, 1000)
        : 0

    return () => clearInterval(interval)
  }, [countDown, countDownDate])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: number) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [minutes, seconds]
}

export { useCountdown }
