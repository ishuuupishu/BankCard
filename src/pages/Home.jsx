import React from "react";

function Home() {
  return (
    <div>
      
      {/* <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke px-0">
            <h1>
              {" "}
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
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item @@about__active">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item @@services__active">
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item @@contact__active">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
               
                <div className="search mr-3">
                  <input className="search_box" type="checkbox" id="search_box" />
                  <label className="fa fa-search" htmlFor="search_box"></label>
                  <div className="search_form">
                    <form action="error.html" method="GET">
                      <input type="text" placeholder="Search" />
                      <input type="submit" value="search" />
                    </form>
                  </div>
                </div>
               
              </ul>
            </div>
          </nav>
        </div>
      </header> */}
  
      <section className="w3l-main-slider" id="home">
      <div className="companies20-content">
        <div className="owl-one owl-carousel owl-theme">
          <div className="item">
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 banner-info-bg">
                      <h5>The Britest bank card in your wallet </h5>
                      <p className="mt-md-4 mt-3">Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you</p>
                      <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> Book a card</a>
                      <a className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="about.html">Read More</a>
                    </div>
                    <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                      <img src="assets/images/card1.png" alt="img" className="img-fluid radius-image-curve" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info  banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 banner-info-bg">
                      <h5>#1 Choice for your banking needs </h5>
                      <p className="mt-md-4 mt-3">Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you</p>
                      <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> Book a card</a>
                      <a className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="about.html">Read More</a>
                    </div>
                    <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                      <img src="assets/images/card2.png" alt="img" className="img-fluid radius-image-curve" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 banner-info-bg">
                      <h5>The Britest bank card in your wallet </h5>
                      <p className="mt-md-4 mt-3">Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you</p>
                      <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> Book a card</a>
                      <a className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="about.html">Read More</a>
                    </div>
                    <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                      <img src="assets/images/card3.png" alt="img" className="img-fluid radius-image-curve" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 banner-info-bg">
                      <h5>#1 Choice for your banking needs </h5>
                      <p className="mt-md-4 mt-3">Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you</p>
                      <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> Book a card</a>
                      <a className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="about.html">Read More</a>
                    </div>
                    <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                      <img src="assets/images/card4.png" alt="img" className="img-fluid radius-image-curve" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
