import React, { useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
import Hamburger from '../../assets/image/Hamburger.svg'
import Lock from '../../assets/icons/Lock.svg'

const Header = ({ onDownload, onService, onPricing, onServices, onContact }) => {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };
    
    const handleService = () => {
        setOpen(!open);
    };


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

                <div className=' items-end gap-[35px] slg:gap-[51px] text-[20px] hidden llg:flex'>
                    <button onClick={onService}>Service</button>
                    <button onClick={onPricing}>Pricing</button>
                    <button onClick={onContact}>Contact Us</button>
                    <button onClick={onDownload} className='bg-[#002616] rounded-[190px] h-[52px] w-[170px] text-white text-[13px] font-bold'>Download The App</button>
                </div>

                <div onClick={handleOpen} className='flex llg:hidden items-end cursor-pointer'>
                    <Hamburger />
                </div>
            </div>


            {open ? '' : <div className='slg:hidden flex flex-col justify-start items-start bg-[#7DD13A] px-5 sm:px-10 py-5 z-[999] fixed m-auto top-36 sm:top-24 left-0 right-0 h-[240px] w-[95%] sm:w-[80%] rounded-[16px] transition-all duration-150 ease-in-out'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div onClick={onServices} className='flex justify-start items-center hover:text-[#002616] hover:font-bold text-white text-[20px] font-light space-x-14 mb-6 cursor-pointer'><p onClick={handleService}>Service</p></div>
                    <div onClick={onPricing} className='flex justify-start items-center hover:text-[#002616] hover:font-bold text-white text-[20px] font-light space-x-14 mb-6 cursor-pointer'><p onClick={handleService}>Pricing</p></div>
                    <div className='flex justify-start items-center hover:text-[#002616] hover:font-bold text-white text-[20px] font-light space-x-14 mb-6 cursor-pointer'><p>Contact Us</p></div>
                    <div onClick={onDownload} className='flex justify-start items-center hover:text-white hover:font-bold text-[20px] text-[#002616] font-light space-x-14 mb-6 cursor-pointer'><p onClick={handleService}>Download The App</p></div>

                </div>


            </div>}





        </div>
    )
}

export default Header