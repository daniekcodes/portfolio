import "./about.css"
import meabout from "../../img/meabout.png"
import { ThemeContext } from '../../context';
import { useContext } from 'react'

const About = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-bg" style={{
                    backgroundColor: darkMode ? "white" : "#333",
                }}></div>
                <div className="a-card">
                    <img src={meabout}
                        alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                
                <p className="a-desc">
                I am a motivated and enthusiastic web development student at DCI. I have a passion for creating innovative and user-friendly websites and a strong background in information technology, customer service, and sales. I am learning various technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB.
                </p>
            </div>
        </div>
    );
};

export default About;
