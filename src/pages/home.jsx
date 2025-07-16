import { useState } from 'react'
function Home() {
  return (
    <>
    <div className="container-fluid header position-relative overflow-hidden p-0">
        <div className="hero-header overflow-hidden px-5">
            <div className="rotate-img">
                <img src="src/img/sty-1.png" className="img-fluid w-100" alt=""/>
                <div className="rotate-sty-2"></div>
            </div>
            <div className="row gy-5 align-items-center">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <h1 className="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">Turn Emails into Revenue</h1>
                    <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.</p>
                    <a href="#" className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.7s">Get Started</a>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                    <img src="src/img/hero-img-1.png" className="img-fluid w-100 h-100" alt=""/>
                </div>
            </div>
        </div>
    </div> 
    </> 
  );
}

export default Home;