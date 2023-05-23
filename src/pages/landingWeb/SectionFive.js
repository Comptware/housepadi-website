import React from 'react'
import Mockup1 from '../../assets/image/Mockup1.svg'
import Mockup2 from '../../assets/image/Mockup2.svg'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Phone_Mockup from '../../assets/image/Phone_Mockup.svg'
import App_Play from '../../assets/icons/App_Play.svg'
import Google_play from '../../assets/icons/Google_Play.svg'

const SectionFive = () => {
    return (
        <div className='px-[10px] 2xs:px-[36px] pt-[38px] pb-[99px] 2xs:py-[80px] md:py-[153px]'>
            <div className='hidden xlg:flex p-10 text-[48px] font-black h-[491px] gap-20 relative bg-[#7DD13A] rounded-[20px]'>
                <div className='w-full p-10 z-[20] flex flex-col gap-[48px]'>
                    <div className='flex flex-col'>
                        <p  >Download the app today</p>

                        <p className='text-[18px]'>Download the app today and allow us cater to your home services needs while you sit back, relax and live a stress free life</p>
                    </div>

                    <div className='text-[18px] flex flex-col gap-[8px]'>
                        <p>Get the App</p>
                        <div className='flex gap-[13px]'>
                            <Google />
                            <Apple />
                        </div>
                    </div>
                </div>

                <div className='w-full flex px-4'>
                    <div className='absolute right-72 top-0'><Mockup1 /></div>

                    <div className='absolute right-3 bottom-0'><Mockup2 /></div>
                </div>


            </div>

            <div className='flex justify-center '>
                <div className='w-[100%] md:w-[85%] h-[650px] rounded-[12px] bg-[#7DD13A] relative xlg:hidden flex items-end p-[12px] 2xs:p-[24px]'>
                    <div className='absolute left-0 top-0'><Phone_Mockup /></div>

                    <div className='flex flex-col gap-[20px] py-10 w-[100%] 2xs:w-[85%] xlg:w-[70%]'>
                        <div className='flex flex-col gap-3'>
                            <p className='font-black text-[36px] md:text-[48px] text-[#18191F]'>Download the HousePadi app today</p>
                            <p className='text-[24px] text-[#18191F]'>Download the app to Simplify your home services and save time.</p>
                        </div>

                        <div className='flex flex-col text-[24px]'>
                            <p className='text-[36px]'>Get the App</p>

                            <div className='flex gap-[4px] 2xs:gap-[15px]'>
                                <Google_play />
                                <App_Play />
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        </div>
    )
}


export default SectionFive
