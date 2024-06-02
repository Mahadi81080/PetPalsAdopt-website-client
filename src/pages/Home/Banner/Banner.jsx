import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../../assets/banner/mona-magnussen-a7bdqjeG6M4-unsplash.jpg";
import img2 from "../../../assets/banner/mitchell-orr-PUY5xUszd3Y-unsplash.jpg";
import img3 from "../../../assets/banner/ryan-walton-AbNO2iejoXA-unsplash.jpg";

const Banner = () => {
  return (
    <div className="mt-20 w-full">
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="slide1" className="flex justify-center items-center gap-8">
            <img src={img1} className="w-1/2 h-[450px] " />
            <div className="w-1/2 space-y-2">
              <div className="space-y-5 text-right">
                <h3 className="text-3xl font-semibold text-[#3498db]">
                  Get 40% Off On Your First Order
                </h3>
                <h1 className="text-7xl font-extrabold">Puppy And Cat Food</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem voluptas sunt magnam accusantium consequuntur,
                  qui provident laudantium expedita quaerat consequatur?
                </p>
                <button className="btn bg-black text-white rounded-full px-7 py-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide1" className="flex justify-center items-center gap-8">
            <img src={img2} className="w-1/2 h-[450px] " />
            <div className="w-1/2 space-y-2">
              <div className="space-y-5 text-right">
                <h3 className="text-3xl font-semibold text-[#3498db]">
                  Get 40% Off On Your First Order
                </h3>
                <h1 className="text-7xl font-extrabold">Puppy And Cat Food</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem voluptas sunt magnam accusantium consequuntur,
                  qui provident laudantium expedita quaerat consequatur?
                </p>
                <button className="btn bg-black text-white rounded-full px-7 py-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide1" className="flex justify-center items-center gap-8">
            <img src={img3} className="w-1/2 h-[450px] " />
            <div className="w-1/2 space-y-2">
              <div className="space-y-5 text-right">
                <h3 className="text-3xl font-semibold text-[#3498db]">Get 40% Off On Your First Order</h3>
                <h1 className="text-7xl font-extrabold">Puppy And Cat Food</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sunt magnam accusantium consequuntur, qui provident laudantium expedita quaerat consequatur?</p>
                <button className="btn bg-black text-white rounded-full px-7 py-2">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
