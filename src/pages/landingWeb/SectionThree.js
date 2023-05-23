import React from 'react'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Swirl from '../../assets/image/Swirl.svg'
import About from '../../assets/image/About.svg'
import Sparkle from '../../assets/image/Sparkle.svg'

const SectionThree = () => {

    const grid = [
        { header: 'CHEF COOKED MEALS', title: 'Meal Bowls', content: 'Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!', header_color: 'bg-[#7DD13A]', color: 'bg-[#E6FAE9]' },
        { header: 'LAUNDRY', title: 'Discount on your Laundry', content: 'Freshen up with our special offer - premium laundry services now at irresistible prices!', header_color: 'bg-[#2BB8EF]', color: 'bg-[#D8F4FF]' },
        { header: 'CHEF COOKED MEALS', title: '15% Off First Meal Order', content: 'Get a taste of our special offer - delightful meal bowls, now at unbeatable prices!', header_color: 'bg-[#7DD13A]', color: 'bg-[#E6FAE9]' },
        { header: 'CHEF COOKED MEALS', title: 'Get Free Dessert For Every Meal bowl!', header_color: 'bg-[#7DD13A]', color: 'bg-[#E6FAE9]' },
    ]


    return (
        <div className='hidden md:flex flex-col  pb-[150px]'>
            <div className='pt-[100px] pb-[58px] px-[70px]'>
                <div>
                    <p className='text-[40px] font-bold text-[#002616]'>Our Offers</p>
                    <p className='text-[24px] text-[#203129]'>Download our app today to enjoy special offers!</p>
                </div>
            </div>

            <div className='gap-[58px] flex flex-col px-[70px]'>
                <div className='grid grid-cols-1 justify-items-center xxlg:grid-cols-2 gap-x-[50px] gap-y-[50px]'>

                    {grid.map(items =>
                        <div className={`${items.color} h-[304px] w-[593px] xxlg:w-[550px] rounded-[12px]`}>
                            <div className={`h-[40px] w-[53%] ${items.header_color} text-[23px] text-white mt-[37px] mb-[40px]`}>
                                <p className='px-[30px]'>{items.header}</p>
                            </div>

                            <div className='px-[30px]'>
                                <p className='text-[42px] font-bold mb-[20px]'>{items.title}</p>
                                <p className='text-[20px]'>{items.content}</p>
                            </div>
                        </div>
                    )}

                </div>


                <div className='hidden md:flex gap-[13px]'>
                    <Google />
                    <Apple />
                </div>

            </div>


            <div className='hidden slg:flex px-[45px] xlg:px-[70px]'>
                <div className='pt-[300px] w-full'>
                    <div className='h-[868px] flex flex-col gap-[87px] bg-[#F2FAEB] border border-[#7DD13A] rounded-[20px]'>
                        <div className='flex'>
                            <div className='w-[15%] flex items-center justify-center'>
                                <Swirl />
                            </div>

                            <div className='flex flex-col gap-[87px]'>
                                <div className='flex flex-col w-[90%] xxlg:w-[85%] gap-[22px] '>
                                    <div className='w-[704px] pt-[80px] flex flex-col gap-[22px]'>
                                        <p className='text-[40px] font-bold'>About Us</p>
                                        <p className='text-[24px]'>At HousePadi, we're redefining the meaning of home convenience. As a dynamic startup, we currently offer expertly crafted meals from professional chefs and top-tier laundry services that bring freshness right to your door. Soon, we'll be expanding our repertoire to include hassle-free grocery shopping and meticulous residential cleaning services. With HousePadi, you can relax knowing we've got your home needs covered.</p>
                                    </div>
                                </div>

                                <div className='flex justify-center p-10 relative'>
                                    <About />

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
    )
}


export default SectionThree