import React from 'react'

const Footer = () => {
  return (
    <footer style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '89px 55px'}}>
        <div style={{display: 'flex', gap: '19px'}} className="contact-info">
          <div className="email">info@blueappledesign.com</div>
          <div className="phone">415.309.0170</div>
        </div>
        <div>
          <img src="../logotype.svg" alt="" />
        </div>
    </footer>
  )
}

export default Footer