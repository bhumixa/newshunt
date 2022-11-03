import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link, Outlet } from 'react-router-dom';

export class NavBar extends Component {
    // static propTypes = {

    // }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <a className="navbar-brand flex" href="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} className="home-logo" alt="" />
                        <h3 >Newshunt</h3>
                    </a>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar
