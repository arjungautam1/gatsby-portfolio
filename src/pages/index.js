import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects },
  allStrapiBlogs:{nodes:blogs}
  }=data

  return (<Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title={"Featured projects"} showLink />
    <Blogs blogs={blogs} title={"Featured Blogs"} showLink/>
  </Layout>)
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        title
        url
        desription
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: id, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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

