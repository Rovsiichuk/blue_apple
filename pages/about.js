'use client'

import React from 'react'
import Header from '@/app/Header'
import Footer from '@/app/Footer'
import Layout from '../app/layout';
import { motion } from 'framer-motion'
import { variantsMain } from '@/const/animation'
import WhyBa from '@/app/WhyBa'
import ReviewsSection from '@/app/ReviewsSection'
import ContactForm from '@/app/ContactForm'
// import ListCheck from '@/app/assets/image/list-check.svg'

const About = () => {
  const services = [
    {
    icon: 'list-check.svg',
    title: 'Research & Competitive Analysis',
    desc: 'We thoroughly research your target audience to understand their intended interaction with your brand or product. This knowledge informs every aspect of your brand, website, or product design.',
    tags: ['UI/UX audit', 'UX research', 'Usability testing', 'Competitive analysis', 'Heuristic evaluations']
  },
    {
      icon: 'mail.svg',
      title: 'Branding Design ',
      desc: 'We design a recognizable visual identity through logo design, colors, typography, image selection, and animation. This design system communicates and distinguishes your brand to internal and external audiences. ',
      tags: ['Logo design', 'Brand identity', 'Marketing collateral', 'Website & Mobile Apps', 'PPT and Google slide', 'Iconography']
    },
    {
      icon: 'lightbulb.svg',
      title: 'UI/UX Design',
      desc: 'From user stories to product maps, wireframes, and interactive prototypes to visual design and working hand-in-hand with the implementation team, we focus on your end-user experience while delivering the best possible solution for your website or product.',
      tags: ['Interactive Prototyping', 'Explainer demos', '2D, 3D Graphics & animations']
    },
  ]
  return (
    // <Layout>
    <>
      <Header/>
      <div className="about">
        <div style={ { maxWidth: '1120px', display: 'flex', flexDirection: 'column', margin: '0 auto' } }>
          <div style={ { textAlign: 'center', marginBottom: '48px', marginTop: '168px' } }>
            <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>About</motion.h1>
            <motion.div className="content-desc" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>We become an extended part of your team and offer exceptional, personal, and highly responsive support.</motion.div>
          </div>
        </div>

        <div className="card-info">
          <div className="info">
            <h2 className="title">Meet Our Principal</h2>
            <div className="quote">
              “Every project we deliver supports your message and enhances the way customers perceive your brand”
            </div>
            <div>
              <div className="name">Ilona Kaplunov</div>
              <div className="role">Principal, BlueApple</div>
            </div>
          </div>
          <img src="/ilona.jpg" alt="ilona" />
        </div>

        <WhyBa title={false} />

        <div className="services" style={ { margin: '290px auto 44px auto', maxWidth: '1104px' } }>
          <div style={ { display: 'flex', gap: '32px', padding: '32px' } }>
            <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>Services</motion.h1>
            <motion.div className="desc" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>We enhance your online presence through audience research, informing our design process for your brand, website, or product. Our team creates a distinctive visual identity, communicating your brand to internal and external audiences.</motion.div>
          </div>
          <div className="cards-service">
            {
              services.map((x, index) => (
                <div className="card-service" key={index}>
                  <div className="icon"><img src={`/${ x.icon }`} alt="" /></div>
                  <div className="title">{x.title}</div>
                  <div className="desc">{x.desc}</div>
                  <div className="tags">
                    {x.tags.map((tag, index) => (
                      <div key={index} className="tag">{tag}</div>
                    ))}
                  </div>
                </div>
                ))
            }


          </div>
        </div>

        <ReviewsSection slidesToShow={1} title={false}/>

        <ContactForm />
      </div>
      <Footer />
    </>

  )
}

export default About