import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    return(
       
         <div>
            <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke px-0">
            <h1>
              <a className="navbar-brand" href="index.html">
                <span className="fa fa-cc-visa"></span> Bank Cards
              </a>
            </h1>
      
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item @@home__active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item @@services__active">
                  <a className="nav-link" href="services.html">Services</a>
                </li>
                <li className="nav-item @@contact__active">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
               
                <div className="search mr-3">
                  <input className="search_box" type="checkbox" id="search_box" />
                  <label className="fa fa-search" htmlFor="search_box"></label>
                  <div className="search_form">
                    <form action="error.html" method="GET">
                      <input type="text" placeholder="Search" /><input type="submit" value="search" />
                    </form>
                  </div>
                </div>
                
              </ul>
            </div>
            
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
         
          </nav>
        </div>
      </header>
         </div>
       
        
      
           
      
   
        
    )
}

export default Header