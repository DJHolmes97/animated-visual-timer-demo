import React, { useEffect, useState } from "react"
import "./App.css"
import TimePicker from "./components/TimePicker/TimePicker"
import VisualTimer from "./components/VisualTimer/VisualTimer"
import { Card, Row, Button, OverlayTrigger, Col } from "react-bootstrap"
import TimeModal from "./components/TimeModal/TimeModal"
import {
  faPause,
  faPlay,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Styled from "./App.styles"

function App() {
  const [isPaused, setIsPaused] = useState(true)
  const [isReset, setIsReset] = useState(false)
  const [tMinutes, setTMinutes] = useState(0)
  const [tSeconds, setTSeconds] = useState(59)

  const handleSetTime = (newMinutes: number, newSeconds: number) => {
    setTMinutes(newMinutes)
    setTSeconds(newSeconds)
  }

  useEffect(() => {
    console.log(tMinutes)
    console.log(tSeconds)
  }, [tMinutes, tSeconds])

  const handlePause = () => {
    if (isPaused) {
      console.log("play")

      setIsPaused(false)
    } else {
      console.log("pause")
      setIsPaused(true)
    }
  }

  const handleReset = () => {
    if (!isReset) {
      setIsReset(true)
    }
  }

  return (
    <>
      <Styled.CenteredRow>
        {
          <VisualTimer
            tMinutes={tMinutes}
            tSeconds={tSeconds}
            isPaused={isPaused}
            isReset={isReset}
            setIsReset={setIsReset}
          />
        }
      </Styled.CenteredRow>
      <Row style={{ marginTop: "5px" }}>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <TimeModal
            handleSetTime={handleSetTime}
            modalMinutes={tMinutes}
            modalSeconds={tSeconds}
          />
        </Col>
        <Col xs={1}>
          <Button
            variant="primary"
            style={{
              borderRadius: "50%",
              height: "4rem",
              width: "4rem",
              justifyContent: "center",
            }}
            onClick={handlePause}
          >
            <FontAwesomeIcon
              icon={isPaused ? faPlay : faPause}
              style={{ height: "95%", width: "95%" }}
            />
          </Button>
        </Col>
        <Col>
          <Button
            variant="primary"
            style={{
              borderRadius: "50%",
              height: "4rem",
              width: "4rem",
              justifyContent: "center",
            }}
            onClick={handleReset}
          >
            <FontAwesomeIcon
              icon={faRotateRight}
              style={{ height: "95%", width: "95%" }}
            />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default App
