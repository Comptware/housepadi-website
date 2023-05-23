import React from 'react'
import Grids1 from '../../assets/image/Grids1.svg'
import Grid2 from '../../assets/image/Grid3.svg'
import Grid3 from '../../assets/image/Grid2.svg'
import Grid4 from '../../assets/image/Grid4.svg'
import Grocery from '../../assets/icons/grocery.svg'
import Laundry from '../../assets/icons/laundry.svg'
import Cleaning from '../../assets/icons/cleaning.svg'
import Meals from '../../assets/icons/meals.svg'



const SectionOne = () => {

    const grid = [
        { title: 'Laundry Service', content: 'reliable laundry service that fits your busy schedule', Image: Laundry },
        { title: 'Chef Cooked Meals', content: 'reliable laundry service that fits your busy schedule', Image: Meals },
        { title: 'Grocery Shopping', content: 'reliable laundry service that fits your busy schedule', Image: Grocery },
        { title: 'Home/Residential cleaning', content: 'reliable laundry service that fits your busy schedule', Image: Cleaning },
    ]


    return (
        <div className='bg-[#F6F6F6] flex flex-col gap-[87px] pb-14 px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px]'>
            <div className='pt-[70px] hidden xs:flex flex-col'>
                <p className='text-[40px] font-bold text-[#002616]'>Our Services</p>
                <p className='text-[24px] text-[#203129]'>Here are a couple of sevice we offer</p>
            </div>

            <div className='xs:grid grid-cols-1 llg:grid-cols-2 hidden gap-[55px] xlg:px-[70px] xxlg:px-[120px] justify-items-center llg:justify-items-center'>
                <div className='h-[480px] w-[387px] bg-white rounded-[10px]'>
                    <Grids1 />

                    <div className='flex flex-col gap-[19px] px-[13px]'>
                        <p className='font-bold text-[23px] pt-[32px]'>Chef Cooked Meals</p>
                        <p className='text-[#47566B] text-[17px]'>Indulge in our chef-crafted meal service - gourmet dining, delivered right to your doorstep.</p>
                    </div>
                </div>

                <div className='h-[480px] w-[387px] bg-white rounded-[10px] llg:mt-[46px]'>
                    <Grid3 />

                    <div className='flex flex-col gap-[19px] px-[13px]'>
                        <p className='font-bold text-[23px] pt-[32px]'>Laundry Services</p>
                        <p className='text-[#47566B] text-[17px]'>Experience convenience with our premium laundry service - clean clothes, no effort required.</p>
                    </div>
                </div>

                <div className='h-[480px] w-[387px] bg-white rounded-[10px]'>
                    <Grid2 />

                    <div className='flex flex-col gap-[19px] px-[13px]'>
                        <p className='font-bold text-[23px] pt-[32px]'>Residential Cleaning</p>
                        <p className='text-[#47566B] text-[17px]'>Experience a sparkling home with our top-notch residential cleaning service - cleanliness, just a click away.</p>
                    </div>
                </div>

                <div className='h-[480px] w-[387px] bg-white rounded-[10px] llg:mt-[46px]'>
                    <Grid4 />

                    <div className='flex flex-col gap-[19px] px-[13px]'>
                        <p className='font-bold text-[23px] pt-[32px]'>Grocery Shopping</p>
                        <p className='text-[#47566B] text-[17px]'>Enjoy our hassle-free grocery shopping service - your essentials, delivered with care.</p>
                    </div>
                </div>

            </div>

            <div className='xs:hidden flex flex-col gap-[40px] text-[#203129]'>
                <div className='pt-[70px] flex flex-col xs:hidden'>
                    <p className='text-[40px] font-bold text-[#002616]'>Our <span className='text-[#7DD13A]'>Services</span></p>
                    <p className='text-[20px] text-[#203129]'>Here are a couple of sevice we offer</p>
                </div>



                <div className='grid grid-cols-1 justify-items-center gap-[20px]'>
                    {grid.map(items =>
                        <div className='bg-white h-[160px] w-full p-[19px] rounded-[7px] flex flex-col gap-[20px]'>
                            <div className='h-[55px] w-[56px] rounded-[60px] bg-blue-400 flex justify-center items-center'>
                                <items.Image />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='font-bold text-[#002616]'>{items.title}</p>
                                <p className='text-[13px]'>{items.content}</p>
                            </div>

                        </div>
                    )}



                </div>


            </div>

        </div>
    )
}

export default SectionOne 