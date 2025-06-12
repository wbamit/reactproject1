import { useState } from 'react'
function Home() {
  return (
    <body>
        {/*<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>*/}
        


         <div class="container-fluid header position-relative overflow-hidden p-0">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="display-6 text-primary m-0"><i class="fas fa-envelope me-3"></i>Mailler</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="pricing.html" class="dropdown-item">Pricing</a>
                                <a href="blog.html" class="dropdown-item">Blog</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="#" class="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</a>
                    <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4">Sign Up</a>
                </div>
            </nav>


            <div class="hero-header overflow-hidden px-5">
                <div class="rotate-img">
                    <img src="img/sty-1.png" class="img-fluid w-100" alt=""/>
                    <div class="rotate-sty-2"></div>
                </div>
                <div class="row gy-5 align-items-center">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <h1 class="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">Turn Emails into Revenue</h1>
                        <p class="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</p>
                        <a href="#" class="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.7s">Get Started</a>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <img src="img/hero-img-1.png" class="img-fluid w-100 h-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>


      </body>
  
  );
}

export default Home;