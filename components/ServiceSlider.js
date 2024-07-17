import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";


import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Marca',
    description: 'Marca: Diseño, estrategia, marketing digital, desarrollo web, publicidad, redes sociales, investigación, relaciones públicas.',
    metodo: 'Gestión de redes sociales: Creación y gestión de perfiles en redes sociales para aumentar la visibilidad de la marca, interactuar con los seguidores y construir una comunidad en línea.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño',
    description: 'Servicios de diseño: gráfico, web, moda, industrial, UX/UI, marca, paisaje, arquitectónico, variados y especializados.',
    metodo: 'Diseño gráfico: creación de logotipos, carteles, folletos, diseño de empaques, etc.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desarrollo',
    description: 'Servicios incluyen desarrollo web, software, apps móviles, juegos, consultoría, eCommerce y IoT personalizado.',
    metodo: 'Desarrollo de eCommerce: Creación de plataformas de comercio electrónico para la venta de productos y servicios en línea.',
  },
  {
    icon: <RxReader />,
    title: 'Redacción',
    description: 'Redacción de artículos, web, publicidad, académica, técnica, redes, edición, creativa, currículum, variedad.',
    metodo: 'Redacción de contenido web: Desarrollo de contenido para páginas web, incluyendo descripciones de productos, páginas de servicios, etc.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Servicios SEO incluyen auditoría, investigación de palabras clave, optimización técnica, enlaces, localización y análisis.',
    metodo: 'Auditoría SEO: Revisión exhaustiva del sitio web para identificar áreas de mejora en términos de estructura, contenido, enlaces, rendimiento técnico, etc.',
  },
];

const ServiceSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsOpen(false);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[340px]'
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <button onClick={() => openModal(item)}>
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotare-45 group-hover:text-accent transition-all duration-300'/>
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <motion.div 
        variants={fadeIn('up', 0.1)}
          initial='hidden'
          animate='show'
          exit='hidden'
        className="modal bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
          <div className="modal-content">
            <span className="close group-hover:rotare-45 group-hover:text-accent transition-all duration-300" onClick={closeModal}>&times;</span>
            <h2 className='h2 mb-2 text-lg'>{selectedService.title}</h2>
            <p className='max-w-[1050px] leading-normal'>{selectedService.description}</p>
            <p className='max-w-[1050px] leading-normal'>{selectedService.metodo}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ServiceSlider;