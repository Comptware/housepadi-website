import React from 'react'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Swirl from '../../assets/image/Swirl.svg'
import About from '../../assets/image/About.svg'
import Sparkle from '../../assets/image/Sparkle.svg'
import Link from 'next/link'

const SectionThree = () => {


    return (
        <div>
            <div id='offers' className='flex flex-col  pb-[150px]'>

                <div className='bg-white hidden md:flex flex-col'>
                    <div className='pt-[100px] pb-[58px] px-[70px]'>
                        <div>
                            <p className='text-[40px] font-bold text-[#002616]'>Our Offers</p>
                            <p className='text-[24px] text-[#203129]'>Download our app today to enjoy special offers!</p>
                        </div>
                    </div>

                    <div className='gap-[58px] hidden md:flex flex-col px-[70px]'>
                        <div className='grid grid-cols-1 justify-items-center xxlg:grid-cols-2 gap-x-[50px] gap-y-[50px]'>

                            <div className='bg-[#E6FAE9] h-[304px] w-[593px] xxlg:w-[550px] rounded-[12px]'>
                                <div className='h-[40px] w-[53%] bg-[#7DD13A] text-[23px] text-white mt-[37px] mb-[40px]'>
                                    <p className='px-[30px]'>CHEF COOKED MEALS</p>
                                </div>

                                <div className='px-[30px]'>
                                    <p className='text-[42px] font-bold mb-[20px]'>Meal Bowls</p>
                                    <p className='text-[20px]'>Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!</p>
                                </div>
                            </div>


                            <div className='bg-[#D8F4FF] h-[304px] w-[593px] xxlg:w-[550px] rounded-[12px]'>
                                <div className='h-[40px] w-[33%] bg-[#2BB8EF] text-[23px] text-white mt-[37px] mb-[40px]'>
                                    <p className='px-[30px]'>LAUNDRY</p>
                                </div>

                                <div className='px-[30px]'>
                                    <p className='text-[42px] font-bold mb-[20px]'>Discount on your Laundry</p>
                                    <p className='text-[20px]'>Freshen up with our special offer - premium laundry services now at irresistible prices!</p>
                                </div>
                            </div>


                            <div className='bg-[#E6FAE9] h-[304px] w-[593px] xxlg:w-[550px] rounded-[12px]'>
                                <div className='h-[40px] w-[53%] bg-[#7DD13A] text-[23px] text-white mt-[37px] mb-[40px]'>
                                    <p className='px-[30px]'>CHEF COOKED MEALS</p>
                                </div>

                                <div className='px-[30px]'>
                                    <p className='text-[42px] font-bold mb-[20px]'>15% Off First Meal Order</p>
                                    <p className='text-[20px]'>Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!</p>
                                </div>
                            </div>


                            <div className='bg-[#E6FAE9] h-[304px] w-[593px] xxlg:w-[550px] rounded-[12px]'>
                                <div className='h-[40px] w-[53%] bg-[#7DD13A] text-[23px] text-white mt-[37px] mb-[40px]'>
                                    <p className='px-[30px]'>CHEF COOKED MEALS</p>
                                </div>

                                <div className='px-[30px]'>
                                    <p className='text-[42px] font-bold mb-[20px]'>Get Free Dessert For Every Meal bowl!</p>
                                    {/* <p className='text-[20px]'>{items.content}</p> */}
                                </div>
                            </div>


                        </div>


                        <div className='hidden md:flex gap-[13px]'>

                            <Link href={'https://onelink.to/9weng7'} >
                                <Google />
                            </Link>

                            <Link href={'https://onelink.to/9weng7'} >
                                <Apple />
                            </Link>

                        </div>

                    </div>

                </div>





                <div className='grid md:hidden pb-20 grid-cols-1 bg-[#F5F5F5] justify-items-center gap-x-[50px] gap-y-[34px]'>

                    <div className='pt-[30px] pb-[58px] px-[20px]'>
                        <div>
                            <p className='text-[40px] font-bold text-[#002616]'>Our Offers</p>
                            <p className='text-[24px] text-[#203129]'>Download our app today to enjoy special offers!</p>
                        </div>
                    </div>


                    <div className='bg-[#E6FAE9] h-[180px] xs:h-[250px] w-[334px] xs:w-[400px] rounded-[12px]'>
                        <div className='h-[22px] xs:h-[35px] w-[55%] bg-[#7DD13A] text-[12px] xs:text-[16px] text-white my-[20px]'>
                            <p className='px-[30px]'>CHEF COOKED MEALS</p>
                        </div>

                        <div className='px-[30px]'>
                            <p className='text-[24px] xs:text-[32px] font-bold mb-[20px]'>Meal Bowls</p>
                            <p className='text-[13px] xs:text-[18px]'>Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!</p>
                        </div>
                    </div>


                    <div className='bg-[#D8F4FF] h-[210px] xs:h-[300px] w-[334px] xs:w-[400px] rounded-[12px]'>
                        <div className='h-[22px] xs:h-[35px] w-[33%] bg-[#2BB8EF] text-[12px] xs:text-[16px] text-white my-[20px]'>
                            <p className='px-[30px]'>LAUNDRY</p>
                        </div>

                        <div className='px-[30px]'>
                            <p className='text-[24px] xs:text-[32px] font-bold mb-[20px]'>Discount on your Laundry</p>
                            <p className='text-[13px] xs:text-[18px]'>Freshen up with our special offer - premium laundry services now at irresistible prices!</p>
                        </div>
                    </div>


                    <div className='bg-[#E6FAE9] h-[180px] xs:h-[295px] w-[334px] xs:w-[400px] rounded-[12px]'>
                        <div className='h-[22px] xs:h-[35px] w-[55%] bg-[#7DD13A] text-[12px] xs:text-[16px] text-white my-[20px]'>
                            <p className='px-[30px]'>CHEF COOKED MEALS</p>
                        </div>

                        <div className='px-[30px]'>
                            <p className='text-[24px] xs:text-[32px] font-bold mb-[20px]'>15% Off First Meal Order</p>
                            <p className='text-[13px] xs:text-[18px]'>Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!</p>
                        </div>
                    </div>


                    <div className='bg-[#E6FAE9] h-[180px] xs:h-[250px] w-[334px] xs:w-[400px] rounded-[12px]'>
                        <div className='h-[22px] xs:h-[35px] w-[55%] bg-[#7DD13A] text-[12px] xs:text-[16px] text-white my-[20px]'>
                            <p className='px-[30px]'>CHEF COOKED MEALS</p>
                        </div>

                        <div className='px-[30px]'>
                            <p className='text-[24px] xs:text-[32px] font-bold mb-[20px]'>Get Free Dessert For Every Meal bowl!</p>
                        </div>
                    </div>

                    <div className='flex gap-[13px]'>
                        <Link href={'https://onelink.to/9weng7'} >
                            <Google />
                        </Link>

                        <Link href={'https://onelink.to/9weng7'} >
                            <Apple />
                        </Link>
                    </div>


                </div>





                <div className='flex px-[10px] 2xs:px-[20px] md:px-[45px] xlg:px-[70px]'>
                    <div className='pt-[100px] md:pt-[200px] slg:pt-[300px] w-full'>
                        <div className=' llg:h-[868px] flex flex-col gap-[87px] bg-[#F2FAEB] border xs:border-[#7DD13A] rounded-[20px]'>
                            <div className='flex pb-20'>
                                <div className='w-[15%] hidden slg:flex items-center justify-center'>
                                    <Swirl />
                                </div>

                                <div className='flex flex-col gap-[87px] p-5 slg:p-0'>
                                    <div className='flex flex-col  xxlg:w-[85%] gap-[22px] '>
                                        <div className='llg:w-[704px] pt-[50px] slg:pt-[80px] flex flex-col gap-[22px]'>
                                            <p className='text-[40px] font-bold'>About Us</p>
                                            <p className='hidden 2xs:flex text-[20px] sm:text-[24px]'>At HousePadi, we are redefining the meaning of home convinence. As a dynamic startup, we currently offer expertly crafted meals from professional chef and top-tier laundry services that bring freshness right to your door. Soon, we will be expanding our repertoire to imclude hassle-free grocery shopping and meticulous residential cleaning services. With HousePadi, you can relax knowing we have got home needs covered.</p>
                                            <div className='flex flex-col gap-10 2xs:hidden text-[20px] sm:text-[24px]'>
                                                <p className=''>At HousePadi, we are redefining the meaning of home convinence. As a dynamic startup, we currently offer expertly crafted meals from professional chef and top-tier laundry services that bring freshness right to your door. </p>
                                                <p> Soon, we will be expanding our repertoire to imclude hassle-free grocery shopping and meticulous residential cleaning services. With HousePadi, you can relax knowing we have got home needs covered.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='hidden llg:flex justify-center p-10 relative'>
                                        {/* <About /> */}
                                        <div
                                            className={`w-full bg-contain h-[190px] bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center about`}
                                        />

                                        <div className='absolute top-0 right-0'>
                                            <Sparkle />
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>





            </div>

        </div>
    )
}


export default SectionThree