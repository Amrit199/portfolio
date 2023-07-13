import React, { useState } from "react";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "./data";

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
    <div id="Contact" className="w-full h-full pt-20 mb-8">
      <h1 className="text-center">CONTACT ME</h1>
      <div className="w-full text-center p-4 flex items-center justify-center gap-4 relative">
        {Data.socialicons.map((item, index) => (
          <Socialcontacts item={item} key={index} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[95%] md:w-[60%] lg:w-[50%] rounded-lg p-4 shadow-xl shadow-gray-600 mx-auto flex flex-col items-center justify-between gap-4">
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
