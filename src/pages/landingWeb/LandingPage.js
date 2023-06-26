import React, { useRef, useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Footer from './Footer'
import Faq from './Faq'


const LandingPage = () => {

  const [open, setOpen] = useState(true);

  const myRef = useRef(null)
  const pricings = useRef(null)
  const downloads = useRef(null)
  const FAQs = useRef(null)
  const contact = useRef(null)


  const handleService = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePricing = () => {
    pricings.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownload = () => {
    downloads.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleFAQ = () => {
    FAQs.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleServices = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
    setOpen(false);
    console.log('dddddddd')
  }





  return (
    <div>
      <div className='bg-[#F2FAEB]'>
        <Header
          onPricing={() => handlePricing(true)}
          onService={() => handleService(true)}
          onDownload={() => handleDownload(true)}
          onServices={() => handleServices(true)}
          onContact={() => handleContact(true)}
        />
        <Banner />
      </div>
      <div ref={myRef}>
        <SectionOne />
      </div>
      <SectionTwo />
      <div ref={pricings}>
        <SectionThree />
      </div>
      <div ref={FAQs}>
        <SectionFour />
      </div>
      <div ref={contact}>
        <Faq />
      </div>
      <div ref={downloads}>
        <SectionFive />
      </div>
      <Footer
        onPricing={() => handlePricing(true)}
        onService={() => handleService(true)}
        onFAQ={() => handleFAQ(true)}
      />

    </div>
  )
}


export default LandingPage