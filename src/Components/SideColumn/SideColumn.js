import React from 'react';
import { Images } from '../Images/Images';
import './SideColumn.css';

const SideColumn = () => {
    return(
        <React.Fragment>
            <div id="submenu" className="rounded shadow-sm py-3">
                <h4 className="text-center">SUBMENU</h4>
                <ul className="nav flex-column nav-pills">
                    <li  className="nav-item">
                        <a className="nav-link font-weight-bold side " href="" id="ultricies-section">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold active side" href="" id="BIBENDUM-section">EXAMPLES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold side" href="" id="MAGNA-section">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-weight-bold side" href="" id="MAGNA-section">ABOUT   </a>
                    </li>
                </ul>
            </div> 

        <div className="card mt-3">
            <img className="card-img-top" src={Images[1].cardbg} alt="cardimg" />
            <div className="profile">
                <img className="img-fluid rounded-circle" src={Images[2].img} alt="" />
            </div> 
            <div className="card-body">
                <div className="info">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text pl-3">Nomen Nescio</p>
                </div>
                <div className="info">
                        <h5 className="card-title">Email</h5>
                        <p className="card-text pl-3">nomen@example.com</p>
                </div>
                <div className="info">
                        <h5 className="card-title">Phone</h5>
                        <p className="card-text pl-3">+852 555 555</p>
                </div>                            
            </div>
        </div>

        <div id="cardForm" class="card"> 
            <h4 class="text-center pt-3">Send me a message</h4>
            <div class="card-body card-form">
                <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form>                                
            </div>                
        </div>

        <div id="map" class="card">
            <h4 class="text-center px-3 py-3">Or meet me at Office</h4>
            <img class="card-img-top" src={Images[11].map} alt="cardimg" />
            <div class="card-body">
                <div class="address">
                    <p class="card-text">ONE MIDTOWN</p>
                    <p class="card-text">11 Hoi Shing Rd</p>
                    <p class="card-text">Tsuen Wan</p>
                </div>                            
            </div>                
        </div>






    </React.Fragment>
    );
}

export default SideColumn;