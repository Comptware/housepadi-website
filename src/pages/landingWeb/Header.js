import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Hamburger from '../../assets/image/Hamburger.svg'
import Lock from '../../assets/icons/Lock.svg'

const Header = () => {
    return (
        <div className='flex flex-col bg-white sm:bg-transparent gap-[20px] justify-between pt-[20px] sm:pt-[35px] slg:pt-[50px] py-5 sm:py-0 px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px]'>

            <div className="w-full flex sm:hidden">
                <div className="h-[36px] w-full rounded-[10px] bg-[#0000000a] px-[10px] flex justify-center items-center">


                    <div className='flex items-center gap-[5px] text-[17px] text-black'>
                        <Lock />
                        <p>housepadi.ng</p>
                    </div>

                </div>
            </div>

            <div className='flex justify-between'>
                <div className=' gap-2 flex items-end'>
                    <Logo />
                    <p className='text-[24px] font-bold'>HousePadi</p>
                </div>

                <div className=' items-end gap-[51px] text-[20px] hidden slg:flex'>
                    <p>Service</p>
                    <p>Pricing</p>
                    <p>Contact Us</p>
                    <button className='bg-[#002616] rounded-[190px] h-[52px] w-[170px] text-white text-[13px] font-bold'>Download The App</button>
                </div>

                <div className='flex slg:hidden items-end'>
                <Hamburger />
            </div>
            </div>




        </div>
    )
}

export default Header