import * as React from "react"
import { SVGProps, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { formatTimeString } from "../../../helpers/formatTimeString"

const AnimatedTSpan = ({
  x,
  y,
  digit,
}: {
  x: number
  y: number
  digit: string
}) => {
  const [digitState, setDigitState] = useState(digit)

  if (digit !== digitState) {
    setDigitState(digit)
  }
  return (
    <AnimatePresence>
      <motion.tspan
        key={digitState}
        initial={{ opacity: 0, y: y + 5 }}
        animate={{ opacity: 1, y: y }}
        exit={{ opacity: 0, y: y - 5 }}
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
        x={x}
        y={y}
      >
        {digit}
      </motion.tspan>
    </AnimatePresence>
  )
}

const TimerSVG = (
  { minutes, seconds }: { minutes: number; seconds: number },
  props: SVGProps<SVGSVGElement>
) => {
  const { digitOne, digitTwo, digitThree, digitFour } = formatTimeString(
    minutes,
    seconds
  )

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
          display: "inline",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={56.146}
        y={123.455}
        transform="translate(-1.282 -1.282)"
      >
        <AnimatedTSpan x={56.543} y={123.455} digit={digitOne} />
      </text>
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
          display: "inline",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={86.413}
        y={123.455}
        transform="translate(-1.282 -1.282)"
      >
        <AnimatedTSpan x={86.81} y={123.455} digit={digitTwo} />
      </text>
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
          display: "inline",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={106.882}
        y={119.638}
        transform="translate(-1.282 -1.282)"
      >
        <tspan
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
          x={107.279}
          y={119.638}
        >
          {":"}
        </tspan>
      </text>
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
          display: "inline",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={127.326}
        y={123.455}
        transform="translate(-1.282 -1.282)"
      >
        <AnimatedTSpan x={127.723} y={123.455} digit={digitThree} />
      </text>
      <motion.text
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
          display: "inline",
          fill: "#4936c6",
          fillOpacity: 1,
          stroke: "#4936c6",
          strokeWidth: 0.264583,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        x={157.593}
        y={123.455}
        transform="translate(-1.282 -1.282)"
      >
        <AnimatedTSpan x={157.989} y={123.455} digit={digitFour} />
      </motion.text>
      <path
        style={{
          display: "inline",
          opacity: 0.35,
          fill: "none",
          stroke: "#4936c6",
          strokeWidth: 10,
          strokeLinecap: "round",
        }}
        d="M203.718 105c0 54.52-44.198 98.718-98.718 98.718S6.282 159.52 6.282 105 50.48 6.282 105 6.282c54.426 0 98.565 44.045 98.717 98.436"
        transform="translate(-1.282 -1.282)"
      />
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
