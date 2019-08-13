import React, { useRef } from "react"
import useOnScreen from "../useOnScreen"
import aboutImage from "../../images/undraw_programming_2svr.svg"
import "./About.css"

const About = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  console.log(onScreen)
  return (
    <section
      ref={ref}
      style={{ opacity: onScreen ? 1 : 0 }}
      className={onScreen ? "aboutContainer  fadeIn" : "aboutContainer fadeOut"}
    >
      <div className="imageContainer">
        <img src={aboutImage} alt="women at computer" />
      </div>
      <div className="aboutTextContainer">
        <p>
          I am a passionate web developer always looking to learn new things. I
          love constantly improving my skills and knowledge whether that be from
          improving my design skills or learning tech. Most recently I learned
          how to use gatsby and how to better use CSS grid.{" "}
        </p>
      </div>
    </section>
  )
}

export default About
