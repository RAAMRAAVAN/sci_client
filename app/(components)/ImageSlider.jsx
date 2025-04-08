"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { memo } from "react";

const ImageSlider = ({ id, Images = [] }) => {
  const imageArray = id === 70 ? ['2.jpg']
    : id === 69 ? ['1.jpg']
      : JSON.parse(Images);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '600px',
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        // navigation={isMdUp}
        style={{ width: "fit-content", height: "auto" }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {imageArray.length > 0 ? (
          imageArray.map((image, index) => (
            <SwiperSlide key={index} style={{ width: "fit-content" }}>
              <ExportedImage
                src={`/News/${id}/${image}`}
                alt="Image Slide"
                width={600}
                height={300}
                style={{
                  width: "600px",
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 1.5s ease-in-out",
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide style={{ width: "fit-content" }}>
            <ExportedImage
              src="/placeholder.jpg"
              alt="No Image Available"
              width={600}
              height={300}
              style={{
                width: "600px",
                height: "300px",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
          </SwiperSlide>
        )}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev" style={navButtonStyle("left")}></div>
      <div className="swiper-button-next" style={navButtonStyle("right")}></div>
    </Box>
  );
};

// Custom style for navigation buttons
const navButtonStyle = (position) => ({
  position: "absolute",
  top: "50%",
  [position]: "10px",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  padding: "10px",
  borderRadius: "50%",
  zIndex: 1000,
  cursor: "pointer",
  fontSize: "20px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default memo(ImageSlider);
