import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Modal, Popover } from "react-bootstrap"
import TimePicker from "../TimePicker/TimePicker"
import { faClock } from "@fortawesome/free-solid-svg-icons"

import * as Styled from "./TimeModal.styles"

const ModalWrapper = ({
  handleSetTime,
}: {
  handleSetTime: (newMinutes: number, newSeconds: number) => void
}) => {
  const [show, setShow] = useState(false)

  const [newMinutes, setNewMinutes] = useState(0)
  const [newSeconds, setNewSeconds] = useState(59)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleOnButtonClick = () => {
    handleSetTime(newMinutes, newSeconds)
    handleClose()
  }

  return (
    <>
      <Button
        variant="primary"
        style={{ borderRadius: "50%", height: "4rem", width: "4rem" }}
        onClick={handleShow}
      >
        <FontAwesomeIcon
          icon={faClock}
          style={{ height: "95%", width: "95%" }}
        />
      </Button>

      <Modal
        show={show}
        backdrop="static"
        centered={true}
        onHide={handleClose}
        style={{}}
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose a new time:</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TimePicker
            setNewMinutes={setNewMinutes}
            setNewSeconds={setNewSeconds}
          />
          <Button variant="primary" onClick={() => handleOnButtonClick()}>
            Select Time
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

const TimeModal = ({
  handleSetTime,
}: {
  handleSetTime: (newMinutes: number, newSeconds: number) => void
}) => {
  return <ModalWrapper handleSetTime={handleSetTime} />
}

export default TimeModal
