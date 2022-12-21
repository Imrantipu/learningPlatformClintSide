import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import logo from "../Assets/favicon.png";
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

    return (
        <div>
           <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt=""
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold  text-gray-900 dark:text-white">
    Tech Zombie
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Courses
    </Navbar.Link>
    <Navbar.Link href="/questions">
      FAQ
    </Navbar.Link>
    <Navbar.Link href="/blog">
      Blog
    </Navbar.Link>
    <>
      {user?.uid ? (
        <>

     <Navbar.Link href=""  onClick={handleLogOut}>
      Log out
    </Navbar.Link>
         </>
      ) : (
        <>
        <Navbar.Link href="/login">
      Login
    </Navbar.Link>
    <Navbar.Link href="/register">
      Register
    </Navbar.Link>
        </>
      )
      
      }
    
    </>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;