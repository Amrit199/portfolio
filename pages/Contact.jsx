import React, { useRef, useState } from "react";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "../data";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { PublicID, serviceID, templateID } from "../emailjs.cli";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import contactimg from "../public/assets/images/contact.jpg";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const form = useRef();
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, PublicID);
      Swal.fire({
        title: "Takk for medling",
        text: "Vi har mottatt meldingen din og kommer tilbake til deg så snart som mulig",
        icon: "success",
      });
      reset();
    } catch (error) {
      console.error(error.text);
    }
  };
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      id="Contact"
    >
      <motion.div
        className="w-full h-full py-20 flex flex-col md:flex-row items-center justify-center px-3 md:px-7 gap-8 md:gap-2"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="w-full h-full flex flex-col items-center justify-center gap-7 relative px-3"
          variants={variants}
        >
          <Image
            src={contactimg}
            alt="Kontakt meg"
            className="-z-20 absolute opacity-30"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
          <motion.h1 variants={variants}>
            "Lets Connect and Build Together!"
          </motion.h1>
          <motion.div
            className="w-full text-center p-4 flex items-center justify-center gap-4 relative"
            variants={variants}
          >
            {Data.socialicons.map((item, index) => (
              <Socialcontacts item={item} key={index} />
            ))}
          </motion.div>
        </motion.div>
        <div className="w-full">
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="w-full lg:w-[70%] mx-auto flex flex-col items-start justify-center gap-3"
          >
            <div className="w-full flex flex-col gap-1">
              <input
                {...register("user_name", { required: true })}
                aria-invalid={errors.user_name ? "true" : "false"}
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="p-3 border-2 rounded-lg font-normal"
              />
              {errors.user_name?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Please fill up the name
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                {...register("user_email", { required: true })}
                aria-invalid={errors.user_email ? "true" : "false"}
                type="email"
                name="user_email"
                placeholder="Email address"
                className="p-3 border-2 rounded-lg font-normal"
              />
              {errors.user_email?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Email is required
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <textarea
                {...register("message", { required: true })}
                aria-invalid={errors.message ? "true" : "false"}
                name="message"
                rows={5}
                cols={40}
                placeholder="Write a message"
                className="p-3 border-2 rounded-lg font-normal"
              />
              {errors.message?.type === "required" && (
                <p role="alert" className="text-red-700">
                  Message is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#254291] text-white rounded-lg text-lg font-semibold hover:bg-[#1f1f1f] transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
