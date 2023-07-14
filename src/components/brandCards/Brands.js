import React from 'react'

const Brands = ({ brand, content }) => {
    return (
        <div className=" w-full text-black h-[250px] 2xs:h-[260px] xlg:h-[240px] transition-all duration-[500ms] flex flex-col items-start justify-start xlg:justify-center text-left rounded-[30px] ">
            <div className='3xs:pt-5 2xs:pt-8 slg:pt-0 text-[28px] slg:text-[32px] sm:text-[36px] xxlg:text-[36px] text-[#002616]'><p>Get Your <span className='text-[#7DD13A]'>{brand}</span> Sorted With Housepadi</p></div>
            <div className='text-[19px] text-[#203129] slg:pb-[10px] xlg:pb-[40px]'>{content}</div>
        </div>
    )
}

export default Brands

//pb-[20px] 2xs:pb-[60px] 