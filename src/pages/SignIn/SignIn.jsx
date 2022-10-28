import './signIn.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function SignIn() {

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="signIn__content">
                    <i className="fa fa-user-circle signIn__icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input__wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input__wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input__remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <Link to='/profile'>
                            <button className="signIn__button">Sign In</button>
                        </Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SignIn;