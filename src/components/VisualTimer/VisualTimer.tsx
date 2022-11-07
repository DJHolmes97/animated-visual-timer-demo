import { motion } from "framer-motion";
import * as React from "react";
import { useState, useEffect } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import TimerSVG from "./components/TimerSVG";

const AnimatedTimer = motion(TimerSVG);

const VisualTimer = (props: {
  tMinutes: number;
  tSeconds: number;
  isPaused: boolean;
}) => {
  const { tMinutes, tSeconds, isPaused } = props;
  const [minutes, seconds] = useCountdown(tMinutes, tSeconds, isPaused);
  const countDownTotal = tMinutes * 60 + tSeconds;
  return (
    <AnimatedTimer
      minutes={minutes}
      seconds={seconds}
      duration={countDownTotal}
      paused={isPaused}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
  );
};

export default VisualTimer;
