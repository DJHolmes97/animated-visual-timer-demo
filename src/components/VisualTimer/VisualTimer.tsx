import { motion } from "framer-motion"
import * as React from "react"
import TimerSVG from "./components/TimerSVG"

const AnimatedTimer = motion(TimerSVG)

const VisualTimer = () => {
  return (
    <AnimatedTimer initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
  )
}

export default VisualTimer
