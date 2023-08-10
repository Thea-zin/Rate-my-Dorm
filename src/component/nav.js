import React from 'react';
import './nav.css';
import logo from './photos/Logo.png';
import home from './photos/home.png';
import leaderborad from './photos/Vector.png';
import User from './photos/user.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import Quite from './photos/quite.png'

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='col-lg-5 list'>
          {/* Top div aligned to the left */}
          <ul className='d-flex justify-content-start ul-up'>
            <li>
              <a href="/home" className='logo-img'> <img src={logo} alt='logo'/></a>
            </li>
            <li className='list-li list-home'>
              <a href="/home"> <img src={home} alt='home'/></a>
              <a href='/home' className='home'>Home</a>
            </li>
            <li className='list-li list-leader  list-home'>
              <a href="/leaderborad"> <img src={leaderborad} alt='leaderborad'/></a>
              <a href='/leaderborad' className='home '>leaderborad</a>
            </li>
          </ul>
        </div>
        <div className='col-lg-6 mr-auto d-flex justify-content-end ul-down'>
          {/* Bottom div aligned to the right */}
          <a href='/Upload'  type="button" class="btn btn-outline-secondary btn-share">+ Share Your Dorm</a>
          <a href="/profile" className='text-me'> <img src={User} alt='home'/>Me</a>
          <a href="/#" className='quite'> <img src={Quite} alt='quite' /> </a>
        </div>
      </nav>
    </div>
  );
};

export default Home;
