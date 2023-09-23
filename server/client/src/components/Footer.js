import React from 'react';
import {AiFillFacebook,AiFillTwitterCircle,AiFillGoogleCircle,AiFillInstagram,AiFillLinkedin,AiFillGithub,
    AiFillHome,AiFillPhone,AiFillPrinter} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
<footer className="text-center text-lg-start bg-white text-muted mt-5">
  <section className="d-flex bg-dark justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span className='fs-4 link-light'>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 fs-4 color2">
        <AiFillFacebook />
      </a>
      <a href="" className="me-4 fs-4 link-light">
        <AiFillTwitterCircle />
      </a>
      <a href="" className="me-4 fs-4 color2">
        <AiFillGoogleCircle />
      </a>
      <a href="" className="me-4 fs-4 link-light">
        <AiFillInstagram />
      </a>
      <a href="" className="me-4 fs-4 color2">
        <AiFillLinkedin />
      </a>
      <a href="" className="me-4 fs-4 link-light">
        <AiFillGithub />
      </a>
    </div>
  </section>
  <section className="color3 pt-1">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img src='../images/logo.png' alt='logo' style={{height : "100px"}} className='mb-3' />
          <p>
            This is only for you by ApnaPizza.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold color2 fs-4 mb-4">
            Pizzas
          </h6>
          <p>
            <a href="#!" className="text-reset">Small</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Medium</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Large</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase color2 fs-4 fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 fs-4 color2">Contact</h6>
          <p><AiFillHome /> &nbsp; New Delhi, 110045, Palam Colony</p>
          <p>
            <FaEnvelope /> &nbsp;
            apnapizza@gmail.com
          </p>
          <p><AiFillPhone /> + 01 234 567 88</p>
          <p><AiFillPrinter /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4">
    © 2021 Copyright : &nbsp;
    <a className="text-reset fw-bold" href="https://apnapizza.com/">ApnaPizza.com</a>
  </div>
</footer>
    </>
  )
}

export default Footer
