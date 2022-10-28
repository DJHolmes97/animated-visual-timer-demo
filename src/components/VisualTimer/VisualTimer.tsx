import { motion } from "framer-motion"
import * as React from "react"
import { useCountdown } from "../../hooks/useCountdown"
import TimerSVG from "./components/TimerSVG"

const AnimatedTimer = motion(TimerSVG)

const VisualTimer = (props: { targetTime: number }) => {
  const { targetTime } = props
  const [minutes, seconds] = useCountdown(targetTime)
  console.log(`${minutes}:${seconds}`)

  return (
    <AnimatedTimer
      minutes={minutes}
      seconds={seconds}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
  )
}

export default VisualTimer
