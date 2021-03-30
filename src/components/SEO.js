import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteTitle: title
        siteUrl
        twitterUsername
      }
    }
  }
`


const SEO = ({ title, description = "This is out home page" }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, siteUrl, image, twitterUsername } =
    site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name={"description"} content={description || siteDesc} />
      <meta name={"image"} content={image}/>
    </Helmet>
  )
}

export default SEO