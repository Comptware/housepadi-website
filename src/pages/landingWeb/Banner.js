
import { GREETINGS } from 'utils/greetings'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Phone from '../../assets/image/Phone.svg'
import Iphone from '../../assets/image/iPhone.svg'
import useInterval from 'components/hooks/useInterval'
import React, { useEffect, useRef, useState } from "react";




const Banner = () => {

    const greetingRef = useRef(null);
    const greetingHeight = 265
    const [currentGreeting, setCurrentGreeting] = useState(0);

    useInterval(
        () => {
            handleSwitchGreeting();
        },
        // Delay in milliseconds or null to stop it
        currentGreeting <= (GREETINGS.length - 1) * greetingHeight ? 3000 : null
    );

    const handleSwitchGreeting = () => {
        setCurrentGreeting(greetingRef?.current?.scrollTop + greetingHeight);
        greetingRef.current.scrollTop += greetingHeight;
    };


    return (
        <div className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
            <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                <div
                    className=" grid grid-cols-1 gap-[50px] 3xs:gap-[69px] 2xs:gap-[3px] xs:gap-0 justify-start items-start no-scrollbar overflow-y-auto scroll-smooth snap-mandatory snap-y h-[280px] 2xs:h-[240px] slg:h-[352px] xlg:h-[270px]" ref={greetingRef}
                    onScroll={() => setCurrentGreeting(greetingRef?.current?.scrollTop)}>
                    {/* {GREETINGS.map(greeting => ( */}
                        <div
                            // key={greeting}
                            className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start 2xs:pt-1 text-[28px] '>
                            <p className='text-[#002616] slg:text-[32px] sm:text-[36px] xxlg:text-[36px]'>Get Your <span className='text-[#7DD13A]'>Laundry Service</span> Sorted With Housepadi</p>
                            <p className='text-[19px] text-[#203129] pb-[50px] 3xs:pb-[40px] 2xs:pb-[80px] slg:pb-[104px] xxlg:pb-[111px]'>Get clean clothes within 48 hours, FREE pick up and delivery</p>
                        </div>

                        <div
                            // key={greeting}
                            className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start pb-4 2xs:pb-24 sm:pb-20 slg:pt-0'>
                            <p className='text-[#002616] slg:text-[32px] text-[28px] sm:text-[36px] xxlg:text-[36px]'>Get Your <span className='text-[#7DD13A]'>Chef Cooked meals</span> Sorted With Housepadi</p>
                            <p className='text-[19px] text-[#203129]'>Get delicious meals delivered to you on a schedule</p>
                        </div>

                        <div
                            // key={greeting}
                            className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start slg:pt-10 xlg:pt-0'>
                            <p className='pt-3 2xs:pt-8 slg:pt-0 text-[#002616] text-[28px] slg:text-[32px] sm:text-[36px] xxlg:text-[36px]'>Get Your <span className='text-[#7DD13A]'>Cleaning Service</span> Sorted With Housepadi</p>
                            <p className='text-[19px] text-[#203129] 4xs:pb-[70px] 2xs:pb-[60px] slg:pb-[40px]'>Relax, while your home cleaning needs are taken care of by trained professionals</p>
                        </div>

                        <div
                            // key={greeting}
                            className='flex flex-col items-start sm:items-center slg:items-start gap-[20px] text-start sm:text-center slg:text-start pt-[10px] 2xs:pt-[30px] slg:pt-9'>
                            <p className='text-[#002616] text-[28px] slg:text-[32px] sm:text-[36px] xxlg:text-[36px]'>Get Your <span className='text-[#7DD13A]'>Grocery shopping</span> Sorted With Housepadi</p>
                            <p className='text-[19px] text-[#203129] 2xs:pb-5 xlg:pb-0 xxlg:pb-5'>Let us ease your stress of grocery shopping on the weekend by delivering your basic needs while offering unbeatable prices</p>
                        </div>
                    {/* ))} */}
                </div>

                <div className='sm:flex gap-[13px] hidden justify-center slg:justify-start'>
                    <Google />
                    <Apple />
                </div>

                <div>
                    <button className='bg-[#002616] text-white h-[48px] w-[161px] rounded-[195px] sm:hidden'>Get Started</button>
                </div>
            </div>

            <div className='w-full justify-center slg:justify-end slg:mt-[130px] hidden 2xs:flex'>
                <Phone />
            </div>

            <div className='w-full flex justify-center slg:justify-end slg:mt-[130px] bg-[#7DD13A] 2xs:hidden'>
                <Iphone />
            </div>


        </div>


    )
}


export default Banner

