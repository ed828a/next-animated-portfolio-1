"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const AboutPage = () => {
  const text = "Say hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😀
          </div>
        </div>
        {/* form container */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span className="">Dear Lama Dev,</span>
          <textarea
            name="user_message"
            id="user_message"
            cols="30"
            rows="6"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span className="">My mail address is:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="">Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-2">
            Send
          </button>
          {success && (
            <span className="text-green-500 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default AboutPage;
