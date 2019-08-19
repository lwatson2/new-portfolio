import React from "react"
import "./landingPage.css"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "morgan-harper-nichols-OMXPrCAhxrE-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="landingPageWrapper"
          fluid={imageData}
        >
          <div className="landingPageContent">
            <h2 className="landingPageName">Logan Watson</h2>
            <hr className="line" />
            <div className="landingPageBtnWrapper">
              <Link to="#about">
                <button className="landingPageBtn">About</button>
              </Link>
              <Link to="#project">
                <button className="landingPageBtn">Projects</button>
              </Link>
              <Link to="#contact">
                <button className="landingPageBtn">Contact</button>
              </Link>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
  // return (
  //   <div className="landingPageWrapper">
  //     {/*  */}
  //   </div>
  // )
)

export default LandingPage
