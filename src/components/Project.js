import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithub, FaShareSquare } from "react-icons/fa"

const Project = ({ desription, title, github, stack, url, image, index }) => {
  return (
    <article className={"project"}>
      <Image fluid={image.childImageSharp.fluid} className={"project-img"}></Image>
      <div className="project-info">
        <span className={"project-number"}>0{index + 1}.</span>
        <h3>{title}</h3>
        <p className={"project-desc"}>
          {desription}
        </p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target={"_blank"}>
            <FaGithub className={"project-icon"}/>
          </a>
          <a href={url} target={"_blank"}>
            <FaShareSquare className={"project-icon"}/>
          </a>
        </div>
      </div>

    </article>
  )
}

Project.propTypes = {}

export default Project
