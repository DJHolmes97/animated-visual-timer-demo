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
  isReset: boolean
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { tMinutes, tSeconds, isPaused, isReset, setIsReset } = props

  let [minutes, seconds] = useCountdown(
    tMinutes,
    tSeconds,
    isPaused,
    isReset,
    setIsReset
  )
  const countDownTotal = tMinutes * 60 + tSeconds
  return (
    <AnimatedTimer
      minutes={minutes}
      seconds={seconds}
      duration={countDownTotal}
      paused={isPaused}
      reset={isReset}
    />
  )
}

export default VisualTimer
