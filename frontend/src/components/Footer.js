import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>

<section className="follow-area clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <h2>Follow Instagram</h2>
                        <p>@Alime_photographer</p>
                    </div>
                </div>
            </div>
        </div>

    
        <div className="instragram-feed-area owl-carousel">
          
            <div className="single-instagram-item">
                <img src="assets/img/bg-img/11.jpg" alt=""/>
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
          
            <div className="single-instagram-item">
                <img src="assets/assets/img/bg-img/12.jpg" alt=""/>
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
            
            <div className="single-instagram-item">
                <img src="assets/assets/img/bg-img/13.jpg" alt=""/>
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
          
            <div className="single-instagram-item">
                <img src="assets/assets/img/bg-img/14.jpg" alt=""/>
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
           
            <div className="single-instagram-item">
                <img src="assets/assets/img/bg-img/15.jpg" alt=""/>
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
           
            <div className="single-instagram-item">
                <img src="assets/assets/img/bg-img/16.jpg" alt="" />
                <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
                    <a href="#">
                        <i className="ti-instagram" aria-hidden="true"></i>
                        <span>Alime_photographer</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

         <footer className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content d-flex align-items-center justify-content-between">
                       
                        <div className="copywrite-text">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                       
                        <div className="footer-logo">
                            <a href="#"><img src="assets/assets/img/core-img/logo2.png" alt="" /></a>
                        </div>
                       
                        <div className="social-info">
                            <a href="#"><i className="ti-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="ti-twitter-alt" aria-hidden="true"></i></a>
                            <a href="#"><i className="ti-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="ti-pinterest" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </Fragment>
  )
}

export default Footer
