import './header.scss'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark" id="banner">
            <div className="container">
                {/* <!-- Brand --> */}
                <a className="navbar-brand" href="/"><span>TEST</span></a>
              
                <div className="links">
                    <ul className="navbar-nav">
                        <li className="nav-item d-none d-sm-block">
                            <a className="nav-link" href="/">Track Order&nbsp;</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><img alt="search" src={process.env.PUBLIC_URL + '/assets/icons/search.png'} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><img alt="user" src={process.env.PUBLIC_URL + '/assets/icons/user.png'} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><img alt="shopping" src={process.env.PUBLIC_URL + '/assets/icons/shopping.png'} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}