import React from 'react'
import Header from '@/app/Header'
import Footer from '@/app/Footer'
import { motion } from 'framer-motion'
import { variants, variantsMain } from '@/const/animation'
import '../app/globals.scss'
import ContactForm from '@/app/ContactForm'

const Showcases = () => {
  return (
    <>
      <Header />
      <div className="cases">
        <div style={ { maxWidth: '1120px', display: 'flex', flexDirection: 'column', margin: '0 auto' } }>
          <div style={ { textAlign: 'center', marginBottom: '48px', marginTop: '168px' } }>
            <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>Showcases</motion.h1>
            <motion.div className="content-desc" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>Following our processes and working closely with your team, we define, design, iterate, and build, while staying
              focused on our project objectives.
            </motion.div>
          </div>
        </div>
        <div className="cases-container">
          <div className="case ayla">
            <div className="info">
              <div className="title">Ayla Networks</div>
              <div className="desc">Informational Architecture, UX/UI Design, Photography and Animation Selection, Implementation Overview, Style Guie, Icon Library, Marketing Materials, Presentation Templates, and Infographics Design</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/macbookAir1.png' } />
            </div>
            <img src={ '../cases/device1.png' } className="absoluteImg1" />
          </div>
          <div className="case trustXyz">
            <img src={ '../cases/device3.png' } className="absoluteImg1" />
            <div className="img1">
              <img src={ '../cases/device2.png' } />
            </div>
            <div className="info">
              <div className="title">TrustXYZ</div>
              <div className="desc">Informational Architecture, UX/UI Design, Data Visualization Design, Customer Facing Customizable PDF Interaction and Output Design, Implementation Overview</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
          </div>
          <div className="case inseego">
            <div className="info">
              <div className="title">Inseego</div>
              <div className="desc">Informational Architecture, Site UX/UI Design, Implementation Overview</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/device5.png' } />
            </div>
            <img src={ '../cases/device4.png' } className="absoluteImg1"/>
          </div>
          <div className="case zeitview">
            <div className="info">
              <div className="title">Zeitview</div>
              <div className="desc">Visual Strategy, Logo & Styleguide Creation, Marketing Collateral Design, Interactive Demo Creation</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/device6.png' } />
            </div>
          </div>
          <div className="case moloco">
            <div className="info">
              <div className="title">MOLOCO</div>
              <div className="desc">Informational Architecture, Site UX/UI Design</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/device7.png' } />
            </div>
            <img src={ '../cases/device8.png' } className="absoluteImg1" />
          </div>
          <div className="case cyris">
            <div className="img1">
              <img src={ '../cases/device9.png' } />
            </div>
            <div className="info">
              <div className="title">Cyris</div>
              <div className="desc">Informational Architecture, UX/UI Design, Data Visualization Design, Implementation Overview</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
          </div>
          <div className="case vimpelCom">
            <div className="info">
              <div className="title">VimpelCom</div>
              <div className="desc">Mobile & Apple Watch Informational Architecture, UX/UI Design, Implementation Overview</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/device10.png' } />
            </div>
            <div className="img2">
              <img src={ '../cases/device11.png' } />
            </div>
          </div>
          <div className="case betterOff">
            <div className="info">
              <div className="title">BetterOff</div>
              <div className="desc">iOS App & Website Informational Architecture, Site UX/UI Design, Implementation Overview</div>
              <motion.div variants={ variants } initial="hidden" whileInView="visible" custom={ 5 }>
                <button className="dark-btn">View Case</button>
              </motion.div>
            </div>
            <div className="img1">
              <img src={ '../cases/device12.png' } />
            </div>
            <img src={ '../cases/device13.png' } className="absoluteImg1" />
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default Showcases