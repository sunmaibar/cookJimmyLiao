import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { GiCookingPot } from "react-icons/gi"
import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logocontainer">
            <img src={logo} alt="simply recipes" />
            <h3>南港山系</h3>
          </Link>

          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            首頁
          </Link>
          <Link
            to="/recipes"
            onClick={() => setShow(false)}
            className="nav-link"
            activeClassName="active-link"
          >
            景點合集
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
          >
            分類索引
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            關於網站
          </Link>
          <div className="nav-link contact-link">
            <Link onClick={() => setShow(false)} to="/contact" className="btn">
              聯繫站長
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
