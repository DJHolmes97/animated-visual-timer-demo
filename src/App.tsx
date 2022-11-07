import React, { useState } from "react";
import "./App.css";
import TimePicker from "./components/TimePicker/TimePicker";
import VisualTimer from "./components/VisualTimer/VisualTimer";
import { Card, Row, Button, OverlayTrigger } from "react-bootstrap";
import TimeModal from "./components/TimeModal/TimeModal";

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const handlePause = () => {
    if (isPaused) {
      console.log("play");

      setIsPaused(false);
    } else {
      console.log("pause");
      setIsPaused(true);
    }
  };
  return (
    <>
      <Row>
        {<VisualTimer tMinutes={0} tSeconds={59} isPaused={isPaused} />}
      </Row>
      <TimeModal />
      <Row>
        <Button
          variant="primary"
          style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
          onClick={handlePause}
        >
          Pause
        </Button>
      </Row>
    </>
  );
}

export default App;
