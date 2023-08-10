import React from 'react'
import './footer.css'
import Loop from './loop_text'
function footer() {
  return (
    <div >
       <div class="footer  px-4">
            <div class="row gx-5 donate ">
                <div class="col">
                    <div class="d-flex justify-content-center ">
                        <div className='footer-bold'>
                             <p>Build A Clean Comunity. </p>
                             <h3>Want To donates?</h3>
                        </div>
                        <div className='donate-button'>
                            <button type="button" class="btn btn-outline-secondary"> Denate</button>
                        </div>
                        
                    </div>
                </div>

                <div class="col footer-contact">
                    <div class="row">
                        <div className='col social-contact'>
                            <ul>
                                <li>
                                    <a href='/#' className='list-style'>Reach Us</a>
                                </li>
                                <li>
                                    <a href='/#'  className='list-style'>Facebook</a>
                                </li>
                                <li>
                                    <a href='/#'  className='list-style'>Email</a>
                                </li>
                                <li>
                                    <a href='/#'  className='list-style'>LinkedIn</a>
                                </li>
                                <li>
                                    <a href='/#'  className='list-style'>Slack</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col social-contact '>
                            <ul>
                                    <li>
                                        <a href='/#'  className='list-style'>FAQ</a>
                                    </li>
                                    <li>
                                        <a href='/#'  className='list-style'>Terms & Conditions. </a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer