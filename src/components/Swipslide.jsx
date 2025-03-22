/*{import swiper}*/ 
import {Swiper, SwiperSlide} from 'swiper/react'
/*{import swiper styper}*/
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/*{import require Modules}*/ 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
import slideimage1 from '../assets/marathons1.jpg'
import slideimage2 from '../assets/marathons2.jpg'
import slideimage3 from '../assets/marathons3.jpg'
import slideimage4 from '../assets/marathons4.jpg'
import slideimage5 from '../assets/marathons5.jpg'
import slideimage6 from '../assets/marathons6.jpg'
export default function Swipslide() {
    return (
        <div className="px-6 py-10">
<Swiper
 spaceBetween={30}
 centeredSlides={true}
 autoplay={{
   delay: 2500,
   disableOnInteraction: false,
 }}
 pagination={{
   clickable: true,
 }}
 navigation={true}
 modules={[Autoplay, Pagination, Navigation]}
 className="mySwiper"
>
<SwiperSlide>
    <Slider  text={<>
        Run for <span className="text-white"> Glory Race for</span>,  Joy!
      </>}  image={slideimage1} ></Slider>
</SwiperSlide>
<SwiperSlide>
    <Slider text='Every Step Tells a Story — Join the Marathon!' image={slideimage2}></Slider>
</SwiperSlide>
<SwiperSlide>
    <Slider text='Push Your Limits, Embrace the Challenge!' image={slideimage3}></Slider>
</SwiperSlide>

<SwiperSlide>
    <Slider text='Where Determination Meets the Finish Line.' image={slideimage4}></Slider>
</SwiperSlide>
<SwiperSlide>
    <Slider text='Lace Up and Make Every Mile Count!' image={slideimage5}></Slider>
</SwiperSlide>
<SwiperSlide>
    <Slider text='Experience the Thrill of the Marathon Spirit!' image={slideimage6}></Slider>
</SwiperSlide>

</Swiper>
        </div>
    )
}
