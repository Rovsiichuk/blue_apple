'use client'

import React, { useState } from 'react'
import Header from '@/app/Header'
import { motion } from 'framer-motion'
import { variants, variantsMain } from '@/const/animation'
import Footer from '@/app/Footer'
import Slider from 'react-slick'

const Component = () => {
  const [openCardId, setOpenCardId] = useState(null);
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

  const cardReview = [
    {
      img: '1',
      name: 'Jason Seed',
      role: 'CEO, ActionHRM, Inc',
      review: 'BlueApple was an essential part of our global rebrand. The team rapidly understood our requirements, quoted quickly and accurately and the execution of the process was top-notch.'
    },
    {
      img: '2',
      name: 'Wendy Caceres',
      role: 'CMO, Inseego Corp.',
      review: 'BlueApple gets it. Whether a professional pitch deck, a trade show booth, or website – they understand how to tell the story visually.'
    },
    {
      img: '3',
      name: 'Don Haugen',
      role: 'Creative Director, Inseego Corp.',
      review: 'Working with BlueApple was like collaborating with an internal team, clear and concise communication, a truly receptive environment.'
    }
  ]
  return (
    <>
      <Header />
      <div style={ { maxWidth: '1120px', display: 'flex', flexDirection: 'column', margin: '0 auto' } }>
        <div style={ { textAlign: 'center', marginBottom: '48px', marginTop: '168px' } }>
          <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={variantsMain} initial='hidden' whileInView="visible" custom={4}>BlueApple is UX/UI design and branding agency</motion.h1>
          <motion.div className="content-desc" variants={variantsMain} initial='hidden' whileInView="visible" custom={6}>We create innovative digital products, branding, and web designs.</motion.div>
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

      <div style={ { marginTop: '275px', textAlign: 'center' } }>
        <div>
          <h3>Let numbers tell a story</h3>
          <div className="number-info">
            <div className="number-info-item">
              <div className="number">400+</div>
              <div className="content-desc-med">Projects Delivered</div>
            </div>
            <div className="number-info-item">
              <div className="number">19+</div>
              <div className="content-desc-med">Years of helping clients succeed</div>
            </div>
            <div className="number-info-item">
              <div className="number">$750M</div>
              <div className="content-desc-med">In funding raised by our clients!</div>
            </div>

          </div>
        </div>
      </div>

      <div className="whatWeDo">
        <div style={ { margin: '247px auto 64px auto' } }>
          <h1 className="mainTitle" style={ { maxWidth: '805px', margin: '96px auto 24px auto' } }>What We Do?</h1>
          <div className="content-desc-med" style={ { maxWidth: '788px', margin: '0 auto' } }>Utilizing an iterative approach informed by user testing, we focus on your business objectives with every project we touch.</div>
        </div>
        <div style={ { margin: '0 auto', maxWidth: '874px', display: 'flex', flexDirection: 'column', gap: '52px' } } >
          <motion.div className="whatWeDo-container" variants={variants} initial='hidden' whileInView="visible" custom={4}>
            <div className="title-list">Research & Competitive Analysis</div>
            <ul className="list">
              <li>Heuristic evaluations</li>
              <li>Competitive analysis</li>
              <li>UX research</li>
              <li>UI/UX audit</li>
            </ul>
          </motion.div>
          <motion.div className="whatWeDo-container" variants={variants} initial='hidden' whileInView="visible" custom={6}>
            <div className="title-list">Branding</div>
            <ul className="list">
              <li>Logo design</li>
              <li>Marketing collateral</li>
              <li>Brand identity</li>
              <li>Website & Mobile Apps</li>
            </ul>
          </motion.div>
          <motion.div className="whatWeDo-container" variants={variants} initial='hidden' whileInView="visible" custom={8}>
            <div className="title-list">UI/UX Design</div>
            <ul className="list">
              <li>Interactive Prototyping</li>
              <li>2D, 3D Graphics & animations</li>
              <li>Explainer demos</li>
              <li>Motion graphics</li>
            </ul>
          </motion.div>
        </div>
        <motion.div variants={variants} initial='hidden' whileInView="visible" custom={5}>
          <button className="dark-btn">More</button>
        </motion.div>

      </div>

      <div className="logoSliderSection">
        <div className="label">Join 50+ companies already growing</div>
        {/*<ul style={{ display: 'flex', alignItems: 'center', marginBottom: '173px'}}>*/}
          <Slider { ...settingsLogo } className="slider-logo">
          {
            ['1', '2', '3', '4', '5', '6'].map(path => {
              return (
                <>
                  <img src={ `../logo/${ path }.svg` } />
                </>
                // <li key={ path } style={{width: '100%', height: '100%', position: 'relative'}}>

                // </li>
              )
            })
          }
          </Slider>
        {/*</ul>*/}
      </div>

      <div className="whySection">
        <div style={ { margin: '65px auto 50px auto' } }>
          <h1 className="mainTitle" style={ { margin: '0 auto 24px auto' } }>Why BlueApple?</h1>
          <div className="content-desc-med" style={ { maxWidth: '577px', margin: '0 auto' } }>We are a team of creative, passionate, and dedicated art directors and product and UI/UX designers.</div>
        </div>
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          {
            cardWhyBA.map(x => {
              const isCardOpen = openCardId === x.id;
              return (
                <motion.div key={x.id} className="card"
                            onMouseEnter={() => setOpenCardId(x.id)}
                            onMouseLeave={() => setOpenCardId(null)}
                >
                  <div className="number">{x.id}</div>
                  <div className="title">{x.title}</div>
                  {
                    isCardOpen && <motion.div className="description hide"
                                              animate={{ y: -15, opacity: 1 }}
                                              transition={{ type: "spring", stiffness: 100 }}

                    >{x.description}</motion.div>
                  }
                </motion.div>
              )
            })
          }
        </div>
      </div>

      <div className="reviewSection">
        <h1 className="mainTitle" style={ { margin: '0 auto 50px auto' } }>What our clients say</h1>
        <div style={{display: 'flex', gap: '32px', justifyContent: 'center'}}>
          {
            cardReview.map(x => {
              return (
                <div key={x.id} className="card">
                  <img src={ `../avatar/${ x.img }.png` } />
                  <div className="name">{x.name}</div>
                  <div className="role">{x.role}</div>
                  <div className="review">{x.review}</div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="contactForm" style={{display: 'flex', gap: '70px'}}>
        <div>
          <div className="label">Let's talk</div>
          <div className="title">Talk to us about your next project!</div>
        </div>
        <div style={{width: '413px'}}>
          <form action="" style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
            <input type="text" placeholder="Name and Surname"/>
            <input type="text" placeholder="Company"/>
            <input type="text" placeholder="Phone Number"/>
            <input type="text" placeholder="Email Address"/>
            <button className="secondary-btn">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Component