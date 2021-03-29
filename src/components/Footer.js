import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
 <footer className={"footer"}>
  <div>
    <SocialLinks styleClass={"footer-links"}/>
    <h4>&copy;
    <span>Arjun </span> {new Date().getFullYear()}, all rights reserved. Built with
      <a href="https://www.gatsbyjs.org" target="_blank" rel="nofollow noopener noreferrer"
       > Gatsby</a>

    </h4>
  </div>
 </footer>
  )
}

export default Footer
