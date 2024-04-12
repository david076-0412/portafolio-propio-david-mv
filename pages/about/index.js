import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCog,
  FaUserCog,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "habilidades",
    info: [
      {
        title: "Desarrollo web",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "Diseño UI/UX",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: "Administración",
        icons: [<FaUserCog />,],
      },
      {
        title: "Gestión del cambio",
        icons: [<FaCog />,],
      },
      
    ],
  },
  {
    title: "experiencia",
    info: [
      {
        title: "Diseñador UX/UI - Empresa Distribuidora San Cristóbal",
        stage: "2017 - 2018",
      },
      {
        title: "Desarrollador Web - Agencia de Construcción",
        stage: "2018 - 2019",
      },
      {
        title: "Pasante - Empresa Distribuidora San Cristóbal",
        stage: "2019 - 2020",
      },
    ],
  },
  {
    title: "cartas credenciales",
    info: [
      {
        title: "Titulado en la carrera de Ingeniería de Sistemas – Universidad César Vallejo",
        stage: "2017 - 2023",
      },
      {
        title: "Desarrollo web - Universidad César Vallejo",
        stage: "2018 - 2020",
      },
      {
        title: "Cerificado en Computación, CCNA y CISCO - Centro de informática y Sistemas de la Universidad César Vallejo",
        stage: "2018 - 2021",
      },
      {
        title: "Certificado de SCRUM - Universidad César Vallejo",
        stage: "2017 - 2018",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);


  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-center h-full container mx-auto">
          <motion.h2 
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="h2">
            Cautivadora <span className="text-accent">historia</span> dan lugar a magníficos diseños.
          </motion.h2>
          
            <motion.p 
             variants={fadeIn("right", 0.4)}
             initial="hidden"
             animate="show"
             exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Hace 1 año que empecé a trabajar como desarrollador independiente. Desde entonces, he realizado trabajos remotos para agencias, brindé asesoramiento a nuevos emprendedores y colaboré en el desarrollo de productos digitales tanto para uso empresarial como para consumo.
            </motion.p>
          
          {/*counters */}
          <motion.div 
           variants={fadeIn("right", 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Años de experiencia
                </div>
              </div>
              
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Clientes satisfechos
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Proyectos terminados
                </div>
              </div>

              {/* 
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Premios ganadores
                </div>
              </div>
              */}


            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className="flex flex-col w-full xl:mx-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 after:bg-accent items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
