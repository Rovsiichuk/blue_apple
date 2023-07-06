'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/app/Header'
import { motion } from 'framer-motion'
import { variants, variantsMain } from '@/const/animation'
import Footer from '@/app/Footer'
import Slider from 'react-slick'
import Counter from '@/app/Counter'
import ReviewsSection from '@/app/ReviewsSection'
import WhyBa from '@/app/WhyBa'
import ContactForm from '@/app/ContactForm'
import WhatWeDo from '@/app/WhatWeDo'
import Numbers from '@/app/Numbers'


const Component = () => {

  const settingsLogo = {
    className: 'slider variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: '200px',
    // slidesToShow: 4,
    speed: 3000,
    dots: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  }

  return (
    <>
      <Header />
      <div style={ { maxWidth: '1120px', display: 'flex', flexDirection: 'column', margin: '0 auto' } }>
        <div style={ { textAlign: 'center', marginBottom: '48px', marginTop: '168px' } }>
          <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>BlueApple is UX/UI design and branding agency</motion.h1>
          <motion.div className="content-desc" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>We create innovative digital products, branding, and web designs.</motion.div>
        </div>
        <div style={ { height: '610px', display: 'flex', flexWrap: 'wrap', gap: '10px' } }>
          {
            ['1', '2', '3', '4'].map(path => {
              return (
                <div key={ path } className="banner-img">
                  <img src={ `/${ path }.jpg` } alt="case" />
                </div>
              )
            })
          }
        </div>
      </div>

      <Numbers />

      <WhatWeDo />

      <div className="logoSliderSection">
        <div className="label">Join 50+ companies already growing</div>
        {/*<ul style={{ display: 'flex', alignItems: 'center', marginBottom: '173px'}}>*/ }
        <Slider { ...settingsLogo } className="slider-logo">
          {
            ['1', '2', '3', '4', '5', '6'].map(path => {
              return (
                <>
                  <img src={ `../logo/${ path }.svg` } key={ path } />
                </>
                // <li key={ path } style={{width: '100%', height: '100%', position: 'relative'}}>

                // </li>
              )
            })
          }
        </Slider>
        {/*</ul>*/ }
      </div>

      <WhyBa />

      <ReviewsSection />

      <ContactForm />

      <Footer />
    </>
  )
}

export default Component