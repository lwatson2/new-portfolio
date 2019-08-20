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
      id="contact"
      ref={ref}
      style={{ opacity: onScreen ? 1 : 0 }}
      className={
        onScreen ? "contact-wrapper  fadeIn" : "contact-wrapper fadeOut"
      }
    >
      <p className="contact-text">
        You've made it the end, but it doesn't have to be! Feel free to contact
        me on
        <a
          href="https://linkedin.com/in/loganawatson"
          className="linkedin-link"
        >
          LinkedIn
        </a>
        or email me!
      </p>

      <form
        name="contact"
        className="contact-form-container"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
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
        <button type="submit" className="contact-form-btn">
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
