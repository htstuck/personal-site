import React from "react"
import "../styles/landing.css"
import { FaLinkedin, FaDev, FaGithub, FaKaggle } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { AiFillProfile } from "react-icons/ai"
import Hudson from "../images/cartoon-hudson.png"

const Landing = () => {
  let iconSize = "40px"
  return (
    <>
      <div className="greeting">
          <img src={Hudson} alt="Hudson Stuck" width="150px"/>
        <h1>Hi, I'm Hudson.</h1>
      </div>
      <p>
        I'm a recent college graduate from Cal Poly interested in deep learning,
        natural language processing, and iOS app development. I also enjoy
        self-teaching and am currently learning about full-stack web
        development.
      </p>
      <hr></hr>
      <div className="social">
        <a href="mailto: htstuck@gmail.com">
          <GrMail size={iconSize} />
        </a>
        <a href="https://linkedin.com/in/hudsonstuck">
          <FaLinkedin size={iconSize} />
        </a>
        <a href="https://github.com/htstuck">
          <FaGithub size={iconSize} />
        </a>
        <a href="https://dev.to/htstuck">
          <FaDev size={iconSize} />
        </a>
        <a href="https://kaggle.com/hudsonstuck">
          <FaKaggle size={iconSize} />
        </a>
      </div>
    </>
  )
}

export default Landing
