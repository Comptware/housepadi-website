
// import Apple from '../../assets/icons/apple.svg'
// import Google from '../../assets/icons/google.svg'
// import Phone from '../../assets/image/Phone.svg'
// import Iphone from '../../assets/image/iPhone.svg'

// import React, { useState } from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import PageOne from './pages/PageOne'
// import PageTwo from './pages/PageTwo'
// import PageThree from './pages/PageThree'
// import PageFour from './pages/PageFour'



// const Banner = () => {

//     const [index, setIndex] = useState(0);

//     const handleSwipe = (index) => {
//         setIndex(index);
//         console.log('doen')
//     };

//     const pages = [
//         <div key={1}><PageOne /></div>,
//         <div key={2}><PageTwo /></div>,
//         <div key={3}><PageThree /></div>,
//         <div key={4}><PageFour /></div>

//     ]

//     return (
//         // <div className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
//         //     <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
//         //         <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
//         //             <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Laundry Services</span> Sorted With Housepadi</p>
//         //             <p className='text-[19px] text-[#203129]'>Get clean clothes within 48 hours, FREE pick up and delivery</p>
//         //         </div>

//         //         <div className='sm:flex gap-[13px] hidden justify-center slg:justify-start'>
//         //             <Google />
//         //             <Apple />
//         //         </div>

//         //         <div>
//         //             <button className='bg-[#002616] text-white h-[48px] w-[161px] rounded-[195px] sm:hidden'>Get Started</button>
//         //         </div>
//         //     </div>

//         //     <div className='w-full justify-center slg:justify-end slg:mt-[130px] hidden 2xs:flex'>
//         //         <Phone/>
//         //     </div>

//         //     <div className='w-full flex justify-center slg:justify-end slg:mt-[130px] bg-[#7DD13A] 2xs:hidden'>
//         //         <Iphone/>
//         //     </div>


//         // </div>

        
//         <SwipeableViews index={index} onChangeIndex={handleSwipe}>
//             {pages}
//         </SwipeableViews>
//     )
// }


// export default Banner


import React from 'react'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Phone from '../../assets/image/Phone.svg'
import Iphone from '../../assets/image/iPhone.svg'
import HorizontalScroll from "react-scroll-horizontal";




const Banner = () => {

    const child = { width: `100vw`, height: `` }

    return (
        <div>
            <div className='apps'>
                <HorizontalScroll>

                <div style={child} className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
                        <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                            <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
                                <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Chef cooked meals</span> Sorted With Housepadi</p>
                                <p className='text-[19px] text-[#203129]'>Get delicious meals delivered to you on a schedule</p>
                                <br/>
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


                    <div style={child} className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
                        <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                            <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
                                <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Laundry Services</span> Sorted With Housepadi</p>
                                <p className='text-[19px] text-[#203129]'>Get clean clothes within 48 hours, FREE pick up and delivery</p>
                                <br/>
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


                    <div style={child} className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
                        <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                            <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
                                <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Grocery shopping</span> Sorted With Housepadi</p>
                                <p className='text-[19px] text-[#203129]'>Let us ease your stress of grocery shopping on the weekend by delivering your basic needs while offering unbeatable prices</p>
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


                    <div style={child} className='w-full flex flex-col slg:flex-row gap-10 px-0 sm:px-[50px] md:px-[70px] slg:px-[100px]'>
                        <div className='w-full flex flex-col mt-[65px] slg:mt-[130px] gap-[60px] px-[20px] sm:px-0'>
                            <div className='flex flex-col items-start sm:items-center slg:items-start gap-[30px] text-start sm:text-center slg:text-start'>
                                <p className='text-[#002616] text-[32px] sm:text-[36px] xlg:text-[40px]'>Get Your <span className='text-[#7DD13A]'>Cleaning Service</span> Sorted With Housepadi</p>
                                <p className='text-[19px] text-[#203129]'>Relax, while your home cleaning needs are taken care of by trained professionals</p>
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
                </HorizontalScroll>

            </div>

        </div>
    )
}


export default Banner