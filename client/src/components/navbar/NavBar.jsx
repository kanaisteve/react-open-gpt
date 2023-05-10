import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#possibility">OpenAI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="gpt3__navbar-links_container">
        <Menu />
      </div>

      {/* SignIn & SignUp Link */}
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button className='button'>Sing Up</button>
      </div>

      {/* Menu */}
      <div className="gpt3__navbar-menu">
        {/* Show Menu Icon */}
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {/* Mobile Menu: Dropdown Links */}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              {/* SignIn & SignUp Link */}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button className='button'>Sing Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar