import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>地方媽媽金愛煮</span> 由{" "}
        <a href="https://www.facebook.com/jajalaba/">Jimmy Liao </a>建立管理
      </p>
    </footer>
  )
}

export default Footer
