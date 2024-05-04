import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PageConstants } from "../constants";
import { UserContextType, useUser } from "../context";
import { Container, Navbar, Nav } from "react-bootstrap";
import { getSetToken } from "../utilities";

const MyNav = () => {
  // using constants
  const { Login, LogOut, Register, Home } = PageConstants;

  // using context to validate state of nav
  const { userName, setUserName } = useUser() as UserContextType;
  // get token
  const token = getSetToken("token");

  // call to singout api
  const logout = async () => {
    try {
      await axios.post("http://localhost:8000/auth/signout");
      // if logout then empty the state
      setUserName("");
      // remove token
      getSetToken("set", []);
      localStorage.removeItem("name");
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  let menu;

  // if (props.name === '') {
  menu = (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {userName || token?.length ? (
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            {LogOut}
          </Link>
        </li>
      ) : (
        <>
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              {Login}
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/register" className="nav-link">
              {Register}
            </Link>
          </li>
        </>
      )}
    </ul>
  );

  return (
    // <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    //   <div className="container-fluid">
    //     <Link to="/" className="navbar-brand">
    //       {Home}
    //     </Link>
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //         {!userName ? (
    //           <>
    //             <li className="nav-item">
    //               <Link to="/login" className="nav-link">
    //                 {Login}
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/register" className="nav-link">
    //                 {Register}
    //               </Link>
    //             </li>
    //           </>
    //         ) : (
    //           <li className="nav-item">
    //             <Link to="/" className="nav-link" onClick={logout}>
    //               {LogOut}
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Link to="/" className="navbar-brand">
            {Home}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}

            <div>{menu}</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
