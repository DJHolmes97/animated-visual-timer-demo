import { motion } from "framer-motion"
import * as React from "react"
import { useState, useEffect } from "react"
import { useCountdown } from "../../hooks/useCountdown"
import TimerSVG from "./components/TimerSVG"

const AnimatedTimer = motion(TimerSVG)

const VisualTimer = (props: {
  tMinutes: number
  tSeconds: number
  isPaused: boolean
}) => {
  const { tMinutes, tSeconds, isPaused } = props


  let [minutes, seconds] = useCountdown(tMinutes, tSeconds, isPaused)
  const countDownTotal = tMinutes * 60 + tSeconds
  return (
    <AnimatedTimer
      minutes={minutes}
      seconds={seconds}
      duration={countDownTotal}
      paused={isPaused}
    />
  )
}

export default VisualTimer
