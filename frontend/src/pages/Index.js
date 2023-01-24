import React, { Fragment } from 'react'

const HomePage = () => {
  return (
    <Fragment>
      
   
    <section className="welcome-area">
        <div className="welcome-slides owl-carousel">
         
            <div className="single-welcome-slide bg-img bg-overlay" style={{backgroundImage: "url(assets/img/bg-img/1.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                       
                        <div className="col-12 col-lg-8 col-xl-6">
                            <div className="welcome-text">
                                <h2 data-animation="bounceInDown" data-delay="900ms">Hello <br/>I'm Chris</h2>
                                <p data-animation="bounceInDown" data-delay="500ms">I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                                <div className="hero-btn-group" data-animation="bounceInDown" data-delay="100ms">
                                    <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
                                    <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="single-welcome-slide bg-img bg-overlay" style={{backgroundImage: "url(assets/img/bg-img/2.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                       
                        <div className="col-12 col-lg-8 col-xl-6">
                            <div className="welcome-text">
                                <h2 data-animation="bounceInUp" data-delay="100ms">Hello <br/>I'm Alime</h2>
                                <p data-animation="bounceInUp" data-delay="500ms">I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>
                                <div className="hero-btn-group" data-animation="bounceInUp" data-delay="900ms">
                                    <a href="#" className="btn alime-btn mb-3 mb-sm-0 mr-4">Get a Quote</a>
                                    <a className="hero-mail-contact" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <div className="alime-portfolio-area section-padding-80 clearfix">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
               
                    <div className="alime-projects-menu">
                        <div className="portfolio-menu text-center">
                            <button className="btn active" data-filter="*">All</button>
                            <button className="btn" data-filter=".human">Human</button>
                            <button className="btn" data-filter=".nature">Nature</button>
                            <button className="btn" data-filter=".country">Country</button>
                            <button className="btn" data-filter=".video">Video</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row alime-portfolio">
               
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="100ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/3.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/3.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

             
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item video human mb-30 wow fadeInUp" data-wow-delay="300ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/4.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/4.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

         
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item country mb-30 wow fadeInUp" data-wow-delay="500ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/5.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/5.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item human mb-30 wow fadeInUp" data-wow-delay="700ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/6.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/6.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="100ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/7.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/7.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item video country mb-30 wow fadeInUp" data-wow-delay="300ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/8.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/8.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item human mb-30 wow fadeInUp" data-wow-delay="500ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/10.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/10.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="700ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/9.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/9.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

              
                <div className="col-12 col-sm-6 col-lg-6 single_gallery_item video country mb-30 wow fadeInUp" data-wow-delay="100ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/36.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/36.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item human mb-30 wow fadeInUp" data-wow-delay="300ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/37.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/37.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3 single_gallery_item country mb-30 wow fadeInUp" data-wow-delay="500ms">
                    <div className="single-portfolio-content">
                        <img src="assets/img/bg-img/5.jpg" alt=""/>
                        <div className="hover-content">
                            <a href="assets/img/bg-img/5.jpg" className="portfolio-img">+</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="700ms">
                    <a href="#" className="btn alime-btn btn-2 mt-15">View More</a>
                </div>
            </div>
        </div>
    </div>
   
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
    
   
   
     <script src="assets/js/jquery.min.js"></script>

     <script src="assets/js/popper.min.js"></script>
  
     <script src="assets/js/bootstrap.min.js"></script>
  
     <script src="assets/js/alime.bundle.js"></script>
  
     <script src="assets/js/default-assets/active.js"></script>

  
    </Fragment>
  )
}

export default HomePage
