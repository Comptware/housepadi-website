import React from 'react'
import Grids1 from '../../assets/image/Grids1.svg'
import Grid2 from '../../assets/image/Grid3.svg'
import Grid3 from '../../assets/image/Grid2.svg'
import Grid4 from '../../assets/image/Grid4.svg'
import Grocery from '../../assets/icons/grocery.svg'
import Laundry from '../../assets/icons/laundry.svg'
import Cleaning from '../../assets/icons/cleaning.svg'
import Meals from '../../assets/icons/meals.svg'
import Grocery_xs from '../../assets/image/Grocery_xs.svg'
import Laundry_xs from '../../assets/image/Laundry_xs.svg'
import Cleaning_xs from '../../assets/image/Cleaning_xs.svg'
import Meals_xs from '../../assets/image/Meals_xs.svg'




const SectionOne = () => {


    return (
        <div id='services' className='bg-[#F6F6F6] flex flex-col gap-[87px] pb-14 px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px]'>
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
                        {/* <p className=''>Residential Cleaning</p> */}

                        <div className='flex items-center gap-[16px]  pt-[32px]'>
                            <p className='text-[23px] text-[#002616] font-bold'>Residential Cleaning</p>
                            <p className='border border-[#7DD13A] text-[#7DD13A] w-[75px] h-[17px] bg-[#4cd96327] px-[12px] py-[2px] text-[8px] rounded-[3px] flex items-center'>coming soon</p>
                        </div>
                        <p className='text-[#47566B] text-[17px]'>Experience a sparkling home with our top-notch residential cleaning service - cleanliness, just a click away.</p>
                    </div>
                </div>

                <div className='h-[480px] w-[387px] bg-white rounded-[10px] llg:mt-[46px]'>
                    <Grid4 />

                    <div className='flex flex-col gap-[19px] px-[13px]'>
                       
                        
                        <div className='flex items-center gap-[16px] pt-[32px]'>
                             <p className='font-bold text-[23px] text-[#002616]'>Grocery Shopping</p>
                            <p className='border border-[#7DD13A] text-[#7DD13A] w-[75px] h-[17px] bg-[#4cd96327] px-[12px] py-[2px] text-[8px] rounded-[3px] flex items-center'>coming soon</p>
                        </div>
                        <p className='text-[#47566B] text-[17px]'>Enjoy our hassle-free grocery shopping service - your essentials, delivered with care.</p>
                    </div>
                </div>

            </div>

            <div className='xs:hidden flex flex-col gap-[40px] text-[#203129]'>
                <div className='pt-[70px] flex flex-col xs:hidden'>
                    <p className='text-[40px] font-bold text-[#002616]'>Our <span className='text-[#7DD13A]'>Services</span></p>
                    <p className='text-[20px] text-[#203129]'>Here are a couple of sevice we offer</p>
                </div>


                <div className='hidden 4xs:grid grid-cols-1 justify-items-center gap-[20px]'>

                    <div className='w-[337px] h-[430px] rounded-[8px] bg-white flex flex-col gap-[27px]'>
                        <Meals_xs />

                        <div className='flex flex-col gap-[16px] px-[10px]'>
                            <p className='text-[#002616] font-bold text-[20px]'>Chef Cooked Meals</p>

                            <p className='text-[16px] text-[#47566b90]'>Experience convenience with our premium laundry service - clean clothes, no effort required.</p>
                        </div>
                    </div>

                    <div className='w-[337px] h-[430px] rounded-[8px] bg-white flex flex-col gap-[27px]'>
                        <Laundry_xs />

                        <div className='flex flex-col gap-[16px] px-[10px]'>
                            <p className='text-[#002616] font-bold text-[20px]'>Laundry Services</p>

                            <p className='text-[16px] text-[#47566b90]'>Experience a sparkling home with our top-notch residential cleaning service - cleanliness, just a click away.</p>
                        </div>
                    </div>


                    <div className='w-[337px] h-[430px] rounded-[8px] bg-white flex flex-col gap-[27px]'>
                        <Cleaning_xs />

                        <div className='flex flex-col gap-[16px] px-[10px]'>
                            <div className='flex items-center gap-[16px]'>
                                <p className='text-[#002616] font-bold text-[20px]'>Residential Cleaning</p>
                                <p className='border border-[#7DD13A] text-[#7DD13A] w-[75px] h-[17px] bg-[#4cd96327] px-[12px] py-[2px] text-[8px] rounded-[3px] flex items-center'>coming soon</p>
                            </div>

                            <p className='text-[16px] text-[#47566b90]'>Enjoy our hassle-free grocery shopping service - your essentials, delivered with care.</p>
                        </div>
                    </div>


                    <div className='w-[337px] h-[430px] rounded-[8px] bg-white flex flex-col gap-[27px]'>
                        <Grocery_xs />

                        <div className='flex flex-col gap-[16px] px-[10px]'>
                            <div className='flex items-center gap-[16px]'>
                                <p className='text-[#002616] font-bold text-[20px]'>Grocery Shopping</p>
                                <p className='border border-[#7DD13A] text-[#7DD13A] w-[75px] h-[17px] bg-[#4cd96327] px-[12px] py-[2px] text-[8px] rounded-[3px] flex items-center'>coming soon</p>
                            </div>

                            <p className='text-[16px] text-[#47566b90]'>Indulge in our chef-crafted meal service - gourmet dining, delivered right to your doorstep.</p>
                        </div>
                    </div>

                </div>



                <div className='4xs:hidden grid grid-cols-1 justify-items-center gap-[20px]'>
                    {/* {grid.map(items => */}

                    <div className='bg-white h-[160px] w-full p-[19px] rounded-[7px] flex flex-col gap-[20px]'>
                        <div className='h-[55px] w-[56px] rounded-[60px] bg-blue-400 flex justify-center items-center'>
                            <Laundry />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-[#002616]'>Laundry Service</p>
                            <p className='text-[13px]'>reliable laundry service that fits your busy schedule</p>
                        </div>

                    </div>


                    <div className='bg-white h-[160px] w-full p-[19px] rounded-[7px] flex flex-col gap-[20px]'>
                        <div className='h-[55px] w-[56px] rounded-[60px] bg-blue-400 flex justify-center items-center'>
                            <Meals />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-[#002616]'>Chef Cooked Meals</p>
                            <p className='text-[13px]'>reliable laundry service that fits your busy schedule</p>
                        </div>

                    </div>

                    <div className='bg-white h-[160px] w-full p-[19px] rounded-[7px] flex flex-col gap-[20px]'>
                        <div className='h-[55px] w-[56px] rounded-[60px] bg-blue-400 flex justify-center items-center'>
                            <Grocery />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-[#002616]'>Grocery Shopping</p>
                            <p className='text-[13px]'>reliable laundry service that fits your busy schedule</p>
                        </div>

                    </div>

                    <div className='bg-white h-[160px] w-full p-[19px] rounded-[7px] flex flex-col gap-[20px]'>
                        <div className='h-[55px] w-[56px] rounded-[60px] bg-blue-400 flex justify-center items-center'>
                            <Cleaning />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='font-bold text-[#002616]'>Home/Residential cleaning</p>
                            <p className='text-[13px]'>reliable laundry service that fits your busy schedule</p>
                        </div>

                    </div>
                    {/* )} */}



                </div>


            </div>

        </div>
    )
}

export default SectionOne 