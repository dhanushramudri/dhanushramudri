import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Parameters for the notification email to you
    const notificationParams = {
      to_name: "Dhanush",
      from_name: username,
      message: message,
    };

    // Parameters for the auto-reply email to the user
    const autoReplyParams = {
      to_name: username,
      from_name: "Dhanush", // Changed: This should be your name as you're sending the reply
      message: message,
      user_email: email, // Added: This is where the auto-reply should go
    };

    try {
      // Send notification email to you
      const notificationResponse = await emailjs.send(
        "service_4xtnof8",
        "template_wcfsu6q",
        notificationParams,
        "r5rR8Klhrh27YCwZV"
      );

      // Send auto-reply email to the user
      const autoReplyResponse = await emailjs.send(
        "service_4xtnof8",
        "template_z1gy7cu",
        autoReplyParams,
        "r5rR8Klhrh27YCwZV"
      );

      console.log("Notification email sent:", notificationResponse.status);
      console.log("Auto-reply email sent:", autoReplyResponse.status);

      setLoading(false);
      setIsFormSubmitted(true);
      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ramudridhanush@gmail.com" className="p-text">
            ramudridhanush@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 8688662454" className="p-text">
            +91 8688662454
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
