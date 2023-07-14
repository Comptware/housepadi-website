import { GREETINGS, GREETINGSS } from 'utils/greetings'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Phone from '../../assets/image/Phone.svg'
import Iphone from '../../assets/image/iPhone.svg'
import useInterval from 'components/hooks/useInterval'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from "react";
import Group from '../../assets/image/Group.png'
import Brands from 'components/brandCards/Brands'

const Banner = () => {

    const greetingRef = useRef(null);
    const greetingHeight = 243
    const [currentGreeting, setCurrentGreeting] = useState(0);

    useInterval(
        () => {
            handleSwitchGreeting();
        },
        // Delay in milliseconds or null to stop it
        currentGreeting <= (GREETINGSS.length - 1) * greetingHeight ? 3000 : null
    );

    const handleSwitchGreeting = () => {
        setCurrentGreeting(greetingRef?.current?.scrollTop + greetingHeight);
        greetingRef.current.scrollTop += greetingHeight;
    };


    return (
        <div className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
            <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>

                <div
                    className="  justify-start items-start no-scrollbar overflow-y-auto scroll-smooth snap-mandatory snap-y h-[260px] xlg:h-[240px]" ref={greetingRef}
                    onScroll={() => setCurrentGreeting(greetingRef?.current?.scrollTop)}>

                    {GREETINGSS.map((item, i) => (
                        <Brands
                            key={i}
                            content={item.content}
                            brand={item.brand}
                        />

                    ))}

                </div>


                <div className='sm:flex gap-[13px] hidden justify-center slg:justify-start'>
                    <Link href={'https://onelink.to/9weng7'} >
                        <Google />
                    </Link>

                    <Link href={'https://onelink.to/9weng7'} >
                        <Apple />
                    </Link>
                </div>

                <Link href={'https://onelink.to/9weng7'}>
                    <button className='bg-[#002616] text-white h-[48px] w-[161px] rounded-[195px] sm:hidden'>Get Started</button>
                </Link>
            </div>

            <div className='w-full justify-center slg:justify-end slg:mt-[130px] hidden 2xs:flex'>

                <div
                    className={`w-full bg-contain h-[500px] bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-bg`}
                />
            </div>

            <div className='w-full flex justify-center slg:justify-end slg:mt-[130px] bg-[#7DD13A] 2xs:hidden'>
                {/* <Iphone /> */}
                <div
                    className={`w-full bg-contain h-[400px] bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center phone-bg-xs`}
                />
            </div>


        </div>


    )
}


export default Banner

