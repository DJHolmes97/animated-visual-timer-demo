import * as React from "react"
import { SVGProps, useEffect } from "react"
import { motion } from "framer-motion"

const TimerSVG = (
  { minutes, seconds }: { minutes: number; seconds: number },
  props: SVGProps<SVGSVGElement>
) => {
  useEffect(() => {
    console.log("The Timer has been rerendered")
  }, [])
  return (
    <svg
      width={784.007}
      height={784.007}
      viewBox="0 0 207.435 207.435"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "50.8px",
          fontFamily: "sans-serif",
          textAlign: "center",
          letterSpacing: ".79375px",
          textAnchor: "middle",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={104.975}
        y={123.455}
        transform="translate(-1.282 -1.282)"
      >
        <motion.tspan
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "50.8px",
            fontFamily: "sans-serif",
            textAlign: "center",
            textAnchor: "middle",
            fill: "#4936c6",
            fillOpacity: 1,
            stroke: "#4936c6",
            strokeWidth: 0.264583,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          x={105.372}
          y={123.455}
        >
          {`${minutes}:${seconds}`}
        </motion.tspan>
      </text>
      <motion.path
        initial={{ pathLength: 1 }}
        animate={{
          pathLength: [1, 0, 0],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: minutes * 60,
          times: [0, 0.99, 1],
          ease: "linear",
        }}
        style={{
          fill: "none",
          stroke: "#4936c6",
          strokeWidth: 10,
          strokeLinecap: "round",
        }}
        d="M203.718 105c0 54.52-44.198 98.718-98.718 98.718S6.282 159.52 6.282 105 50.48 6.282 105 6.282c54.426 0 98.565 44.045 98.717 98.436"
        transform="translate(-1.282 -1.282)"
      />
    </svg>
  )
}

export default TimerSVG
