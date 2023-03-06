import './contact.css'
// import Linkedin from '../../img/linkedin.svg'
// import Github from '../../img/github.svg'
import { ReactComponent as Linkedin } from '../../img/linkedin.svg';
import { ReactComponent as Github } from '../../img/github.svg';

import { useRef, useState, useContext } from 'react' // accessing DOM nodes or elements directly
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const linkedinStyle = {
        fill: darkMode ? "#fff" : "#0077B5",
    };

    const githubStyle = {
        fill: darkMode ? "#fff" : "#333",
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_tegzsew",
                "template_n3za21b",
                form.current,
                "CEudzD1dkJcP7gogx")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-miniwrapper">
                    <h1 className="c-title">Contact me</h1>

                    <p className="c-p">
                        <b>Get in touch. </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate quas facilis illo quam eaque doloremque hic et quos, inventore sunt harum officiis omnis animi eos. Eveniet libero quibusdam harum?
                    </p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input style={{
                        backgroundColor: darkMode ? "#333" : "white",
                        color: darkMode ? "#333" : "white"
                    }} type="text" placeholder="Name" name="user_name" />
                    <input style={{
                        backgroundColor: darkMode ? "#333" : "white",
                        color: darkMode ? "#333" : "white"
                    }} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{
                        backgroundColor: darkMode ? "#333" : "white",
                        color: darkMode ? "#333" : "white"
                    }} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{
                        backgroundColor: darkMode ? "#333" : "white",
                        color: darkMode ? "#333" : "white"
                    }} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thank you for your email"}
                </form>
                <div className="social-wrapper">
                    <div className="img-wrapper">
                        <a href="https://www.linkedin.com/in/daniek-schuiling/" target="_blank" rel="noreferrer">
                            <Linkedin className="contact-img" style={linkedinStyle} />
                        </a>
                        <a href="https://github.com/daniekio" target="_blank" rel="noreferrer">
                            <Github className="contact-img" style={githubStyle} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact
