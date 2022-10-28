import logo from '../../assets/argentBankLogo.png'
import './header.scss'
import { Link } from 'react-router-dom'

/**
 * an element Header HTML
 * with connected or not change visual
 * @component
 */
function Header() {

    return (
        <header>
            <nav className="nav">
                <Link to='/' className="nav__logo">
                    <img
                        className="nav__logo--image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to='/login' className="nav__item">
                        <i className="fa fa-2x fa-user-circle"></i>
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header