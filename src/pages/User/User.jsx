import './user.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { axiosPutUser } from '../../utils/callingApi';
import * as connectionActions from '../../features/connection';
import { useNavigate } from 'react-router';

function User() {

    const stateReduxFirstName = useSelector((state) => state.connection.firstName)
    const stateReduxLastName = useSelector((state) => state.connection.lastName)
    const stateReduxToken = useSelector((state) => state.connection.token)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [displayEditName, setdisplayEditName] = useState(false)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let firstNameInputContent = document.getElementById('firstName')
    let lastNameInputContent = document.getElementById('lastName')

    function notConnected() {
        navigate('/login')
    }


    function displayFormEdit() {
        setdisplayEditName(!displayEditName)
    }

    async function editUser() {
        const axios = await axiosPutUser(stateReduxToken, { firstName, lastName })
        dispatch(connectionActions.getUser({ firstName: axios.firstName, lastName: axios.lastName }))
        setdisplayEditName(!displayEditName)
    }

    if (stateReduxToken) {
        return (
            <div>
                <main className="main bg-dark">
                    <div className="header">
                        {
                            displayEditName ? (
                                <div>
                                    <h1>Welcome back</h1>
                                    <form >
                                        <div className='form-first-line'>
                                            <label htmlFor="fisrtName" className='labelChangeName'>
                                                Firstname :
                                                <input type="text" className='inputChangeName' id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                                            </label>

                                            <label htmlFor="lastName" className='labelChangeName'>
                                                Lastname :
                                                <input type="text" id="lastName" className='inputChangeName' onChange={(e) => setLastName(e.target.value)} />
                                            </label>
                                        </div>
                                        <div className='form-second-line'>
                                            <button type='button' className='buttonChangeName' onClick={firstNameInputContent === null || lastNameInputContent === null ? displayFormEdit : editUser}>
                                                Save
                                            </button>
                                            <button type='button' className='buttonChangeName' onClick={displayFormEdit}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    <h1>Welcome back<br />{stateReduxFirstName + " " + stateReduxLastName} !</h1>
                                    <button className="edit-button" onClick={() => displayFormEdit()}>Edit Name</button>
                                </div>
                            )
                        }
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account__content--wrapper">
                            <h3 className="account__title">Argent Bank Checking (x8349)</h3>
                            <p className="account__amount">$2,082.79</p>
                            <p className="account__amount--description">Available Balance</p>
                        </div>
                        <div className="account__content--wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account__content--wrapper">
                            <h3 className="account__title">Argent Bank Savings (x6712)</h3>
                            <p className="account__amount">$10,928.42</p>
                            <p className="account__amount--description">Available Balance</p>
                        </div>
                        <div className="account__content--wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account__content--wrapper">
                            <h3 className="account__title">Argent Bank Credit Card (x8349)</h3>
                            <p className="account__amount">$184.30</p>
                            <p className="account__amount--description">Current Balance</p>
                        </div>
                        <div className="account__content--wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                </main>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    You must be connected to access this page
                </p>
                <button onClick={() => notConnected()}>Go to the log in page</button>
            </div>
        )
    }
}

export default User;
