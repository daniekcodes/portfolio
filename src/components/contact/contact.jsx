import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contact me</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone}
                                    alt=""
                                    className="c-icon"/>
                                0123456789
                            </div>
                            <div className="c-info-item">
                                <img src={Email}
                                    alt=""
                                    className="c-icon"/>
                                info@nl.nl
                            </div>
                            <div className="c-info-item">
                                <img src={Address}
                                    alt=""
                                    className="c-icon"/>
                                Musterstr 1, 12345 Musterstadt
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">Get in touch</p>
                        <form>
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Subject" name="user_subject"/>
                            <input type="text" placeholder="Email" name="email"/>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
