import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { variantsMain } from '@/const/animation'

const WhyBa = ({title= true}) => {
  const cardWhyBA = [
    {
      id: 1,
      title: 'Who we are',
      description: 'We are a full-service design agency that functions as an integral part of our client\'s team to conceptualize, design, and build meaningful solutions across all brand touchpoints.'
    },
    {
      id: 2,
      title: 'What matters to us',
      description: 'Establishing and maintaining an open and collaborative relationship with our clients is paramount. We strive to be considered an extension of your team and to provide exceptional solutions.'
    },
    {
      id: 3,
      title: 'What We Offer',
      description: 'We offer design solutions tailored to your company and project, a team of talented and experienced designers, effortless communication, and an iterative approach to design.'
    },
    {
      id: 4,
      title: 'How we do it',
      description: 'Following our processes and working closely with your team, we define, design, iterate, and build while staying focused on your project objectives.'
    }
  ]
  const [openCardId, setOpenCardId] = useState(null)
  return (
      <div className="whySection">
        <div style={ { margin: '65px auto 50px auto' } }>
          <motion.h1 className="mainTitle" style={ { margin: '0 auto 24px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>Why BlueApple?</motion.h1>
          {
            title && <motion.div className="content-desc-med" style={ { maxWidth: '577px', margin: '0 auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>We are a team of creative, passionate, and dedicated art directors and product and UI/UX designers.</motion.div>
          }
        </div>
        <div style={ { display: 'flex', gap: '10px', justifyContent: 'center' } }>
          {
            cardWhyBA.map(x => {
              const isCardOpen = openCardId === x.id
              return (
                <motion.div key={ x.id } className="card"
                            onMouseEnter={ () => setOpenCardId(x.id) }
                            onMouseLeave={ () => setOpenCardId(null) }
                >
                  <div className="number">{ x.id }</div>
                  <div className="title">{ x.title }</div>
                  {
                    isCardOpen && <motion.div className="description hide"
                                              animate={ { y: -15, opacity: 1 } }
                                              transition={ { type: 'spring', stiffness: 100 } }

                    >{ x.description }</motion.div>
                  }
                </motion.div>
              )
            })
          }
        </div>
      </div>

  )
}

export default WhyBa