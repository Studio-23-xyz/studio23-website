"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues, errors: {} };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: "", // Clear the error when the user starts typing
      },
    }));
  };

  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_EMAIL_CLIENT_ID,
    // Do not allow headless browsers
    blockHeadless: true,

    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var templateParams = {
        name: state.values.name,
        email: state.values.email,
        message: state.values.message,
      };

      emailjs.send("service_qf8d36j", "template_ehbfgsm", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

      setState(initState); // Reset form values to initial state
      formRef.current.reset(); // Manually reset the form fields
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle the error (e.g., display a message to the user)
    }
  };

  return (
    <div className="w-full h-auto mx-auto flex flex-col gap-3">
      <h1 className="text-[20px] md:text-[30px] font-bold">Contact Us</h1>
      <form
        ref={formRef}
        className="w-full flex flex-col justify-center gap-4 mt-3"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            value={state.values.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`bg-transparent border border-studio_blue ${
              state.errors.name ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {state.errors.name && (
            <p className="text-red-500 text-sm">{state.errors.name}</p>
          )}
        </div>
        <div>
          <input
            value={state.values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className={`bg-transparent border border-studio_blue ${
              state.errors.email ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {state.errors.email && (
            <p className="text-red-500 text-sm">{state.errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            value={state.values.message}
            onChange={handleChange}
            name="message"
            placeholder="Message"
            required
            rows="8"
            className={`bg-transparent border border-studio_blue ${
              state.errors.message ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {state.errors.message && (
            <p className="text-red-500 text-sm">{state.errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={
            !state.values.name || !state.values.email || !state.values.message
          }
          className={`w-full py-2 px-4 mt-4 rounded-md transition duration-200 ${
            !state.values.name || !state.values.email || !state.values.message
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-studio_blue text-black font-bold hover:bg-white"
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
