import React from 'react'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Phone from '../../assets/image/Phone.svg'
import Phoness from '../../assets/image/Phoness.png'


const Banner = () => {
    return (
        <div className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
            <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
                    <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Laundry Services</span> Sorted With Housepadi</p>
                    <p className='text-[19px] text-[#203129]'>Get clean clothes within 48 hours, FREE pick up and delivery</p>
                </div>

                <div className='sm:flex gap-[13px] hidden justify-center slg:justify-start'>
                    <Google />
                    <Apple />
                </div>

                <div>
                    <button className='bg-[#002616] text-white h-[48px] w-[161px] rounded-[195px] sm:hidden'>Get Started</button>
                </div>
            </div>

            <div className='w-full flex justify-center slg:justify-end slg:mt-[130px]'>
                <Phone/>
            </div>


        </div>
    )
}


export default Banner