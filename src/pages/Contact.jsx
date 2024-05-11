import React from 'react'
import contact from '../assets/contact.png';

const Contact = () => {
  return (
    <div>
      <div  className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h1>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 m-10 py-5'>
        <div className='w-full lg:w-1/2'> 
          <img src={contact} alt='about'/>
        </div>

        <div className='w-full lg:w-1/2 px-6 py-10'>
        <form className='px-4'>
          <h2 className='font-semibold py-2'>
            Full Name
          </h2>
                <div className='mb-5'>
                    <input type='full_name' name='full_name' id='full_name' placeholder='Full Name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                </div>
                <h2 className='font-semibold py-2'>
            Email
          </h2>
                <div className='mb-5'>
                    <input type='email' name='email' id='email' placeholder='example@gmail.com'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                </div>
                <h2 className='font-semibold py-2'>
            Subject
          </h2>
                <div className='mb-5'>
                    <input type='subject' name='subject' id='subject' placeholder='Enter your subject'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                </div>
                <h2 className='font-semibold py-2'>
            Message
          </h2>
          <div className='mb-5'>
              <textarea
                name='message'
                id='message'
                placeholder='Type your message'
                rows='5' // Set the number of rows to increase the height
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'
              ></textarea>
            </div>
                <div>
                    <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold'>Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
