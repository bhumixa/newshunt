import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom';

export class NavBar extends Component {
    // static propTypes = {

    // }
    render() {
        return (
            <>
                <nav className="navbar navbar-dark  navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand flex" to="/">
                            <img src={process.env.PUBLIC_URL + '/logo.png'} className="home-logo" alt="" />
                            <h3 className=''>Newshunt</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/home">Home</Link> </li>
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>                                
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item"> <Link  className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default NavBar
