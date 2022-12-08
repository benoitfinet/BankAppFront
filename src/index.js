import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import './index.scss';
import './assets/style/normalized.scss';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Provider} from 'react-redux';
import store from './utils/store'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/profile' element={<User />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  </React.StrictMode>
);