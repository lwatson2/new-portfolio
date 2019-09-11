import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingPage from "../components/landingPage/LandingPage"
import Project from "../components/projects/Project"
import About from "../components/about/About"
import "../styles/index.css"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
    <Header />
    <About />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
