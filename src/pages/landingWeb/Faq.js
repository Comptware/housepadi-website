import React, { useState } from 'react'

const Faq = () => {

  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitQuestion = async (e) => {
    e.preventDefault();
    console.log(email)
    console.log(message)
    setLoading(true);
  }

  return (
    <div id='faqs' className='bg-[#F6F6F6] text-black w-full flex flex-col items-center gap-5'>
      <p className='font-bold w-[85%] flex text-center justify-center 3xs:w-[75%] slg:w-[60%] text-[20px] sm:text-[24px] md:text-[32px] px-5'>Got more questions, let us know</p>

      <div className='w-[88%] sm:w-[75%] slg:w-[60%] flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-4'>
          <p className='font-bold'>Email</p>
          <input
            className='border p-[10px] w-full rounded-lg'
            placeholder="Your email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold'>Messages</p>
          <textarea className='resize-none border p-[10px] w-full rounded-lg h-[279px]'
            placeholder='Drop your messsage'
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

        </div>

        <div className='flex justify-center mt-12 mb-14'>
          <button
            className='px-6 h-[50px] hover:h-[53px] hover:font-bold hover:px-9 hover:text-xl bg-[#7DD13A] rounded-[40px] text-white'
            disabled={!(email || message)}
            loading={loading}
            onClick={(e) => submitQuestion(e)}
          >Send Message</button>
        </div>
      </div>
    </div>
  )
}


export default Faq