import React from 'react'
import './Footer.css'
const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <footer>
       <p>&copy; {year} all right reserved by Hr Meheraj  </p>
    </footer>
  )
}
export default Footer;