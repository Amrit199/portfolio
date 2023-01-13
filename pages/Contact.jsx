import React, { useState } from "react";
import Socialcontacts from "../components/Socialcontacts";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const socialicons = [
  {
    icon: BsLinkedin,
    name: "LINKEDIN",
    color: "0077B5",
  },
  {
    icon: BsGithub,
    name: "GITHUB",
    color: "171515",
  },
  {
    icon: HiDocumentText,
    name: "RESUME",
    color: "008000",
  },
  {
    icon: MdEmail,
    name: "EMAIL",
    color: "c71610",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      (formData.name,
      formData.mobile,
      formData.email,
      formData.subject,
      formData.message == "")
    ) {
      alert("Please Fill out all the details");
      // return setError(!error)
    } else {
      alert("Thank you, your message has been sent");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div id="contact" className="w-full h-full pt-24">
      <h2 className="text-center my-4">CONTACT ME</h2>
      <div className="w-full text-center p-4 flex items-center justify-center gap-4 relative">
        {socialicons.map((item) => (
          <Socialcontacts item={item} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[80%] md:w-[60%] lg:w-[50%] p-6 lg:p-6 shadow-xl shadow-gray-600 mx-auto flex flex-col items-center justify-between gap-4">
          {/* {error ? <h2>Please fill the form</h2> : ""} */}
          <div className=" w-full flex flex-wrap items-center justify-between gap-4">
            <div className="w-full flex flex-col gap-1">
              <label>NAME</label>
              <input
                type="text"
                className="p-3 border-2 rounded-lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label>MOBILE NUMBER</label>
              <input
                type="text"
                className="p-3 border-2 rounded-lg"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>EMAIL</label>
            <input
              type="email"
              className="p-3 border-2 rounded-lg"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>SUBJECT</label>
            <input
              type="text"
              className="p-3 border-2 rounded-lg"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label>MESSAGE</label>
            <textarea
              className="p-3 border-2 rounded-lg"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="w-full transition-colors hover:bg-green-300"
            type="subimt"
          >
            send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
