"use client";
import { useState } from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues, errors: {} };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const { values, errors } = state;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = values;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setState((prev) => ({ ...prev, errors: newErrors }));
    } else {
      // Handle form submission (e.g., send email)
    }
  };

  return (
    <div className="w-[90%] h-auto mx-auto mt-14 flex justify-center">
      <form className="w-full md:w-[30%] xl:w-[20%] flex flex-col justify-center gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-[16px] font-bold text-white">
            Your Name
          </label>
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`bg-fiery_black border ${
              errors.name ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-2 text-[16px] font-bold text-white">
            Your Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`bg-fiery_black border ${
              errors.email ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-[16px] font-bold text-white">
            Your Message
          </label>
          <textarea
            value={values.message}
            onChange={handleChange}
            name="message"
            placeholder="Your Message"
            required
            className={`bg-fiery_black border ${
              errors.message ? "border-red-500" : "border-black"
            } text-white text-[16px] rounded-xl focus:ring-white focus:border-white block w-full p-2.5`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={!values.name || !values.email || !values.message}
          className={`w-full py-2 px-4 mt-4 rounded-md transition duration-200 ${
            !values.name || !values.email || !values.message
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-studio_blue"
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
