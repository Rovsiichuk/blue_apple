import React from 'react'
import Counter from '@/app/Counter'

const Numbers = () => {
  return (
    <div style={ { marginTop: '275px', textAlign: 'center' } }>
      <div>
        <h3>Let numbers tell a story</h3>
        <div className="number-info">
          <div className="number-info-item">
            <div className="number">
              <Counter to={400} duration={4} /> <span className="symbol">+</span>
            </div>
            <div className="content-desc-med">Projects Delivered</div>
          </div>
          <div className="number-info-item">
            <div className="number">
              <Counter to={19} duration={4} /> +
            </div>
            <div className="content-desc-med">Years of helping clients succeed</div>
          </div>
          <div className="number-info-item">
            <div className="number">
              $<Counter to={750} duration={4} />M
            </div>
            <div className="content-desc-med">In funding raised by our clients!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers