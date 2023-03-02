import "./intro.css"
import me from "../../img/me.png"
import { ThemeContext } from '../../context';
import { useContext } from 'react'

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, I am</h2>
          <h1 className="i-name">Daniek Schuiling</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item" style={{
                backgroundColor: darkMode ? "white" : "#333",
                color: darkMode ? "#333" : "white"

              }}>Web Developer</div>
              <div className="i-title-item" style={{
                backgroundColor: darkMode ? "white" : "#333",
                color: darkMode ? "#333" : "white"

              }}>JavaScript</div>
              <div className="i-title-item" style={{
                backgroundColor: darkMode ? "white" : "#333",
                color: darkMode ? "#333" : "white"

              }}>React</div>
              <div className="i-title-item" style={{
                backgroundColor: darkMode ? "white" : "#333",
                color: darkMode ? "#333" : "white"

              }}>NodeJS</div>
              <div className="i-title-item" style={{
                backgroundColor: darkMode ? "white" : "#333",
                color: darkMode ? "#333" : "white"

              }}>MongoDB</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa officia deleniti laborum enim voluptas nobis est! Minima modi repellat aut. Sint quo, architecto quia cum repellendus ducimus voluptatibus consequatur.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg" style={{
          backgroundColor: darkMode ? "white" : "#333",
          color: darkMode ? "#333" : "white"
        }}></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro