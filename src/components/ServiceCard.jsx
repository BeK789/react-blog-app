import React from 'react'

const ServiceCard = (props) => {
  return (
    <div>
      <div className='mx-9 p-5 shadow-lg rounded cursor-pointer'>
        <div className='items-start'>
            {props.icon}
        </div>
        <h2 className='mt-4 mb-2 font-bold cursor-pointer'>{props.title}</h2>
        <p className='mb-2 text-gray-700'>{props.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
