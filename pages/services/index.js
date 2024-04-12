


import { FreeMode, Pagination} from 'swiper';




import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-8'>
            Mis servicios <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Se ofrece desarrollo de software personalizado, diseño y planificación de sistemas informáticos, gestión de bases de datos, instalación y configuración de sistemas, administración de redes, consultoría tecnológica para mejorar la eficiencia empresarial, soporte técnico para resolver problemas y brindar asistencia, desarrollo y mantenimiento de sitios web, y investigación de nuevas tecnologías para mejorar sistemas existentes o desarrollar soluciones innovadoras.
            </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          {/* slider */}
        <ServiceSlider />
        </motion.div>
        
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
