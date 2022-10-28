import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import {history} from './helpers/history';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import './index.scss';
import './assets/style/normalized.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/profile' element={<User />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);