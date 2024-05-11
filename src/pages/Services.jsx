import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { SiTailwindcss } from "react-icons/si";
import { IoMdCube } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import { RiPaintFill, RiSpeedFill } from "react-icons/ri";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <div  className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Service Page</h1>
        </div>
      </div>

      <div className='mb-20'>
        <div className='text-center mt-10 mb-5'>
          <h2 className=' text-orange-500 text-2xl lg:text-3xl mb-2'>
            Our Services
          </h2>
          <h1 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>
            What We Offer
          </h1>
          <p className=' font medium text-gray-700 lg:w-3/5 mx-auto mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repellat ducimus ut voluptas et magnam ipsam aliquid! Vitae, ipsum in incidunt veniam explicabo porro dolore harum!
              Beatae possimus voluptatum aliquam alias.
          </p>
        </div>
        <div className='my-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          <ServiceCard icon={<IoMdCube size={70}/>} title={'Refreshing Design'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
          <ServiceCard icon={<SiTailwindcss size={70}/>} title={'Based On Tailwind CSS'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
          <ServiceCard icon={<MdOutlineScreenSearchDesktop size={70}/>} title={'300+ Components'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
          <ServiceCard icon={<RiSpeedFill size={70}/>} title={'Speed Optimized'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
          <ServiceCard icon={<RiPaintFill size={70}/>} title={'Fully Customizable'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
          <ServiceCard icon={<FaRegThumbsUp size={70}/>} title={'Regular Updates'} description={'We enjoy working with descern clients, people for whom quality, services integrity & aesthetics.'}/>
        </div>
      </div>
    </div>
  )
}

export default Services
