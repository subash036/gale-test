import './footer.scss'
export default function Footer() {

    return (<footer className="section footer-classic context-dark bg-image">
        <div className="container">
            <div className="row row-30">
                <div className="col-sm-9 col-md-9 d-none d-sm-block">
                    <div className="row other-links">
                        <div className="row col-sm-3 col-md-3 col-xl-3">
                            <h5 className="text-left row">Links</h5>
                            <ul className="nav-list">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contacts</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="row col-sm-3 col-md-3 col-xl-3">
                            <h5 className="text-left row">Links</h5>
                            <ul className="nav-list">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contacts</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="row col-sm-3 col-md-3 col-xl-3">
                            <h5 className="text-left row">Links</h5>
                            <ul className="nav-list">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contacts</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="row col-sm-3 col-md-3 col-xl-3">
                            <h5 className="text-left row">Links</h5>
                            <ul className="nav-list">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contacts</a></li>
                                <li><a href="/">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row col-sm-3 col-sm-3 col-md-3 d-none d-sm-block">
                    <div className="contact-details">
                        <h5>Call US</h5>
                        <div className="row time-row">
                            <div className="time">
                                <div className="">Monday - Friday</div>
                                <div className="">8am to 9pm CST</div>
                            </div>
                            <div className="time">
                                <div className="">Saturday & Sunday</div>
                                <div className="">10am to 6pm CST</div>
                            </div>
                        </div>
                        <div className="phone"><a href="tel:1800-123-1234"><img alt="Phone" src={process.env.PUBLIC_URL + '/assets/icons/phone.png'} />1800-123-1234</a></div>
                        <hr />
                        <div className="email"><a href="mailto:support.us@test.com">support.us@test.com</a></div>
                    </div>
                </div>
                <div className="bottom-links">
                    <hr className="d-none d-sm-block" />
                    <ul >
                        <li>
                            <a href="/">Link 1</a>
                        </li>
                        <li>
                            <a href="/">Link 2</a>
                        </li>
                        <li>
                            <a href="/">Link 3</a>
                        </li>
                    </ul>
                    <p className="text-right">This is other content</p>
                </div>
            </div>
        </div>
    </footer>
    )
}