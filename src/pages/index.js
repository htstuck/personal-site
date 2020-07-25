import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/global.css"
import Hudson from "../images/hudson.jpeg"
import Favicon from "../images/myfavicon.ico"

const Home = ({ data }) => {
  return (
    <div className="application">
      <Helmet>
        <title>Hudson Stuck</title>
        <link rel="icon" type="image/png" href={Favicon} />
      </Helmet>
      <header>
        <h1>Hudson Stuck</h1>
        <hr />
      </header>
      <div className="section">
        <div className="flex-container">
          <img src={Hudson} height="200" width="150" alt="Hiking in Denali" />
          <div className="bio">
            {/* TODO: add inspired links to lex fridman and peter norvig (simple sites)*/}
            <p>
              Welcome! My name is Hudson Stuck and this is my website. I'm an aspiring
              data scientist and/or software engineer interested in deep
              learning, natural language processing, and iOS app development.
              I also enjoy self-teaching and am currently learning about full-stack
              web development.
              <br />
              <br />
              Outside of computer science, I enjoy a wide range of outdoor
              activities including ultimate frisbee, hiking, paddleboarding, and
              running. When I'm inside I like to read and I'm also an avid home
              cook!
            </p>
          </div>
        </div>
      </div>

      <footer>
        <Link to="/about/">About this site</Link>
      </footer>
    </div>
  )
}

export default Home
