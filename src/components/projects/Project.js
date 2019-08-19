import React, { useRef } from "react"
import useOnScreen from "../useOnScreen"
import BuddyFinder from "../../images/buddyfinder_2_400x600.png"
import ReactChat from "../../images/React-chat_350x525.png"
import ReactPokedex from "../../images/React-Pokedex_350x525.png"
import ImageGallery from "../../images/Simple-image-gallery_350x525.png"
import "./Project.css"

const Project = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, {
    threshold: 0,
  })
  return (
    <section
      id="project"
      ref={ref}
      style={{ opacity: onScreen ? 1 : 0 }}
      className={
        onScreen ? "project-container  fadeIn" : "project-container fadeOut"
      }
    >
      <div className="card">
        <img src={BuddyFinder} alt="Buddy Finder project" />
        <div className="card-content">
          <svg className="card-svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
            />
            <path
              className="card-line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              stroke-width="3"
              fill="transparent"
            />
          </svg>
          <div className="card-text">
            <h2 className="card-title">BuddyFinder</h2>
            <span className="card-desc">
              Buddy finder is a site where users can find find and join groups
              to play video games with. Built with React and Node.
            </span>
            <button className="card-btn">
              <a
                className="projectLink"
                href="https://buddyfindersite.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={ReactChat} alt="React chat project image" />
        <div className="card-content">
          <svg className="card-svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
            />
            <path
              className="card-line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              stroke-width="3"
              fill="transparent"
            />
          </svg>
          <div className="card-text">
            <h2 className="card-title">React Chat</h2>
            <span className="card-desc">
              ReactChat is a chat application where users can join various rooms
              similiar to "Discord". Built with React and Node.
            </span>
            <button className="card-btn">
              {" "}
              <a
                className="projectLink"
                href="https://floating-woodland-27702.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={ImageGallery} alt="Image Gallery project picture" />
        <div className="card-content">
          <svg className="card-svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
            />
            <path
              className="card-line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              stroke-width="3"
              fill="transparent"
            />
          </svg>
          <div className="card-text">
            <h2 className="card-title">Imgae Gallery</h2>
            <span className="card-desc">
              Image gallery is a site built for a family member to display their
              photography. Built with React and Node.
            </span>
            <button className="card-btn">
              <a
                className="projectLink"
                href="http://www.danielleleephotography.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={ReactPokedex} alt="Buddy Finder project" />
        <div className="card-content">
          <svg className="card-svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
            />
            <path
              className="card-line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              stroke-width="3"
              fill="transparent"
            />
          </svg>
          <div className="card-text">
            <h2 className="card-title">React Pokedex</h2>
            <span className="card-desc">
              React pokedex is a site where users can view details of various
              pokemon. Built with React.
            </span>
            <button className="card-btn">
              <a
                className="projectLink"
                href="https://lwatson2.github.io/react-pokedex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
