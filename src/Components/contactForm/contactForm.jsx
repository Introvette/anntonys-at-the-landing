import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";
import thanks from "./thanks-email.gif";



const ContactForm = () => {
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      phone_number: event.target.phone.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        "service_5donxa2",
        "template_rxes7cd",
        formData,
        "QdhduhLrlH04T2Ca2"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);

          setShowForm(false);
          setTimeout(() => {
            setShowForm(true);
          }, 10000);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

    event.target.reset();
  };

  return (
    <div className="contact-container">
      
      
        {showForm ? (
          <div>
            <h2>Say Hello!</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="thank-you-message">
            <img className="thanks" src={thanks} alt="thank you for your email" />
          </div>
        )}
     
    </div>
  );
};

export default ContactForm;
