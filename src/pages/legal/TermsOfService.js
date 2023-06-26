import Footer from './Footer'
import Header from './privacy-policy/Header'
import React from 'react'

const TermsOfService = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col justify-start items-start h-fit w-full py-14 px-5 sm:px-[50px] md:px-[70px] slg:px-[100px] pt-8'>
                <h1 className="text-black bold-font text-3.5xl mb-4">
                    Terms of Service
                </h1>

                <p>
                    At HousePadi, we take great pride in serving you & ensuring you get the best possible experience from start to finish.
                    In order to do this while ensuring equity & fairness we’ve highlighted some of our Terms of Service on the following topics.
                    We will approve a partial or full refund or replacement for the circumstances listed below after verification <br /><br />
                </p>

                <p className=''>
                    <span className='font-bold'>Wrong order delivered </span>– when a mix up causes the wrong/ incorrect item to be delivered. <br /> <br />
                    <span className='font-bold'>Damaged/Missing clothing Item</span> – When any clothing item we picked is physically damaged or missing <br /> <br />
                    <span className='font-bold'>Late deliveries</span> - We do not offer doorstep deliveries after 8pm for security reasons both for you & our riders. Kindly ensure riders have access into your estate or ensure that arrangements are made for a pick up from the estate gate if access is not granted. For apartments/ high rises, ensure you make arrangements for the order to be picked up from the ground floor/ gate. <br /> <br />
                    <span className='font-bold'>Spilled/ damaged items</span> – when packaging gets damage or food is spilled during delivery for any reason. <br /> <br />
                    <span className='font-bold'>Complaints on food freshness</span> – when less than fresh food is sent out. <br /> <br />

                </p>

                <p>
                    However, we will not approve refunds for individual preferences such as taste, spice level, allergy triggers or comparison between brands.
                    We will not approve a refund due to a change of mind or accidental orders if preparation for the item has commenced.
                    We will not approve a refund for failed orders on the basis of the rider not being able to find, meet or communicate with the user on arrival. When our delivery partner arrives at your address, they are prompted to contact you & wait for 5 – 7 mins. If our riders have made reasonable effort to contact you without avail, you may not be eligible for a refund.
                    If you agree to have the item re-delivered after being recalled a second delivery fee would apply.
                    Please note that we will not take responsibility for the freshness on arrival of orders that were recalled due to negligence.

                </p><br /> <br />

                <p className='font-bold'>Refund & Reversal Policy</p> <br/>

                <p>
                    If you insist for a bank account refund, it will be done within a minimum of 48 – 72 business hours.

                    If you request for a bank account reversal, this will be done within 48 – 72 business hours .
                    If you have any questions, complaints or issues please email us info@housepadi.ng or visit the help/ support page on the app to see the available WhatsApp/ phone lines to speak with us directly.

                </p>



            </div>
            <Footer />
        </div>
    )
}

export default TermsOfService
