import React from 'react'
import { motion } from 'framer-motion'
import { variants, variantsMain } from '@/const/animation'

const WhatWeDo = () => {
  return (
    <div className="whatWeDo">
      <div style={ { margin: '247px auto 64px auto' } }>
        <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '96px auto 24px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>What We Do?</motion.h1>
        <motion.div className="content-desc-med" style={ { maxWidth: '788px', margin: '0 auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>Utilizing an iterative approach informed by user testing, we focus on your business objectives with every project we touch.</motion.div>
      </div>
      <div style={ { margin: '0 auto', maxWidth: '874px', display: 'flex', flexDirection: 'column', gap: '52px' } }>
        <motion.div className="whatWeDo-container" variants={ variants } initial="hidden" whileInView="visible" custom={ 4 }>
          <div className="title-list">Research & Competitive Analysis</div>
          <ul className="list">
            <li>Heuristic evaluations</li>
            <li>Competitive analysis</li>
            <li>UX research</li>
            <li>UI/UX audit</li>
          </ul>
        </motion.div>
        <motion.div className="whatWeDo-container" variants={ variants } initial="hidden" whileInView="visible" custom={ 6 }>
          <div className="title-list">Branding</div>
          <ul className="list">
            <li>Logo design</li>
            <li>Marketing collateral</li>
            <li>Brand identity</li>
            <li>Website & Mobile Apps</li>
          </ul>
        </motion.div>
        <motion.div className="whatWeDo-container" variants={ variants } initial="hidden" whileInView="visible" custom={ 8 }>
          <div className="title-list">UI/UX Design</div>
          <ul className="list">
            <li>Interactive Prototyping</li>
            <li>2D, 3D Graphics & animations</li>
            <li>Explainer demos</li>
            <li>Motion graphics</li>
          </ul>
        </motion.div>
      </div>
      <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
        <button className="dark-btn">More</button>
      </motion.div>

    </div>
  )
}

export default WhatWeDo