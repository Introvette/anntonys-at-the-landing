import React from "react";
import NavBar from "../../navBar/navBar";
import ContactForm from "../../contactForm/contactForm";
import Footer from "../../Footer/footer";
import "./contact.css";

const ContactPage = () => {
  return (
    <div>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="contact-page">
        <div className="contact-page-container">
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="map-container">
            <div className="address">
              <p>
                <b>Address:</b> 4491 Slanting Bridge Road, Sherrills Ford, 28673
              </p>
              <p>
                <b>Phone Number:</b> (828) - 478 - 5944
              </p>
              <p>
                <b>
                  <u>Hours of Operation:</u>
                </b>
              </p>
              <ul className="hours">
                <li>
                  <b>
                    <i>Monday - Tuesday:</i>
                  </b>{" "}
                  Closed
                </li>
                <li>
                  <b>
                    <i>Wednesday - Saturday:</i>
                  </b>{" "}
                  11AM - 9PM
                </li>
                <li>
                  <b>
                    <i>Sunday:</i>
                  </b>{" "}
                  12PM - 8PM
                </li>
              </ul>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.339091784518!2d-80.99320042330547!3d35.5700214360736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856b39f45d297c1%3A0x309768886cb0ecec!2sAnntonys%20at%20the%20Landing!5e0!3m2!1sen!2sus!4v1718641210008!5m2!1sen!2sus"
              width="300"
              height="450"
              title="restaurant-address"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
