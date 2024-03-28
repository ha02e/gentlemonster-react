import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "react-bootstrap";

const MainBanner = () => {
  return (
    <Container fluid className="banner-section">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="banner-slide"
      >
        <SwiperSlide>
          <img
            src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/2024-maison-margiela/collaborations/cut-image-pc-v2.jpg"
            alt="2024-maison-margiela"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/2024-maison-margiela/glasses/cut-image-pc.jpg"
            alt="2024-maison-margiela"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/24-optical/glasses/image-pc.jpg"
            alt="24-optical"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/cai_xukun/collaboration/image-pc.jpg"
            alt="cai_xukun"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/margiela/collaboration/collaboration-pc-1.jpg"
            alt="margiela"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default MainBanner;
