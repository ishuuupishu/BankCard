import React, { useState } from "react";

function Footer() {
    return(
        <div>
                {/* Footer */}
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
                <div className="footer-logo mb-4">
                  <a className="navbar-brand" href="index.html">
                    <span className="fa fa-cc-visa"></span> Bank Card</a>
                </div>
                <p>It is the leading financial establishment providing high-quality international banking services. Our
                  success
                  is attributed to our loyal customers. We provide reliable services for you.</p>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-5 footer-list-29 footer-2 mt-md-0 mt-5">

                <ul>
                  <h6 className="footer-title-29">Quick Links</h6>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="#blog"> Blog posts</a></li>
                  <li><a href="#pricing"> Pricing plans</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-7 col-7 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Head Office</h6>
                <p className="mb-3"> Bank Card, 343 banking lane, #2214 cravel street, NY.</p>
                <p className="mb-2"> <span className="fa fa-phone"></span> <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                <p className="mb-2"><span className="fa fa-envelope-o"></span> <a href="mailto:info@mail.com">info@mail.com</a></p>
                <p><span className="fa fa-support"></span> <a href="mailto:info@support.com">info@support.com</a></p>
              </div>
              <div className="col-lg-3 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Latest posts</h6>
                <div className="post1">
                  <a href="#url" className="post-title">7 Banking Services That Can Save Retirees Money</a>
                  <p className="small">September 28, 2020</p>
                </div>
                <div className="post1 mt-4">
                  <a href="#url" className="post-title">Stocks Could Surge 10% between Now And 2020</a>
                  <p className="small">September 28, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <section className="w3l-copyright text-center">
          <div className="container">
            <p className="copy-footer-29">© 2020 Bank Cards. All rights reserved.</p>
          </div>

          {/* Move top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="movetop" title="Go to top">
            &#10548;
          </button>
        </section>
        {/* //Move top */}
      </section>
      {/* //Footer */}
        </div>
    )
}

export default Footer