import React,{useState} from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {MdLocalOffer} from 'react-icons/md';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const TopBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
    <div className='bg-dark d-flex justify-content-between py-2 px-4'>
      <div className='d-flex flex-row align-items-center gap-3 col-7'>
        <MdLocalOffer className='text-warning col-1'/>
        <h6 className='text-light col-9 col-md-12 my-auto'>Free Home Delivery On Order Above 500/- Rupees</h6>
      </div>
      <div className='d-flex align-items-center'>
        <ul className='d-md-flex list-unstyled d-none my-auto'>
          <LinkContainer exact to="/" activeClassName="active">
                <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" activeClassName="active">
                <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" activeClassName="active">
                <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/policy" activeClassName="active">
                <Nav.Link>Terms And Policy</Nav.Link>
          </LinkContainer>
      </ul>
      <div className="d-flex position-relative">
        {!menu && (
          <HiMenuAlt4 fontSize={28} className='d-md-none rounded bg-warning' onClick={() => setMenu(true)}/>
        )}
        {menu && (
          <ul className='p-2 w-100 d-md-none list-unstyled d-flex flex-column justify-content-start align-items-center text-white'>
          <div>
          <li className="fs-4 text-end my-2"><AiOutlineClose className='text-warning' onClick={() => setMenu(false)} /></li>
          <LinkContainer exact to="/" activeClassName="active">
                <Nav.Link className='text-center'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" activeClassName="active">
                <Nav.Link className='text-center'>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" activeClassName="active">
                <Nav.Link className='text-center'>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/policy" activeClassName="active">
                <Nav.Link className='text-center'>Terms And Policy</Nav.Link>
          </LinkContainer>
          </div>
      </ul>
        )}
      </div>
      </div>
    </div>
    </>
  )
}

export default TopBar
