import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="index.html" className="navbar-brand">OYODO</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href=" " id="home">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=" " id="dapibus-section">DAPIBUS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=" " id="ultricies-section">ULTRICIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=" " id="bibendum-section">BIBENDUM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=" " id="magna-section">MAGNA</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
        </div>
    );
}

export default Navigation;