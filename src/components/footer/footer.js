import React from "react"
import "./footer.css"
import GithubLogo from "../../assets/icons8-github.svg"
import LinkedInLogo from "../../assets/icons8-linkedin.svg"

const Footer = () => {
  return (
    <footer className="footer-container">
      <a
        href="https://github.com/lwatson2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo className="footer-link" alt="github logo" />
      </a>
      <a
        href="https://linkedin.com/in/loganawatson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogo className="footer-link" alt="linkedin logo" />
      </a>
    </footer>
  )
}

export default Footer
