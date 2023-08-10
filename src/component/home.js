import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import Nav from './nav';
import Room from './photos/room.png';
import Bed from './photos/bed.png'
import Footer from './footer'
import Post from './post'
import Loop from './loop_text'
const Home = () => {
  return (
    <div>
    
          <Nav></Nav>

      <div className='cover'>
          <div className='room d-flex justify-content-around align-items-center'>
            <img src={Room} alt='cover' />
            <h1 className='text-center ml-3'>Live</h1>
            <h1 className='text-center ml-3'>Laugh</h1>
            <h1 className='text-center ml-3'>Love</h1>
          </div>
      </div>
      <div className='image-show d-flex justify-content-center'>
        <div className='col-lg-5 list-btn '>
            <img src={Bed} alt='Bed'/>
            <button type="button" class="btn ">Compete</button>
            <img src={Bed} alt='Bed'/>
        </div>
      </div>
      <Post></Post>
      <Loop></Loop>
      <div >
          <Footer></Footer>
      </div>


    </div>
  );
};

export default Home;
