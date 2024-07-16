"use client";
import { useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import emailsender from "@/lib/emailsender";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues, errors: {} };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const { values, errors } = state;
  const { pending } = useFormStatus();
  const formRef = useRef(null); // Create a ref for the form

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
      errors: {
        ...prev.errors,
        [target.name]: "", // Clear the error when the user starts typing
      },
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current);
      await emailsender(formData); // Assuming emailsender is an async function that takes FormData
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
        method="POST" // Add method attribute if needed
        onSubmit={handleSubmit}
      >
        <div>
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`bg-transparent border border-studio_blue ${
              errors.name ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className={`bg-transparent border border-studio_blue ${
              errors.email ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            value={values.message}
            onChange={handleChange}
            name="message"
            placeholder="Message"
            required
            rows="8"
            className={`bg-transparent border border-studio_blue ${
              errors.message ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={!values.name || !values.email || !values.message || pending}
          className={`w-full py-2 px-4 mt-4 rounded-md transition duration-200 ${
            !values.name || !values.email || !values.message
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
