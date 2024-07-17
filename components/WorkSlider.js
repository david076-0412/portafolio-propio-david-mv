import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

import Link from "next/link";

// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/proyecto_1.png",
          enlace: "https://github.com/david076-0412/tesis-web-david",

        },
        {
          title: "title",
          path: "/proyecto_2.png",
          enlace: "https://github.com/david076-0412/proyecto-unitalent-web",
        },
        {
          title: "title",
          path: "/proyecto3.jpg",
          enlace: "https://github.com/david076-0412/perfil-profesional-web",
        },
        {
          title: "title",
          path: "/proyecto_4.png",
          enlace: "https://github.com/david076-0412/proyecto-tienda-online-movil",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/proyecto_5.png",
          enlace: "https://jdinnovart.com",
        },
        {
          title: "title",
          path: "/proyecto_6.png",
          enlace: "https://catálogojdinnovart.com",
        },
        {
          title: "title",
          path: "/proyecto_7.png",
          enlace: "http://www.struwis.com",
        },
        {
          title: "title",
          path: "/proyecto3.jpg",
          enlace: "https://github.com/david076-0412/perfil-profesional-web",
        },
      ],
    },
  ],
};



const imageStyle = {
  borderRadius: '10px', // Puedes ajustar este valor para cambiar el radio de los bordes
};



const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-´280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" style={imageStyle} />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                      
                    <Link
                          href={image.enlace}
                          target="_blank" 
                          rel="noopener noreferrer"
                          key={index}>
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        
                          {/* title parte 1 */}
                          <div className="delay-100">PROYECTO</div>
                          {/* title parte 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          EN VIVO
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%]group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        
                      </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
