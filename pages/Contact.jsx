import React, { useRef } from "react";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "../data";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { PublicID, serviceID, templateID } from "../emailjs.cli";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const form = useRef();

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
    <div id="Contact" className="w-full h-full pt-20 mb-8">
      <h1 className="text-center py-3">CONTACT ME</h1>
      <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] mx-auto bg-slate-200 p-6 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h4 className="text-center">Contact me through social media</h4>
          <div className="w-full text-center p-4 flex items-center justify-center gap-4 relative">
            {Data.socialicons.map((item, index) => (
              <Socialcontacts item={item} key={index} />
            ))}
          </div>
          <h4 className="text-center">Or through this contact form</h4>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="w-full flex flex-col items-start justify-center gap-3"
        >
          <div className="w-full flex flex-col gap-1">
            <label>Name</label>
            <input
              {...register("user_name", { required: true })}
              aria-invalid={errors.user_name ? "true" : "false"}
              type="text"
              name="user_name"
              placeholder="Ditt fulle navn"
              className="p-3 border-2 rounded-lg font-normal"
            />
            {errors.user_name?.type === "required" && (
              <p role="alert" className="text-red-700">
                Please fill up the name
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>Email address</label>
            <input
              {...register("user_email", { required: true })}
              aria-invalid={errors.user_email ? "true" : "false"}
              type="email"
              name="user_email"
              placeholder="Din e-postadresse"
              className="p-3 border-2 rounded-lg font-normal"
            />
            {errors.user_email?.type === "required" && (
              <p role="alert" className="text-red-700">
                Email is required
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>Message</label>
            <textarea
              {...register("message", { required: true })}
              aria-invalid={errors.message ? "true" : "false"}
              name="message"
              rows={5}
              cols={40}
              placeholder="Skriv en medling her..."
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
    </div>
  );
};

export default Contact;
