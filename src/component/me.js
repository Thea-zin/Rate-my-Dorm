import React from 'react'
import Nav from './nav'
import './me.css'
import myphoto from './photos/SotheaBan.jpg'
import Footer from './footer'

export const me = () => {
  return (
    <div>
        <Nav></Nav>
        <div className='profile d-flex flex-column align-items-center justify-content-center'>
            
            <div className='profile-board row'>
                    <div className='profile-pic col'>
                        <img src={myphoto} alt='sotheaBan' className='square-profile-pic'/>
                    </div>
                    <div className='profile-info col'>
                        <div class="container">
                            <div class="row">
                                <div class="col">Name : Test User</div>
                                <div class="col">Batch: 9</div>
                                <div class="w-100"></div>
                                <div class="col">Borey: V28</div>
                                <div class="col">Room: 08</div>
                            </div>
                            <div className='btn btn-edit'>
                            <button type="button" class="btn btn-outline-secondary"> Edit your profile</button>  
                            </div>
                        </div>
                        
                        
                    </div>
            </div>
        </div>
        <div >
          <Footer></Footer>
        </div>

    </div>
  )
}
export default me;
