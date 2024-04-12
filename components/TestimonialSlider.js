// testimonial data


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

import Image from "next/image";

export const testimonialSlider = [
  {
    image: '/avt-1.png',
    name: 'Freddy Salvador Edwin',
    position: 'Cliente 1',
    message:
      '"¡Increíble! Mi página web profesional refleja perfectamente mi identidad y servicios. Gracias por la atención personalizada y el diseño impecable. ¡Recomendaré siempre su talento excepcional!"',
  },
  {
    image: '/avt-2.jpg',
    name: 'Vicente Loayza Alexander',
    position: 'Cliente 2',
    message:
      '"Gracias por transformar nuestra experiencia educativa. La página web y aula virtual son intuitivas, atractivas y funcionales. Han mejorado enormemente nuestra comunicación y enseñanza. ¡Excelente trabajo!"',
  },
  {
    image: '/avt-3.jpg',
    name: 'Choquecahua Suca Emanuel',
    position: 'Cliente 3',
    message:
      '"¡Increíble experiencia con la app de tienda online! Fácil navegación, gran variedad de productos y proceso de compra sin complicaciones. ¡Totalmente recomendada para mis compras online!"',
  },
];


const imageStyle = {
  borderRadius: '50px', // Puedes ajustar este valor para cambiar el radio de los bordes
};




const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation,Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt='' style={imageStyle}/>
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* quate & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                  </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
