import React from 'react'

const Brands = ({ brand, content }) => {
    return (
        <div className=" w-full text-black transition-all duration-[500ms] ease-in-out flex flex-col items-start text-left rounded-[30px] bg-white relative overflow-hidden ">
            <div className='3xs:pt-5 2xs:pt-8 slg:pt-0 text-[#002616] text-[28px] slg:text-[32px] sm:text-[36px] xxlg:text-[36px] '>{brand}</div>
            <div className='text-[19px] text-[#203129] pb-[20px] 2xs:pb-[60px] slg:pb-[40px]'>{content}</div>
        </div>
    )
}

export default Brands