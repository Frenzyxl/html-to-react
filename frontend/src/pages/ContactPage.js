import React, { Fragment } from 'react'

const ContactPage = () => {
  return (
    <Fragment>
         
    <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: "url(assets/img/bg-img/38.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-content text-center">
                        <h2 className="page-title">Contact</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="index.html"><i className="icon_house_alt"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <div className="contact-area section-padding-80-50">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className="contact-title mb-30">Let’s Work <br/>Together</h2>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
              
                    <div className="contact-info mb-30">
                        <p>Email</p>
                        <a href="mailto:info.deercreative@gmail.com">info.deercreative@gmail.com</a>
                    </div>
                   
                    <div className="contact-info mb-30">
                        <p>Call Us</p>
                        <a href="#">+6511.188.888</a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    
                    <div className="contact-info mb-30">
                        <p>Visit Us</p>
                        <a href="#">60-49 Road 11378 New York</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

    <div className="map-area section-padding-0-80">
        <div className="container">
            <div id="map">
                <iframe src="https://maps.google.com/maps?q=lekki&output=embed" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    
    </Fragment>
  )
}

export default ContactPage