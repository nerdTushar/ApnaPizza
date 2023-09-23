import React,{useState} from 'react';
import {Nav,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../actions/userAction';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  return (
    <>
    <div className='bg-secondary-lighter fs-5 mb-5 d-flex justify-content-between py-2 px-4'>
      <div>
        <img src='../images/logo.png' alt='logo' style={{height : "100px"}} />
      </div>
      <div className='d-flex align-items-center'>
        <ul className='d-md-flex list-unstyled d-none my-auto'>
        {
            currentUser ? (<LinkContainer to='/'>
                {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                <NavDropdown title={currentUser.name} id="nav-dropdown">
                <LinkContainer to='/orders'>
                <NavDropdown.Item>Order</NavDropdown.Item>
            </LinkContainer>
            {currentUser.isAdmin === true ?
              (<LinkContainer to='/admin'>
                <NavDropdown.Item>Admin</NavDropdown.Item>
            </LinkContainer>) : null
            }
                   
        <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
      </NavDropdown>
            </LinkContainer>) : (<>
            {" "}
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer> {" "}
            </>)
          }
            
            <LinkContainer to='/cart'>
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
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
          {
            currentUser ? (<LinkContainer to='/'>
                {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                <NavDropdown title={currentUser.name} id="nav-dropdown">
                <LinkContainer to='/orders'>
                <NavDropdown.Item>Order</NavDropdown.Item>
            </LinkContainer>
            {currentUser.isAdmin === true ?
              (<LinkContainer to='/admin'>
                <NavDropdown.Item>Admin</NavDropdown.Item>
            </LinkContainer>) : null
            }
                   
        <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
      </NavDropdown>
            </LinkContainer>) : (<>
            {" "}
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer> {" "}
            </>)
          }
            
            <LinkContainer to='/cart'>
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </div>
      </ul>
        )}
      </div>
      </div>
    </div>
    </>
  )
};

export default NavBar;
