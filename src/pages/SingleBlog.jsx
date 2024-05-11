import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser, FaClock } from "react-icons/fa";
import Sidebar from '../components/Sidebar';

const SingleBlog = () => {
    const data = useLoaderData();
    console.log(data);
    const {title, image, author, published_date, reading_time,content} = data[0]
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
        </div>

        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/> {author} | {published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore incidunt perspiciatis ducimus ex! Ipsa fuga repellendus pariatur nulla quibusdam similique quae commodi veniam, deserunt aut fugiat nemo libero hic.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore incidunt perspiciatis ducimus ex! Ipsa fuga repellendus pariatur nulla quibusdam similique quae commodi veniam, deserunt aut fugiat nemo libero hic.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure excepturi, dignissimos ad perferendis eius fuga! Inventore voluptate, voluptas sed quisquam, ea quas dicta dolorum sunt necessitatibus obcaecati, est nisi eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi nam, omnis accusamus,
                     vitae est quibusdam excepturi repudiandae magni voluptates illo inventore facere explicabo quia id adipisci dolorum ex provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique incidunt rerum debitis, aliquam assumenda, deserunt labore id tempora placeat dolor accusantium expedita. Commodi omnis magnam id illum,
                     obcaecati architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis placeat optio iusto facilis laborum? Eos placeat enim omnis voluptatum earum eius laborum nihil exercitationem sed, ut quia cupiditate doloribus? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Eius facilis expedita ut officiis nobis molestiae unde repellendus adipisci soluta dicta officia, laborum rem voluptate labore consequuntur blanditiis aliquam? Accusamus, ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci necessitatibus,
                     error vel odio quas, ratione nulla quis magnam quos atque, qui ex sint magni officia maiores delectus at iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione officia eius harum facere odio, exercitationem adipisci dolorum nobis porro fugit rerum molestias ipsum omnis dolores facilis suscipit ipsa vero.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore incidunt perspiciatis ducimus ex! Ipsa fuga repellendus pariatur nulla quibusdam similique quae commodi veniam, deserunt aut fugiat nemo libero hic.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore incidunt perspiciatis ducimus ex! Ipsa fuga repellendus pariatur nulla quibusdam similique quae commodi veniam, deserunt aut fugiat nemo libero hic.
                    </p>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Sidebar/>
            </div>   
        </div>
    </div>
  )
}

export default SingleBlog
