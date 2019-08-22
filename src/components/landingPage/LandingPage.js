import React from "react"
import "./landingPage.css"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "joshua-aragon-FGXqbqbGt5o-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
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
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="landingPageContent">
            <h2 className="landingPageName">Logan Watson</h2>
            <hr className="line" />
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
