import React from 'react'

const ContactForm = () => {
  return (
    <div className="contactForm" style={ { display: 'flex', gap: '70px' } }>
      <div>
        <div className="label">Lets talk</div>
        <div className="title">Talk to us about your next project!</div>
      </div>
      <div style={ { width: '413px' } }>
        <form action="" style={ { display: 'flex', flexDirection: 'column', gap: '18px' } }>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email Address" />
          <button className="secondary-btn">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm