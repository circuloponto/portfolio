import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_azmuqar', 'template_jpzz5b7', form.current, {
        publicKey: 'cZ9oMW7dXHjgtOB79',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="section5" className="contact">
      <div className="contactTitle">
        <div className="contactTitleText">CONTACT ME</div>
      </div>
      <div className="contactOverlay"></div>
      <div className="contactWrapper">
        <div className="contactInfo">
          <div className="contactInvite">
            I&apos;d Love to Hear from <span>You</span>
          </div>
          <div className="contactText">
            If you have any questions regarding my work don&apos;t hesitate,
            drop me a line by email or on the form.
          </div>
          <div className="threeIcons">
            <div className="location">
              <div className="contactIcon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 9C7 5.13 10.13 2 14 2C17.87 2 21 5.13 21 9C21 13.17 16.58 18.92 14.77 21.11C14.37 21.59 13.64 21.59 13.24 21.11C11.42 18.92 7 13.17 7 9ZM11.5 9C11.5 10.38 12.62 11.5 14 11.5C15.38 11.5 16.5 10.38 16.5 9C16.5 7.62 15.38 6.5 14 6.5C12.62 6.5 11.5 7.62 11.5 9Z"
                    fill="#EA3D3C"
                  />
                </svg>
              </div>
              <div className="locationText">Porto, Portugal</div>
            </div>
            <div className="email">
              <div className="contactEmail">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.41524 6.87287L0 11.1843V2.56146L6.41524 6.87287ZM14.5848 6.87287L21 11.1843V2.56146L14.5848 6.87287ZM13.6474 7.50464L10.7791 9.43169C10.6946 9.4872 10.5973 9.51628 10.5 9.51628C10.4027 9.51628 10.3054 9.4872 10.2209 9.43169L7.35256 7.50464L0.425122 12.1597L0.0230488 12.4293C0.148537 13.1748 0.778537 13.7457 1.53659 13.7457H19.4634C20.2215 13.7457 20.8515 13.1774 20.977 12.4293L20.5723 12.1597L13.6474 7.50464ZM10.5 8.35582L20.5723 1.58605L20.977 1.31642C20.8515 0.568333 20.2215 0 19.4634 0H1.53659C0.778537 0 0.148537 0.570977 0.0230488 1.31642L0.425122 1.58605L10.5 8.35582Z"
                    fill="#EA3D3C"
                  />
                </svg>
              </div>
              <div className="emailText">nucortez1@gmail.com</div>
            </div>
            <div className="mobile">
              <div className="contactMobile">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1819 15.2598L18.6454 14.9698C18.0363 14.8998 17.4371 15.1098 17.0077 15.5398L15.1703 17.3798C12.3442 15.9398 10.0274 13.6298 8.58942 10.7898L10.4368 8.93977C10.8662 8.50977 11.076 7.90977 11.0061 7.29977L10.7165 4.77977C10.5966 3.76977 9.7478 3.00977 8.72922 3.00977H7.00162C5.87319 3.00977 4.9345 3.94977 5.0044 5.07977C5.53366 13.6198 12.3542 20.4398 20.8723 20.9698C22.0008 21.0398 22.9395 20.0998 22.9395 18.9698V17.2398C22.9494 16.2298 22.1905 15.3798 21.1819 15.2598Z"
                    fill="#EA3D3C"
                  />
                </svg>
              </div>
              <div className="mobileText">+351 915224967</div>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="formName">
              <input name="name" type="text" placeholder="Your Name" />
              {/*  <input name="lastName" type="text" placeholder="Last Name" /> */}
            </div>
            <div className="formEmail">
              <input name="email" type="text" placeholder="Email Address" />
            </div>
            <div className="formSubject">
              <input name="subject" type="text" placeholder="Subject" />
            </div>
            <div className="formMessage">
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
              ></textarea>
            </div>
            {/*  <button type="submit" className="button-52TS">
              Send Message
            </button> */}
            {/* <button type="submit" className="buttonM large red">
              Send Message
            </button> */}
            <a className="buttonP">SEND</a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
