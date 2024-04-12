import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Circles from "/components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

function ContactForm() {
  const [state, handleSubmit] = useForm("xayrllvb");
  if (state.succeeded) {
    return (
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              ¡Gracias por enviame{" "}
              <span className="text-accent">un mensaje!</span>
            </motion.p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Contactame <span className="text-accent">conmigo</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="nombre"
                className="input"
              />

              <ValidationError
                prefix="Nombre"
                field="nombre"
                errors={state.errors}
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="input"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <input
              id="asunto"
              type="text"
              name="asunto"
              placeholder="asunto"
              className="input"
            />

            <ValidationError
              prefix="Asunto"
              field="asunto"
              errors={state.errors}
            />

            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="mensaje"
              className="textarea"
            ></textarea>

            <ValidationError
              prefix="Mensaje"
              field="mensaje"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Hablemos
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
