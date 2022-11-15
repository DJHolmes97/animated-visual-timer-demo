// Import Swiper React components
import { Row, Card, Col } from "react-bootstrap"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { EffectCoverflow } from "swiper"

import { timePickerPopulator } from "../../helpers/timePickerPopulator"
import * as Styled from "./TimePicker.styles"
import "swiper/css/bundle"
import "swiper/css/effect-coverflow"
import "./styles.css"
import { useState } from "react"

const HorizontalPicker = ({
  times,
  name,
  setNewTime,
  initialTime,
}: {
  times: number[]
  name: string
  setNewTime: React.Dispatch<React.SetStateAction<number>>
  initialTime: number
}) => {
  return (
    <Swiper
      style={{ maxHeight: "186px", maxWidth: "60px", zIndex: 0 }}
      slidesPerView={3}
      centeredSlides={true}
      effect={"coverflow"}
      grabCursor={true}
      loop={false}
      direction={"vertical"}
      onSwiper={(swiper) => {
        setNewTime(swiper.realIndex)
        swiper.slideTo(initialTime)
      }}
      onActiveIndexChange={(swiper) => setNewTime(swiper.realIndex)}
      coverflowEffect={{
        rotate: -25,
        stretch: 5,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
    >
      {times.map((time) => {
        return (
          <SwiperSlide key={time}>
            <Styled.TImeCard className="text-center bg-transparent" body={true}>
              {time}
            </Styled.TImeCard>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

const TimePicker = ({
  initialMinutes,
  initialSeconds,
  setNewSeconds,
  setNewMinutes,
}: {
  initialMinutes: number
  initialSeconds: number
  setNewSeconds: React.Dispatch<React.SetStateAction<number>>
  setNewMinutes: React.Dispatch<React.SetStateAction<number>>
}) => {
  const minutes = timePickerPopulator()
  const seconds = timePickerPopulator()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "15rem",
        width: "95%",
        maxHeight: "300px",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <div
        className="border border-1"
        style={{
          position: "relative",
          zIndex: 0,
          maxHeight: "100px",
          alignItems: "center",
          height: "4rem",
          width: "100%",
          maxWidth: "312px",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            position: `relative`,
            bottom: "45px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "15rem",
            maxHeight: "150px",
            overflow: "hidden",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "200px",
              maxHeight: "64px",
            }}
          >
            <HorizontalPicker
              times={minutes}
              name="minutes"
              initialTime={initialMinutes}
              setNewTime={setNewMinutes}
            />
            <Styled.LabelCard
              className="text-center bg-transparent"
              body={true}
            >
              Minutes
            </Styled.LabelCard>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "200px",
            }}
          >
            <HorizontalPicker
              times={seconds}
              name="seconds"
              initialTime={initialSeconds}
              setNewTime={setNewSeconds}
            />
            <Styled.LabelCard
              className="text-center bg-transparent"
              body={true}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "auto",
                border: "none",
                maxHeight: "64px",
                fontWeight: "bold",
                borderRadius: 0,
                fontSize: "1.25rem",
              }}
            >
              Seconds
            </Styled.LabelCard>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TimePicker
