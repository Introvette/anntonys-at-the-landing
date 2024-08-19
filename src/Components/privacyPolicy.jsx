import React from "react";
import Footer from "./Footer/footer";
import NavBar from "./navBar/navBar";
import "./privacyPolicy.css";

const Policy = () => {
  return (
    <div>
      <NavBar />
      <div className="centered-content">
        <section id="privacy-policy">
          <h1>Privacy Policy</h1>
          <p></p>

          <h3 className="privacy">Information We Collect</h3>
          <p>
            <strong>Personal Information:</strong> We may collect personal
            information such as your name, email address, or phone number if you
            contact us via our website or sign up for our newsletter.
          </p>
          <p>
            <strong>Non-Personal Information:</strong> We may also collect
            non-personal information, such as your IP address, browser type, and
            browsing behavior, to improve our website and services.
          </p>

          <h3 className="privacy">How We Use Your Information</h3>
          <p>
            <strong>Communication:</strong> We use your personal information to
            respond to inquiries, send updates, and provide information about
            our menu, special offers, or events. You can opt-out of these
            communications at any time.
          </p>
          <p>
            <strong>Improvement:</strong> We use non-personal information to
            analyze website traffic and improve our services and user
            experience.
          </p>

          <h3 className="privacy">Sharing Your Information</h3>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted
            partners who assist us in operating our website and conducting our
            business, as long as those parties agree to keep your information
            confidential.
          </p>

          <h3 className="privacy">Cookies</h3>
          <p>
            Our website uses cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us remember
            your preferences and improve website functionality.
          </p>

          <h3 className="privacy">Data Security</h3>
          <p>
            We take appropriate measures to protect your personal information
            from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h3 className="privacy">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </section>
        <br />
        <br />
        <br />

        <section id="terms-conditions">
          <h1>Terms and Conditions</h1>
          <p></p>

          <h3 className="privacy">Website Use</h3>
          <p>
            <strong>Eligibility:</strong> You must be at least 18 years old to
            use this website.
          </p>
          <p>
            <strong>Content:</strong> All content on this website, including
            text, images, and graphics, is the property of Anntonys at the
            Landing and is protected by copyright laws. You may not reproduce,
            distribute, or use any content without our prior written consent.
          </p>
          <p>
            <strong>Prohibited Actions:</strong> You agree not to use the
            website for any unlawful purpose or to engage in any conduct that
            could damage, disable, or impair the website.
          </p>

          <h3 className="privacy"> Menu and Pricing</h3>
          <p>
            <strong>Menu Changes:</strong> Our menu items and prices are subject
            to change without notice.
          </p>
          <p>
            <strong>Allergies and Dietary Restrictions:</strong> Please inform
            us of any allergies or dietary restrictions before ordering. We
            strive to accommodate special requests but cannot guarantee the
            absence of allergens.
          </p>

          <h3 className="privacy">Limitation of Liability</h3>
          <p>
            Anntonys at the Landing is not liable for any damages arising from
            the use of this website, including but not limited to direct,
            indirect, incidental, punitive, or consequential damages.
          </p>

          <h3 className="privacy">Links to Third-Party Websites</h3>
          <p>
            Our website may contain links to third-party websites for your
            convenience. We do not endorse or assume responsibility for the
            content or practices of these third-party sites.
          </p>

          <h3 className="privacy">Changes to These Terms</h3>
          <p>
            We may update these terms and conditions from time to time. Any
            changes will be posted on this page with an updated effective date.
          </p>

          <h3 className="privacy">Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Catawba County , without regard to its
            conflict of law principles.
          </p>
          <br />
          <h3>Contact Us</h3>
          <p>
            If you have any questions about our Privacy Policy or Terms and
            Conditions, please contact us at anntonysatthelanding@gmail.com.
          </p>
        </section>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
