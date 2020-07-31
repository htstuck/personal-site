import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/global.css"
import Favicon from "../images/favicon.ico"
import Landing from "../components/Landing"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  return (
    <div className="application">
      <Helmet>
        <title>Hudson Stuck</title>
        <link rel="icon" type="image/png" href={Favicon} />
      </Helmet>
     < Landing />  
      {/* <div className="section">
        <h1>Hi, I'm Hudson</h1>
        <hr></hr>
        <div className="flex-container">
          {/* <div className="bio">
            <p>
              Welcome! My name is Hudson Stuck and this is my website. I'm an
              aspiring data scientist and/or software engineer interested in
              deep learning, natural language processing, and iOS app
              development. I also enjoy self-teaching and am currently learning
              about full-stack web development.
              <br />
              <br />
              Outside of computer science, I enjoy a wide range of outdoor
              activities including ultimate frisbee, hiking, paddleboarding, and
              running. When I'm inside I like to read and I'm also an avid home
              cook!
            </p>
          </div> */}
        {/* </div>
      </div> */}
      {/* <footer>
        <Link to="/aboutSite/">About this site</Link>
      </footer> */}
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hudson.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Home
