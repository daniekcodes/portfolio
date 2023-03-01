import "./intro.css"
import me from "../../img/me.JPG"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Daniek Schuiling</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">React</div>
                            <div className="i-title-item">NodeJS</div>
                            <div className="i-title-item">MongoDB</div>
                        </div>
                    </div>
                    <div className="i-desc">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa officia deleniti laborum enim voluptas nobis est! Minima modi repellat aut. Sint quo, architecto quia cum repellendus ducimus voluptatibus consequatur.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro