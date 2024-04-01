import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>四獸山全攻略網站</span> 由{" "}
        <a href="https://www.facebook.com/jajalaba/">Jimmy Liao </a>
        建立
      </p>
    </footer>
  )
}

export default Footer
