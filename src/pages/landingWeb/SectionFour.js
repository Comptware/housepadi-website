import React, { useState } from 'react'
import Chevron from '../../assets/icons/chevron.svg'
import Chevron_down from '../../assets/icons/chevron_down.svg'

const SectionFour = () => {

    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(true);
    const [open7, setOpen7] = useState(true);
    const [open8, setOpen8] = useState(true);
    const [open9, setOpen9] = useState(true);
    const [open10, setOpen10] = useState(true);
    const [open11, setOpen11] = useState(true);
    const [open12, setOpen12] = useState(true);
    const [open13, setOpen13] = useState(true);
    const [open14, setOpen14] = useState(true);
    const [open15, setOpen15] = useState(true);


    const handleOpen = () => {
        setOpen(!open);
    };

    const handleOpen2 = () => {
        setOpen2(!open2);
    };

    const handleOpen3 = () => {
        setOpen3(!open3);
    };

    const handleOpen4 = () => {
        setOpen4(!open4);
    };

    const handleOpen5 = () => {
        setOpen5(!open5);
    };

    const handleOpen6 = () => {
        setOpen6(!open6);
    };

    const handleOpen7 = () => {
        setOpen7(!open7);
    };

    const handleOpen8 = () => {
        setOpen8(!open8);
    };

    const handleOpen9 = () => {
        setOpen9(!open9);
    };

    
    const handleOpen10 = () => {
        setOpen10(!open10);
    };

    const handleOpen11 = () => {
        setOpen11(!open11);
    };

    const handleOpen12 = () => {
        setOpen12(!open12);
    };

    const handleOpen13 = () => {
        setOpen13(!open13);
    };

    const handleOpen14 = () => {
        setOpen14(!open14);
    };

    const handleOpen15 = () => {
        setOpen15(!open15);
    };



    return (
        <div id='faqs'  className='pt-[100px] pb-[140px] bg-[#F6F6F6] px-[20px] sm:px-[50px] md:px-[70px] slg:px-[100px] text-[#002616]'>
            <div className='pb-[85px]'>
                <p className='text-[#002616] text-[36px] sm:text-[48px] w-[300px] sm:w-[456px] font-bold'>Frequently asked <span className='text-[#7DD13A]'>questions</span></p>
            </div>

            <div className='flex flex-col gap-[22px]'>
                <div onClick={handleOpen} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What is HousePadi?</p>

                        <button >{open ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open ? '' : <div><p className='text-[#3c3c43b5]'>HousePadi is a tech-enabled home services provider based in Lagos, Nigeria.</p></div>}

                </div>

                <div onClick={handleOpen2} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What services do we offer?</p>

                        <button>{open2 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open2 ? '' : <div><p className='text-[#3c3c43b5]'>We offer basic home services like Chef cooked meals, laundry, grocery shopping and cleaning. Let us ease your stress and handle your basic chores on a schedule while you live stress free life. </p></div>}

                </div>

                <div onClick={handleOpen3} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How does it work?</p>

                        <button >{open3 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open3 ? '' : <div><p className='text-[#3c3c43b5]'>Kindly download the <span className='font-bold'>HousePadi Mobile App</span> from the App Store on your mobile phone and sign-up as a new customer. <span className='font-bold'>HousePadi</span> is available on IOS and Google Play Store.</p></div>}

                </div>

                <div onClick={handleOpen4} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Why should I download the HousePadi Mobile App?</p>

                        <button >{open4 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open4 ? '' : <div><p className='text-[#3c3c43b5]'>You need the <span className='font-bold'>HousePadi Mobile App</span> to be able to enjoy our exceptional services and also enjoy lots of discounts and amazing freebies.</p></div>}

                </div>

                <div onClick={handleOpen5} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Can I make a one-off order or I need to subscribe?</p>

                        <button >{open5 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open5 ? '' : <div><p className='text-[#3c3c43b5]'>You can either make a one-off order for any of our services or subscribe on a periodic basis (Weekly, monthly, quarterly).</p></div>}

                </div>

                <div onClick={handleOpen6} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[26px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How flexible is the subscription plan?</p>

                        <button >{open6 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open6 ? '' : <div><p className='text-[#3c3c43b5]'>Very flexible, you can customize and edit your preferred subscription plans , you can also pick the days of the week when you want any of our services, and also select the frequency and how many times in a week, month etc.</p></div>}

                </div>

                <div onClick={handleOpen7} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How do I make payments for selected services?</p>

                        <button >{open7 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open7 ? '' : <div><p className='text-[#3c3c43b5]'>Payment can be made though our secured payment channels on the <span className='font-bold'>HousePadi app</span>.</p></div>}

                </div>

                <div onClick={handleOpen8} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What is our policy on missing or damaged items?</p>

                        <button >{open8 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open8 ? '' : <div><p className='text-[#3c3c43b5]'>We have put great measures in place to ensure that your items with utmost care and caution, however we will replace any item that is confirmed damaged or lost.</p></div>}

                </div>

                <div onClick={handleOpen9} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What’s the difference between your meals and other regular meal apps?</p>

                        <button >{open9 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open9 ? '' : <div><p className='text-[#3c3c43b5]'><span className='font-bold'>HousePadi</span> is different, apart from the fact that we cater to other basic home services, we are not the regular fast food joints/meal app.  Our meals are carefully homemade and Chef cooked with amazing recipes you will absolutely love, we also believe in catering for all your needs that’s why we offer other features your regular fast food joints don’t offer like <span className='font-bold'>Bowls and Special Diets</span>  for example.</p></div>}

                </div>

                <div onClick={handleOpen10} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What is the difference between Regular Meals, Bowls and Special Diets?</p>

                        <button >{open10 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open10 ? '' : <div><p className='text-[#3c3c43b5]'>The <span className='font-bold'>Regular Meals</span> are carefully selected popular delicious meals for everyday living in Nigeria, we also shuffle our meals periodically giving our customers more options to pick from.<br/><br/>
                        The <span className='font-bold'>Bowls</span> option is a unique meal option for customers who want more, imagine the regular Nigerian meals you love in larger portions to be shared with your padis (friends) or refrigerated and microwaved anytime you need more.<br/><br/>
                        <span className='font-bold'>Special Diets</span> is a unique option for customers who have a special, strict nutrition. Are you on a low-carb, low-sodium or vegan diet? And you need healthy meals delivered to you on a schedule? We are your best option
                    </p></div>}

                </div>

                <div onClick={handleOpen11} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How does the laundry service work?</p>

                        <button >{open11 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open11 ? '' : <div><p className='text-[#3c3c43b5]'>Let’s give you crispy clean clothes within 48 hours – You have two options to pick from: Wash & Fold or Wash & Iron & fold, you can choose any of these options as a one-off or subscribe on a periodic basis. We have laundry bags of 25, 30 items to pick from, we also pick up from your doorstep and deliver them back to you.</p></div>}

                </div>

                <div onClick={handleOpen12} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>What locations is HousePadi available in?</p>

                        <button >{open12 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open12 ? '' : <div><p className='text-[#3c3c43b5]'>HousePadi is currently available in Lagos, Nigeria. </p></div>}

                </div>

                <div onClick={handleOpen13} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How do I get started?</p>

                        <button >{open13 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open13 ? '' : <div><p className='text-[#3c3c43b5]'>Download the HousePadi app, its available on Google Play Store and IOS</p></div>}

                </div>

                <div onClick={handleOpen14} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How do I make payment??</p>

                        <button >{open14 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open14 ? '' : <div><p className='text-[#3c3c43b5]'>You can make payment using your debit card through the payment link on the app once you have selected your service plan</p></div>}

                </div>

                <div onClick={handleOpen15} className='bg-white cursor-pointer p-[30px] rounded-[12px] text-[18px] flex flex-col gap-[27px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold'>How do I contact you?</p>

                        <button >{open15 ? <Chevron /> : <Chevron_down />}</button>
                    </div>

                    {open15 ? '' : <div><p className='text-[#3c3c43b5]'>Kindly LIVE chat with our support team or email us and we will respond swiftly. </p></div>}

                </div>

            </div>



        </div>
    )
}

export default SectionFour

