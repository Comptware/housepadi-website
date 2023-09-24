import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
import Hamburger from '../../assets/image/Hamburger.svg'
import Lock from '../../assets/icons/Lock.svg'
import Link from 'next/link'

const Header = ({ onDownload, onService, onPricing, onServices, onContact }) => {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleService = () => {
        setOpen(!open);
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            if (scrollPosition > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


    }, []);

    return (
        <header className="header">
            <div className={`header-content ${isSticky ? 'sticky bg-[#ffffff] pb-3 z-30 shadow shadow-b-[a29f9f51]' : ''}`}>

                <div className='flex flex-col bg-white sm:bg-transparent gap-[20px] justify-between pt-[20px] sm:pt-[30px] py-5 sm:py-0 px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px]'>

                    <div className="w-full flex sm:hidden">
                        <div className="h-[36px] w-full rounded-[10px] bg-[#0000000a] px-[10px] flex justify-center items-center">

                            <div className='flex items-center gap-[5px] text-[17px] text-black'>
                                <Lock />
                                <p>housepadi.ng</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <Link href={'/'} className=' gap-2 flex items-end'>
                            <Logo />
                            <p className='text-[24px] font-bold'>HousePadi</p>
                        </Link>

                        <div className=' items-end gap-[35px] slg:gap-[51px] text-[20px] hidden llg:flex'>
                            <button onClick={onService}>Service</button>
                            <button onClick={onPricing}>Pricing</button>
                            <button onClick={onContact}>Contact Us</button>
                            <Link href={'https://onelink.to/9weng7'}><button className='bg-[#002616] rounded-[190px] h-[52px] w-[170px] text-white text-[13px] font-bold'>Download The App</button></Link>

                        </div>

                        <div onClick={handleOpen} className='flex llg:hidden items-end cursor-pointer'>
                            <Hamburger />
                        </div>
                    </div>


                    {open ? '' : <div className='llg:hidden flex flex-col justify-start items-start bg-[#e1f7ce] px-5 sm:px-10 py-5 z-[999] fixed m-auto left-0 right-0 top-0 h-[100vh] w-[100vw]  transition-all duration-150 ease-in-out'>
                        <div className='flex w-full justify-between px-2 sm:px-6 pt-5'>
                            <div className='flex items-end gap-2'>
                                <Logo />
                                <p className='text-[24px] font-bold'>HousePadi</p>
                            </div>
                            <div onClick={handleOpen} className='flex items-center cursor-pointer text-[24px] font-bold'>X</div>
                        </div>


                        <ul className='px-6 w-full mt-[100px]'>
                            <li onClick={onServices} className=' text-[24px] justify-start items-center text-[#002616] font-bold space-x-14 py-[20px] cursor-pointer'><p onClick={handleService}>Service</p></li>
                            <li onClick={onPricing} className=' text-[24px] justify-start items-center text-[#002616] font-bold space-x-14 py-[20px] cursor-pointer'><p onClick={handleService}>Pricing</p></li>
                            <li onClick={onContact} className=' text-[24px] justify-start items-center text-[#002616] font-bold space-x-14 py-[20px] cursor-pointer'><p onClick={handleService}>Contact Us</p></li>
                            <li><Link href={'https://onelink.to/9weng7'}><div className=' text-[24px] justify-start items-center text-[#002616] font-bold space-x-14 py-[20px] cursor-pointer'><p onClick={handleService}>Download The App</p></div></Link></li>
                        </ul>


                    </div>}





                </div>

            </div>
        </header>
    )
}

export default Header