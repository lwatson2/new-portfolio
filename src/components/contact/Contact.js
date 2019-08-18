import React, { useRef } from "react"
import useOnScreen from "../useOnScreen"
import "./Contact.css"

const Contact = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, {
    threshold: 0,
  })
  return (
    <section
      ref={ref}
      style={{ opacity: onScreen ? 1 : 0 }}
      className={
        onScreen ? "contact-wrapper  fadeIn" : "contact-wrapper fadeOut"
      }
    >
      <p className="contact-text">
        You've made it the end, but it doesn't have to be! Feel free to contact
        me on{" "}
        <a
          href="https://linkedin.com/in/loganawatson"
          className="linkedin-link"
        >
          LinkedIn
        </a>{" "}
        or email me!
      </p>
      <form
        className="contact-form-container"
        action="https://formspree.io/logana.watson1.gmail.com.tld"
        method="post"
      >
        <label htmlFor="name">Name</label>
        <input className="contact-input" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input className="contact-input" type="text" name="email" />
        <label htmlFor="message">Message</label>
        <textarea
          className="form-message"
          name="message"
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <button type="submit" className="contact-form-btn">
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
