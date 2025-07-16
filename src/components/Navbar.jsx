import { Link } from 'react-router-dom'

function Navbar() {
  return (   
    <>
   
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="display-6 text-primary m-0"><i className="fas fa-envelope me-3"></i>Mailler</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/todo" className="nav-item nav-link">Todo</Link>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="pricing.html" className="dropdown-item">Pricing</a>
                            <a href="blog.html" className="dropdown-item">Blog</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                </div>
                <a href="#" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</a>
                <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4">Sign Up</a>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar