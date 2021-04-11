import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import resume from "../assets/resume/Deedy_CV.pdf"

const About = ({data:{about:{nodes},},}) => {

  const {info,title,stack,image}=nodes[0]
  return (
    <Layout>
      <SEO title={"About"} description={"about arjun gautam"}/>
      <div className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid}
                 className={"about-img"}/>

          <article className={"about-text"}>

          <Title title={title}/>
          <p>{info}</p>

            <div className="about-stack">
              {stack.map((item)=>{
                return <span key={item.id}>{item.title}</span>
              })}

            </div>
            <br/>

            <button  className={"btn-about"} >
            <a href="https://arjunresume.netlify.com" target="_blank"
            > Resume Link</a>
            </button>

            <br/>
            <br/>

            <button  className={"btn-about"} >
              <a style={{color:"white"}} href={resume} download={"resume.pdf"}>
                Download Resume
            </a></button>

          </article>

        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
