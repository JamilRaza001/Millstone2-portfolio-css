import React from "react";
import { IoMailUnread } from "react-icons/io5";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import "../app/styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">Get in touch</h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call or send me a message submitting the
            form.
          </p>
          <div className="contact-flex" data-aos="zoom-in-up">
            <IoMailUnread size={50} /> jamilraza001@gmail.com
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsFillTelephoneInboundFill size={50} /> 0310-3118833
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <GrLinkedin size={50} />
            <a href="www.linkedin.com/in/jamilrazaa" target="_blank">
              www.linkedin.com/in/jamilrazaa
            </a>
          </div>
        </div>
        <div className="contact-space">
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input-field"
              id="name"
            />
          </div>
          <div className="form"data-aos="zoom-in-up">
            <label htmlFor="emil">Email</label>
            <input
              type="text"
              className="input-field"
              id="email"
            />
          </div>
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="textarea-field"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button className="button" data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
