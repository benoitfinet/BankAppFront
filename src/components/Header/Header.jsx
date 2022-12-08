import logo from '../../assets/argentBankLogo.png'
import './header.scss'
import { Link } from 'react-router-dom'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as connectionActions from '../../features/connection';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

/**
 * an element Header HTML
 * with connected or not change visual
 * @component
 */
function Header() {

    const isConnected = useSelector((state) => state.connection.isConnected)
    const firstName = useSelector((state) => state.connection.firstName)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    function signOut() {
        dispatch(connectionActions.signOut())
        navigate('/')
    }

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
                <div>{isConnected ? (
                    <div className="nav__item">
                        <Link to='/profile' className='nav__item'>
                            <FontAwesomeIcon className="nav__item--icon fa-2x" icon={faUserCircle} />
                            <p>{firstName}</p>
                        </Link>
                        <div className='nav__item' onClick={() => signOut()}>
                            <FontAwesomeIcon className="nav__item--icon fa-2x" icon={faRightFromBracket} />
                            <p>Log Out</p>
                        </div>
                    </div>
                ) :
                    <Link to='/login' className="nav__item">
                        <FontAwesomeIcon className="nav__item--icon fa-2x" icon={faUserCircle} />
                        <p>Sign In</p>
                    </Link>
                }
                </div>
            </nav>
        </header>
    )
}

export default Header