import React from 'react'
import Phone1 from '../../assets/image/Phone1.svg'
import Phone2 from '../../assets/image/Phone2.svg'
import Swirly from '../../assets/icons/Swirly.svg'
import Grid_1 from '../../assets/icons/Grid_1.svg'
import Grid_2 from '../../assets/icons/Grid_2.svg'
import Grid_3 from '../../assets/icons/Grid_3.svg'
import Grid_4 from '../../assets/icons/Grid_4.svg'


const SectionTwo = () => {
    return (
        <div>
            <div className='hidden md:flex flex-col'>
                <div className='flex flex-col-reverse slg:flex-row w-full gap-[40px] slg:gap-[15px] xxlg:gap-[30px] pt-[100px] px-[20px] sm:px-[50px] md:px-[60px] xxlg:px-[100px]'>
                    <div className='w-full flex justify-center'>
                        <Phone1 />
                    </div>

                    <div className='w-full flex flex-col gap-[22px] justify-center'>
                        <p className='text-[40px] font-bold text-[#002616]'>Laundry Preferences</p>
                        <p className='text-[24px] text-[#203129]'>Choose your laundry preference in our app - Wash & Fold or Wash, Iron and Fold for complete convenience!</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col slg:flex-row w-full gap-[40px] slg:gap-[15px] xxlg:gap-[30px] pt-[100px] px-[20px] sm:px-[50px] md:px-[60px] xxlg:px-[100px]'>
                        <div className='w-full flex flex-col gap-[22px] justify-center'>
                            <p className='text-[40px] font-bold text-[#002616]'>Personalize Your Plate: Meal Choices at Your Fingertips!</p>
                            <p className='text-[24px] text-[#203129]'>Tailor your meals in our app - regular, bowl, or special diets, ordered monthly, weekly, or as a one-off treat!</p>
                        </div>

                        <div className='w-full flex justify-center'>
                            <Phone2 />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[35px] md:hidden pt-[84px] px-[20px] sm:px-[40px] pb-[115px]'>
                <div className='flex flex-col gap-[25px]'>
                    <p className='font-bold text-[40px] text-[#002616]'>Simplify your home service needs <span className='text-[#7DD13A]'>today</span></p>

                    <div className='flex justify-center '>
                        <Swirly />
                    </div>
                </div>

                <div className='grid grid-cols-2 justify-items-center gap-[20px] 2xs:gap-[35px] px-0 3xs:px-[12px] 2xs:px-[70px] xs:px-[100px] sm:px-[130px]'>
                    <div><Grid_1 /></div>
                    <div className='mt-[32px]'><Grid_2 /></div>
                    <div><Grid_3 /></div>
                    <div className='mt-[32px]'><Grid_4 /></div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo