import React, { useRef } from "react"
import useOnScreen from "../helpers/useOnScreen"
import aboutImage from "../../images/undraw_programming_2svr.svg"
import "./About.css"

const About = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, {
    threshold: [0, 0.3],
    rootMargin: "-75px",
  })
  return (
    <section
      id="about"
      ref={ref}
      style={{ opacity: onScreen ? 1 : 0 }}
      className={onScreen ? "aboutContainer  fadeIn" : "aboutContainer fadeOut"}
    >
      <h3 className="about-me-header">About Logan</h3>
      <div className="imageContainer">
        <img src={aboutImage} alt="women at computer" />
      </div>
      <div className="aboutTextContainer">
        <p>
          I first began my journey to become a developer after a friend saw me
          creating animations for my homescreen and recomended me to try out
          HTML and CSS. I set out to learn about front end development
          originally from FreeCodeCamp but later moved on to TheOdinProject
          where I learned all about the front end fundamentals. From there I
          learned React from Tyler McGinnis who is a amazing teacher and
          continues to be one of my favorite people to follow. I then continued
          to learn the mern stack from online and here we are today. I don't
          know what tomorrow holds but I know I am excited for it.
        </p>
      </div>
    </section>
  )
}

export default About
