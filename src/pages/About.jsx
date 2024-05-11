import React from 'react'
import about from '../assets/about.png';

const About = () => {
  return (
    <div>
      <div  className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Page</h1>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 m-10 py-5 mb-20'>
        <div className='w-full lg:w-1/2 px-7'> 
          <img src={about} alt='about' className='object-cover w-full h-full rounded-xl'/>
        </div>

        <div className='w-full lg:w-1/2 px-6 py-10'>
          <h5 className='text-orange-500 text-2xl lg:text-3xl mb-2'>Who we are</h5>
          <h1 className='text-3xl lg:text-4xl leading-snug font-bold mb-5'>We provide high quality Articles & blogs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure excepturi, dignissimos ad perferendis eius fuga! Inventore voluptate, voluptas sed quisquam, ea quas dicta dolorum sunt necessitatibus obcaecati, est nisi eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi nam, omnis accusamus, vitae est quibusdam excepturi repudiandae magni voluptates illo inventore facere explicabo quia id adipisci dolorum ex provident?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique incidunt rerum debitis,
             aliquam assumenda, deserunt labore id tempora placeat dolor accusantium expedita. Commodi omnis magnam id illum, obcaecati architecto.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis placeat optio iusto facilis laborum? Eos placeat enim omnis voluptatum earum eius laborum nihil exercitationem sed, ut quia cupiditate doloribus?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius facilis expedita ut officiis nobis molestiae unde repellendus adipisci soluta dicta officia, laborum rem voluptate labore consequuntur blanditiis aliquam? Accusamus, ipsam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci necessitatibus, error vel odio quas, ratione nulla quis magnam quos atque, qui ex sint magni officia maiores delectus at iure!
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione officia eius harum facere odio, exercitationem adipisci dolorum nobis porro fugit rerum molestias ipsum omnis dolores facilis suscipit ipsa vero.

          </p>
        </div>
      </div>
    </div>
  )
}

export default About
