import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/global.css"

export default function About() {
  return (
    <div className="application">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about">
        <p>
          This website was built using {` `}
          <a href="https://gatsbyjs.org">Gatsby</a>
          {` `} and hosted by{" "}
          <a href="https://pages.github.com">GitHub Pages</a>.
        </p>
        <p>
          If you enjoyed this website, please feel free to clone or fork the source
          code from my GitHub.
        </p>
      </div>
      <footer>
        <Link to="/">Back</Link>
      </footer>
    </div>
  )
}
