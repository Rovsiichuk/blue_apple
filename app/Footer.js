import React from 'react'
import Menu from '@/app/Menu'

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '89px 55px'}}>
        <div style={{display: 'flex', gap: '19px'}} className="contact-info">
          <div className="email">info@blueappledesign.com</div>
          <div className="phone">415.309.0170</div>
        </div>
        <div>
          <img src="../logotype.svg" alt="" />
        </div>
      </div>
      <div className="menu-container">
        <Menu />
      </div>
      <div className="rights">
        © 2023 BlueApple Design.All rights reserved
      </div>
    </footer>
  )
}

export default Footer