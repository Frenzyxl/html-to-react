import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
        <div className="top-search-area">
        <div className="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                     
                        <button type="button" className="btn close-btn" data-dismiss="modal"><i className="ti-close"></i></button>
                    
                        <form action="index.html" method="post">
                            <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..."/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <header className="header-area">
      
        <div className="main-header-area">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                   
                    <nav className="classy-navbar justify-content-between" id="alimeNav">

                      
                        <a className="nav-brand" href="./index.html"><img src="assets/img/core-img/logo.png" alt=""/></a>

                       
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                      
                        <div className="classy-menu">
                            
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
                         
                            <div className="classynav">
                                <ul id="nav">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    
                                    
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./index.html">- Home</a></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><a href="./gallery.html">- Gallery</a></li>
                                            <li><a href="./blog.html">- Blog</a></li>
                                            <li><a href="./single-blog.html">- Blog Details</a></li>
                                            <li><a href="./contact.html">- Contact</a></li>
                                            <li><a href="#">- Dropdown</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">- Dropdown Item</a></li>
                                                    <li><a href="#">- Dropdown Item</a></li>
                                                    <li><a href="#">- Dropdown Item</a></li>
                                                    <li><a href="#">- Dropdown Item</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><a href="./gallery.html">Gallery</a></li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>

                              
                                <div className="search-icon" data-toggle="modal" data-target="#searchModal"><i className="ti-search"></i></div>
                            </div>
                        
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </Fragment>
  )
}

export default Header
