import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm a very ambitious Frontend Developer looking for a role in a established IT company with opportunity to work with latest technologies on challenging and diverse projects. I'm very passionate to work and gain experience and grow as a developer and provide my best for the benefit of the company.
          </p>
          <p align="LEFT">
          I'm a curious person in nature, hence, I thrive to learn new things. I'm confident and have excellent communication skills. As being a creative mind, I love to fonder around with UI-UX development and present my creativity in my along with my development skills.
          </p>
          <div  ><button className="flat-button"
            
          onClick={() => window.open("https://drive.google.com/file/d/1jVvnMCpW8r4kOL4kWnEZxzP9CkyI_zeO/view?usp=sharing")}
          >DOWNLOAD RESUME</button></div>
        </div>
        

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
