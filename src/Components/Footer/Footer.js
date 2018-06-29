import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <React.Fragment>
        <footer className="mt-5">
        <div className="container  d-flex justify-content-center">
            <div className='row'>
            <div className="col-lg-4 my-5">
                    <h5>About us</h5>
                    <ul>
                        <li>
                            <a href="">Praesent sit amet mi vitae</a>
                        </li>
                        <li>
                            <a href="">Sit amet</a>
                        </li>
                        <li>
                            <a href="">Amet mi vitae</a>
                        </li>
                        <li>
                            <a href="">Praesent sit amet mi vitae</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 my-5">
                    <h5 className="text-center text-white">Legal</h5>
                    <ul>
                        <li>
                            <a href="">Praesent sit amet mi vitae</a>
                        </li>
                        <li>
                            <a href="">Sit amet</a>
                        </li>
                        <li>
                            <a href="">Amet mi vitae</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 my-5">
                    <h5 className="text-center text-white">Developers</h5>
                    <ul>
                        <li>
                            <a href="">Praesent sit amet mi vitae</a>
                        </li>
                        <li>
                            <a href="">Sit amet</a>
                        </li>
                        <li>
                            <a href="">Amet mi vitae</a>
                        </li>
                        <li>
                            <a href="">Praesent sit amet mi vitae</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
        </React.Fragment>
    );
}

export default Footer;