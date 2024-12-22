// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgOne from '../assets/bgThree.jpg'
import bgTwo from '../assets/bgOne.jpg'
import bgThree from '../assets/bgTwo.jpg'
import BannerDescription from './BannerDescription'
const Banner = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <BannerDescription
                        image={bgOne}
                        textOne='Welcome to RESTAURANT'
                        text='Delicious flavors, warm ambiance where every meal is a celebration!'
                    ></BannerDescription>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDescription
                        image={bgTwo}
                        textOne='Welcome to RESTAURANT'
                        text='Savor the taste of perfection! RESTAURANT brings you fresh, flavorful dishes!'
                    ></BannerDescription>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDescription
                        image={bgThree}
                        textOne='Welcome to RESTAURANT'
                        text='Your favorite spot for great food and good vibes!'
                    ></BannerDescription>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;