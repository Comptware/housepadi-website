import React from 'react'
import Header from './Header'
import Banner from './Banner'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import Footer from './Footer'


const LandingPage = () => {
  return (
    <div>
      <div className='bg-[#F2FAEB]'>
        <Header />
        <Banner />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />

    </div>
  )
}


export default LandingPage