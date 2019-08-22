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
      <div className="imageContainer">
        <img src={aboutImage} alt="women at computer" />
      </div>
      <div className="aboutTextContainer">
        <p>
          My name is Logan Watson and I'm a full stack developer who specializes
          in creating beautiful websites. I am a blogger, developer, problem
          solver, and critical thinker. Check out some of the new things I've
          been learning below!
        </p>
      </div>
    </section>
  )
}

export default About
