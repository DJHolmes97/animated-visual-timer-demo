import * as React from "react"
import { SVGProps } from "react"

const CircleSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="210mm"
    height="210mm"
    viewBox="0 0 210 210"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      style={{
        fill: "none",
        stroke: "#4936c6",
        strokeWidth: 10,
        strokeLinecap: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <circle
        style={{
          fill: "none",
          stroke: "#4936c6",
          strokeWidth: 10,
          strokeLinecap: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
          imageRendering: "auto",
        }}
        cx={90.083}
        cy={133.896}
        r={100}
        transform="translate(14.917 -28.896)"
      />
    </g>
  </svg>
)

export default CircleSVG
