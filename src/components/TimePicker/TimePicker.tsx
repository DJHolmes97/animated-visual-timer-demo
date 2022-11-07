// Import Swiper React components
import { Row, Card, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

import { timePickerPopulator } from "../../helpers/timePickerPopulator";
import * as Styled from "./TimePicker.styles";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "./styles.css";

const HorizontalPicker = ({ times }: { times: number[] }) => {
  return (
    <Swiper
      style={{ maxHeight: "186px", maxWidth: "60px", zIndex: 0 }}
      slidesPerView={3}
      centeredSlides={true}
      effect={"coverflow"}
      grabCursor={true}
      loop={false}
      direction={"vertical"}
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
          <SwiperSlide key={time} style={{}}>
            <Styled.TImeCard className="text-center bg-transparent" body={true}>
              {time}
            </Styled.TImeCard>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const TimePicker = () => {
  const minutes = timePickerPopulator();
  const seconds = timePickerPopulator();

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
            <HorizontalPicker times={minutes} />
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
            <HorizontalPicker times={seconds} />
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
  );
};
export default TimePicker;
