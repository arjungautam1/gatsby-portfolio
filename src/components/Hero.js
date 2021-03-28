import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
    {
      file(relativePath: {eq: "hero-arjun.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query)

  return (
    <header className={"hero"}>
      <div className={"section-center hero-center"}>
        <article className={"hero-info"}>
          <div>
            <div className="underline"></div>
              <h1>I'm Arjun Gautam</h1>
              <h4>Java | Full Stack Developer</h4>
              <Link to={"/contact"} className={"btn"}>
                Contact me
              </Link>
            <SocialLinks/>
            </div>

        </article>
        <Image fluid={fluid} className={"hero-img"} />
      </div>
    </header>
  )
}

export default Hero
