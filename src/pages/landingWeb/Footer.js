import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Link from 'next/link'
import PrivacyPolicyList from 'pages/legal/privacy-policy'

const Footer = ({ onPricing, onService, onFAQ }) => {



    return (
        <div className='bg-[#002616] text-[#D9DBE1] w-full flex justify-center py-[48px] sm:py-[110px]'>
            <div className='hidden sm:grid grid-cols-1 sm:grid-cols-3 w-[80%] gap-10 xlg:gap-0 xlg:grid-cols-6 text-[14px] justify-items-start sm:justify-items-center'>

                <div className=' gap-2 flex items-end h-10'>
                    <Logo />
                    <p className='text-[24px] text-white font-bold'>HousePadi</p>
                </div>

                <div className='font-semibold flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px] text-white'>Product</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p className='flex items-center gap-2'>Features <span className='new text-[#2EC5CE]'>New</span></p>
                        <p className='cursor-pointer w-10 hover:underline hidden md:flex' onClick={onPricing}>Pricing</p>
                        <p className='cursor-pointer w-10 hover:underline flex md:hidden' onClick={onService}>Service</p>
                    </div>

                </div>


                <div className='font-semibold flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px] text-white'>Follow us</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p>Features <span>Facebook</span></p>
                        <Link className='w-10' href={'https://twitter.com/GetHousePadi'}><p className='hover:underline'>Twitter</p></Link>
                        <Link className='w-10' href={'https://www.instagram.com/gethousepadi/'}><p className='hover:underline'>Instagram</p></Link>
                    </div>
                </div>


                <div className='font-semibold flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px] text-white'>Supports</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p className='cursor-pointer hover:underline w-7' onClick={onFAQ}>FAQ</p>
                        <p>Help Center</p>
                        <Link href={'/legal/privacy-policy'}><p className='hover:underline'>Privacy Policy</p></Link>
                        <Link href={'/legal/TermsOfService'}><p className='hover:underline'>Terms of Service</p></Link>
                    </div>
                </div>


                <div className='font-semibold flex flex-col gap-[16px] text-[14px]'>
                    <p>© 2023 HousePadi.
                        All Rights Reserved</p>

                        <p className='font-semibold text-[18px] text-[#aaaebb]'>hello@housePadi.ng</p>

                </div>

            </div>

            <div className='grid sm:hidden grid-cols-1 w-[80%]'>
                <div className=' gap-2 flex items-end h-10'>
                    <Logo />
                    <p className='text-[24px] font-bold'>HousePadi</p>
                </div>

                <div className='py-[26px] gap-3 flex flex-col'><p>© 2023 HousePadi.
                    All Rights Reserved</p>

                    <p className='font-semibold text-[18px] text-[#aaaebb]'>hello@housePadi.ng</p>
                </div>

                <div className='flex flex-col gap-[32px]'>

                    <div className='font-semibold flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px] text-white'>Product</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='flex items-center gap-2'>Features <span className='new text-[#2EC5CE]'>New</span></p>
                            <p className='cursor-pointer w-12 hover:underline flex md:hidden' onClick={onService}>Service</p>
                            {/* <p>Releases</p> */}
                        </div>
                    </div>



                    {/* <div className='font-semibold flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px] text-white'>Company</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='cursor-pointer hover:underline flex md:hidden' onClick={onFAQ}>FAQ</p>
                            <p>Press</p>
                            <p>Careers</p>
                            <p>Contact</p>
                            <p>Patners</p>
                        </div>
                    </div> */}

                    <div className='font-semibold flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px] text-white'>Supports</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='cursor-pointer hover:underline w-10' onClick={onFAQ}>FAQ</p>
                            <p>Help Center</p>
                            <Link className='w-32' href={'/legal/privacy-policy'}><p className='hover:underline'>Privacy Policy</p></Link>
                            <Link className='w-32' href={'/legal/TermsOfService'}><p className='hover:underline'>Terms of Service</p></Link>
                        </div>
                    </div>


                    {/* <div className='font-semibold flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px] text-white'>Supports</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p>Help Center</p>
                            <p>Terms of Service</p>
                            <Link href={'/legal/privacy-policy'}><p>Privacy Policy</p></Link>
                        </div>
                    </div> */}


                    <div className='font-semibold flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px] text-white'>Follow us</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p className='w-40'>Features <span>Facebook</span></p>
                            <Link className='w-14' href={'https://twitter.com/GetHousePadi'}><p className='hover:underline'>Twitter</p></Link>
                            <Link className='w-14' href={'https://www.instagram.com/gethousepadi/'}><p className='hover:underline'>Instagram</p></Link>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Footer