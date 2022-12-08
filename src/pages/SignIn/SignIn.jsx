import './signIn.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as connectionActions from '../../features/connection';
import { axiosToken, axiosProfile } from '../../utils/callingApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function SignIn() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    let navigate = useNavigate()
    const stateReduxToken = useSelector((state) => state.connection.token)

    async function getUserAxios() {
        const axios = await axiosProfile(stateReduxToken)
        dispatch(connectionActions.getUser({ firstName: axios.firstName, lastName: axios.lastName }))
    }

    async function submit() {
        const responseAxios = await axiosToken({ email, password })
        if (responseAxios) {
            dispatch(connectionActions.getToken({ token: responseAxios, email: email }))
        }
    }

    useEffect(() => {
        if (stateReduxToken) {
            getUserAxios()
            navigate('/profile')
        }
    }, [stateReduxToken])

    return (
        <div>
            <main className="main bg-dark">
                <section className="signIn__content">
                    <i className="fa fa-user-circle signIn__icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input__wrapper">
                            <label htmlFor="email">Username</label>
                            <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input__wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="button" className="signIn__button" onClick={() => submit()}>Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SignIn;