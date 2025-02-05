
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "482f4703-c322-4d21-9850-c8e822b19c20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <h4 className="text-lg text-center font-Ovo text-gray-600 mb-2
       dark:text-gray-400 ">
        Connect with Me
      </h4>
      <h2 className="text-5xl text-center font-Ovo text-gray-800 dark:text-white">
        Get in Touch
      </h2>
      <p className="max-w-2xl text-center mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-200">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            id="name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            placeholder="Enter your name"
            name="name"
          />
          <input
            type="email"
            required
            id="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            required
            rows="5"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
            dark:bg-darkHover/30 dark:border-white/90"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 text-white px-8 w-max flex items-center justify-between gap-2 bg-black/80 white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact; 
