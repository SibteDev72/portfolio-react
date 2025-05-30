import React from 'react'
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
 
    <div id='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Content Container */}
      <div className='flex flex-col justify-center mx-4 max-w-[1000px] h-full sm:ml-[160px] pt-16'>
          <p className='text-1xl sm:text-2xl text-pink-600'>Hi, My name is</p>
          <h1 className='text-2xl sm:text-6xl text-[#ccd6f6] font-bold'>Syed Sibte Muhammad</h1>
        <h1 className='text-2xl sm:text-6xl font-bold text-pink-600'>
          I'm a {' '}
          <span className='text-2xl sm:text-6xl font-bold text-[#8892b0]'>
            <Typewriter
              words={['Web Developer.', 'Front End Developer.', 'React.js Developer.', 'Next.js Developer.', 'Vue.js Developer.', 'Nuxt.js Developer.']}
              loop={true}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </h1>
        {/* <h2 className='text-3xl sm:text-6xl text-[#8892b0] font-bold'>I'm a Full Stack Developer.</h2> */}
        <p className='text-[#ccd6f6] max-w-[700px] py-4'>
        Focused on building modern web interfaces. Comfortable working with Node.js and MongoDB for full-stack solutions.
        Also experienced with headless CMS like WordPress. I'm always eager to explore new technologies, solve real-world 
        problems, and build digital experiences that are fast, accessible, and delightful to use.
        </p>
        <Link to="about" smooth={true} duration={500}>
          <button className='text-white group border-2 py-3 px-6 flex items-center my-2 hover:bg-pink-600 hover:border-pink-600 hover:rounded-sm'>
            About Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span> 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home