import "./about.css"
import meabout from "../../img/meabout.jpg"
import { ThemeContext } from '../../context';
import { useContext } from 'react'

const About = () => {
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-bg" style={{
          backgroundColor: darkMode ? "#d1d1d1" : "#333",
        }}></div>
                <div className="a-card">
                    <img src={meabout}
                        alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eos!
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
            </div>
        </div>
    );
};

export default About;
