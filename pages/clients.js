import React from 'react'
import { motion } from 'framer-motion'
import { variantsMain } from '@/const/animation'
import RootLayout from '../app/layout'
import ContactForm from '@/app/ContactForm'
import Header from '@/app/Header'
import Footer from '@/app/Footer'

const Clients = () => {
  const clientsData = [
    {
      logo: 'zeitview.svg',
      text: 'Brand, logo design, marketing collateral, trade show booth, Google Slide presentations'
    },
    {
      logo: 'innotas.svg',
      text: 'UX/UI for the desktop product'
    },
    {
      logo: 'sunedison.svg',
      text: 'UX/UI evaluation and redesign'
    },
    {
      logo: 'walmart.svg',
      text: 'UX/UI design for rapid market fit exploration across various product lines'
    },
    {
      logo: 'jigsaw.svg',
      text: 'UX/UI for the desktop product'
    },
    {
      logo: 'synvascular.svg',
      text: 'Logo and website design'
    },
    {
      logo: 'okta.svg',
      text: 'Brand/identity design when company was first established'
    },
    {
      logo: 'actionhrm.svg',
      text: 'Website design and implementation'
    },
    {
      logo: 'steppechange.svg',
      text: 'Logo, marketing materials, PPT, website design and WordPress implementation'
    },
    {
      logo: 'disney.svg',
      text: 'Design and localization support for new games coming out along with Disney movies'
    },
    {
      logo: 'mavenlink.svg',
      text: 'UX/UI design for the desktop product'
    },
    {
      logo: 'urban-mapping.svg',
      text: 'Website design'
    },
    {
      logo: 'coverity.svg',
      text: 'UX/UI eval and update of portions of Coverity Static Analysis interface'
    },
    {
      logo: 'meebo.svg',
      text: 'Design and production of interactive quiz-type advertisements '
    },
    {
      logo: 'cloudwords.svg',
      text: 'UX/UI evaluation and redesign'
    },
    {
      logo: 'linkedin.svg',
      text: 'UX/UI explorations for new product features'
    },
    {
      logo: 'mixamo.svg',
      text: 'UX/UI for desktop product'
    },
    {
      logo: 'castlight.svg',
      text: 'Website design'
    },
    {
      logo: 'venafi.svg',
      text: 'Logo refresh'
    },
    {
      logo: 'pagemill.svg',
      text: 'Brand refresh including logo redesign, website design and production'
    },
    {
      logo: 'hds.svg',
      text: 'Usability research, UX/UI for mobile product'
    },
    {
      logo: 'ayla.svg',
      text: 'Website, eBooks, Data sheets, White papers, Trade show booth, diagrams, icons, animated explainer demos, PPTs, advertising, and Solution briefs.'
    },
    {
      logo: 'passare.svg',
      text: 'Logo, branding, marketing materials, website design.'
    },
    {
      logo: 'ixl.svg',
      text: 'UI and visual design support for iPad application'
    },
    {
      logo: 'better-health.svg',
      text: 'UX/UI, website and brand design for the first iteration of the product'
    },
    {
      logo: 'plaxo.svg',
      text: 'On going marketing support extending for website, email campaigns, advertising and product features design'
    },
    {
      logo: 'shotspotter.svg',
      text: 'Explainer animation demo illustrating product capabilities in a 60 second demo'
    },
    {
      logo: 'billcom.svg',
      text: 'UX/UI, website and brand design for the first iteration of the product'
    },
    {
      logo: 'radiumne.svg',
      text: 'UX/UI of Mobile Connect and Analytics products'
    },
    {
      logo: 'caringcom.svg',
      text: 'Product UX/UI, website, logo design'
    },
    {
      logo: 'inseego.svg',
      text: 'Website redesign, PPT presentations and icon library'
    },
    {
      logo: 'saaspoint.svg',
      text: 'Logo and branding materials design'
    },
    {
      logo: 'silverspring.svg',
      text: 'UX/UI eval and update of portion of the product'
    },
    {
      logo: 'ctrack.svg',
      text: 'Logo refresh, PPT, Solution brief, Data sheet'
    },
    {
      logo: 'apteligent.svg',
      text: 'Logo design'
    },
    {
      logo: 'xactly.svg',
      text: 'Brand, logo, marketing materials, website, UX/UI of  Xactly Incent product'
    },
    {
      logo: 'peloton.svg',
      text: 'Website, trade show booth, PPT, data sheets, product logos, icons and info-graphics'
    },
    {
      logo: 'smc.svg',
      text: 'Logo update and website design '
    },
    {
      logo: 'heirloom-comp.svg',
      text: 'Logo, website, PPT presentation and marketing materials'
    },
    {
      logo: 'atp.svg',
      text: 'UX/UI design for iPad application'
    },
    {
      logo: 'carbylan.svg',
      text: 'Logo and website design'
    },
    {
      logo: 'infoarmy.svg',
      text: 'UX/UI for the iPad application'
    },
    {
      logo: 'php.svg',
      text: 'UX/UI redesign and WordPress implementation of the Resource Center.'
    },
    {
      logo: 'skybox.svg',
      text: 'Website and digital marketing materials design'
    },
    {
      logo: 'razorthink.svg',
      text: 'Website update and PPT design'
    },
    {
      logo: 'milkand.svg',
      text: 'Website graphics and diagrams'
    },
    {
      logo: 'tigergraph.svg',
      text: 'Website update and PPT design'
    },

  ]
  return (
    <>
      <Header />
        <div className="clients">
          <div style={ { maxWidth: '1120px', display: 'flex', flexDirection: 'column', margin: '0 auto' } }>
            <div style={ { textAlign: 'center', marginBottom: '48px', marginTop: '168px' } }>
              <motion.h1 className="mainTitle" style={ { maxWidth: '805px', margin: '0 auto 64px auto' } } variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 4 }>Clients</motion.h1>
              <motion.div className="content-desc" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>“Working with BlueApple was like collaborating with an internal team, clear and concise communication, a truly
                receptive environment.”
              </motion.div>
              <motion.div className="info-quote" variants={ variantsMain } initial="hidden" whileInView="visible" custom={ 6 }>
                <div className="name">Don Haugen</div>
                <div className="role">Creative Director, Inseego Corp.</div>
              </motion.div>
            </div>

            <div className="clients-grid">
              {
                clientsData.map((x, index) => (
                  <div key={index} className="client">
                    <div className="logo"><img src={`/clients/${x.logo}`} alt={x.logo} /></div>
                    <div className="text">{x.text}</div>
                  </div>
                ))
              }
            </div>

            <ContactForm />
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Clients