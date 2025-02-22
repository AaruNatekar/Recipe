import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div>
    <nav class="main-nav">
        <div class="shop">
            <img src="../logo2.jpg" alt="logo img" />
            <h1>ALL RECIPES</h1>
        </div>
        <div class="links">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <div className="auth-links">
          <a className="login-link" href="/login">Login</a>
          <a className="register-link" href="/register">Register</a>
        </div>
   </nav>
    </div>
  )
}

export default Navbar