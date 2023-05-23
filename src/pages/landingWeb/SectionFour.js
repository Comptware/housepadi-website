import React, { useState } from 'react'
import Chevron from '../../assets/icons/chevron.svg'
import Chevron_down from '../../assets/icons/chevron_down.svg'

const SectionFour = () => {

    // const [dropDown, setdropDown] = useState(true)

    return (
        <div className='pt-[100px] pb-[140px] bg-[#F6F6F6] px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px] text-[#002616]'>
            <div className='pb-[85px]'>
                <p className='text-[#002616] text-[36px] sm:text-[48px] w-[300px] sm:w-[456px] font-bold'>Frequently asked <span className='text-[#7DD13A]'>questions</span></p>
            </div>

            <div className='flex flex-col gap-[22px]'>
                <div className='bg-white p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Can I choose my meals?</p>

                        <Chevron_down />
                    </div>

                    <p className='text-[#3c3c43b5]'>Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</p>
                </div>

                <div className='bg-white p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>When will i recieve my order?</p>

                        <Chevron />
                    </div>

                </div>

                <div className='bg-white p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Can I skip a delivery?</p>

                        <Chevron />
                    </div>

                </div>

                <div className='bg-white p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Can I add an Extra to my delivery?</p>

                        <Chevron />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default SectionFour

