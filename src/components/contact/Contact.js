import React, { useRef } from "react"
import useOnScreen from "../helpers/useOnScreen"
import useForm from "../helpers/formHelper"
import validate from "../helpers/contactFormValidation"
import "./Contact.css"
import axios from "axios"
import * as qs from "query-string"

const Contact = props => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, {
    threshold: 0,
  })
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleFormSubmit = async form => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
  }
  const { values, handleChange, handleSubmit, errors } = useForm(
    handleFormSubmit,
    validate
  )

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
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        {errors.name && (
          <div className="contact-form-error-message">
            <span>{errors.name}</span>
          </div>
        )}
        <label htmlFor="name">Name</label>
        <input
          className="contact-input"
          type="text"
          id="name"
          onChange={handleChange}
          name="name"
          value={values.name || ""}
        />
        {errors.email && (
          <div className="contact-form-error-message">
            <span>{errors.email}</span>
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input
          className="contact-input"
          type="email"
          id="email"
          onChange={handleChange}
          name="email"
          value={values.email || ""}
        />
        {errors.message && (
          <div className="contact-form-error-message">
            <span>{errors.message}</span>
          </div>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          className="form-message"
          name="message"
          id="message"
          cols="30"
          rows="5"
          onChange={handleChange}
          value={values.message || ""}
        ></textarea>
        <button type="submit" className="contact-form-btn">
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
