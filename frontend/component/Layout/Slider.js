import Reac from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image'
import Styles from "./Slider.module.scss";


function Layout({ data }) {
  return (
    <>
      <Swiper
        slidesPerView='auto'
        navigation={true}
        modules={[Pagination, Navigation]}
        className={Styles.homeSwiper}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((banner, idx) => {
          return (
            <SwiperSlide>

              <Image
                src={banner.image}
                alt="home banner"
                layout="fill"
              />

            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        ...
      </Swiper>
    </>
  )
}

export default Layout