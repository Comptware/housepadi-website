import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Link from 'next/link'
import PrivacyPolicyList from 'pages/legal/privacy-policy'

const Footer = () => {
    return (
        <div className='bg-[#002616] text-white w-full flex justify-center py-[48px] sm:py-[110px]'>
            <div className='hidden sm:grid grid-cols-1 sm:grid-cols-3 w-[80%] gap-10 xlg:gap-0 xlg:grid-cols-6 text-[14px] justify-items-start sm:justify-items-start'>
                <div className=' gap-2 flex items-end h-10'>
                    <Logo />
                    <p className='text-[24px] font-bold'>HousePadi</p>
                </div>

                <div className='font-thin flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px]'>Product</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p>Features <span>New</span></p>
                        <p>Pricing</p>
                        <p>Releases</p>
                    </div>

                </div>


                <div className='font-thin flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px]'>Follow us</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p>Features <span>Facebook</span></p>
                        <p>Twitter</p>
                        <p>Dribbles</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                    </div>
                </div>


                <div className='font-thin flex flex-col gap-[16px]'>
                    <p className='font-semibold text-[19px]'>Supports</p>
                    <div className='flex flex-col gap-[13px]'>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Legal</p>
                        <Link href={'/legal/privacy-policy'}><p>Privacy Policy</p></Link>
                        <p>Status</p>
                    </div>
                </div>


                <div className='font-thin flex flex-col gap-[16px] text-[14px]'>
                    <p>© 2023 HousePadi.
                        All Rights Reserved</p>

                </div>

            </div>

            <div className='grid sm:hidden grid-cols-1 w-[80%]'>
                <div className=' gap-2 flex items-end h-10'>
                    <Logo />
                    <p className='text-[24px] font-bold'>HousePadi</p>
                </div>

                <div className='py-[26px]'><p>© 2023 HousePadi.
                    All Rights Reserved</p></div>

                <div className='flex flex-col gap-[32px]'>
                    <div className='font-thin flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px]'>Product</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p>Overview</p>
                            <p>Features</p>
                            <p>Tutorials</p>
                            <p>Pricing</p>
                            <p>Releases</p>
                        </div>
                    </div>


                    <div className='font-thin flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px]'>Company</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p>About</p>
                            <p>Press</p>
                            <p>Careers</p>
                            <p>Contact</p>
                            <p>Patners</p>
                        </div>
                    </div>


                    <div className='font-thin flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px]'>Supports</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p>Help Center</p>
                            <p>Terms of Service</p>
                            <p>Legal</p>
                            <p>Privacy Policy</p>
                            <p>Status</p>
                        </div>
                    </div>


                    <div className='font-thin flex flex-col gap-[16px]'>
                        <p className='font-semibold text-[19px]'>Follow us</p>
                        <div className='flex flex-col gap-[13px]'>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Dribble</p>
                            <p>Instagram</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Footer