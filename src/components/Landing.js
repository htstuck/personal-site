import React from "react"
import "../styles/landing.css"

import { FaDev, FaGithub, FaKaggle } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const Landing = () => {
    let iconSize = "40px"
  return (
    <>
      <div className="greeting">
        <h1>Hi, I'm Hudson</h1>
        <hr></hr>
      </div>
      <div className="social">
          < GrMail size={iconSize} />
          < FaGithub size={iconSize} />
          < FaDev size={iconSize} />
          < FaKaggle size={iconSize} /> 
      </div>
    </>
  )
}

export default Landing
