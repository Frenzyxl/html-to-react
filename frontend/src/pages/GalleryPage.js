import React, { Fragment } from 'react'

const GalleryPage = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default GalleryPage