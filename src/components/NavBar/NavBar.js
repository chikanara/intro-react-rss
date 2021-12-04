import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src="https://th.bing.com/th/id/OIP.SOh9yOUy2RCXZOTt9hEzjwHaEK?pid=ImgDet&rs=1"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
