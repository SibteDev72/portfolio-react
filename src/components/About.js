import React from 'react'

function About() {
  return (
    <div id="about" className='w-full h-screen flex justify-center items-center  text-[#ccd6f6] bg-[#0a192f]'>
        {/* Content */}
        <div className='flex flex-col justify-center items-center w-full h-full sm:pt-4'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <p className='pb-8 sm:text-right text-[#8892b0] text-4xl font-bold'>
                    Hey. I am Sibte, nice to meet you. Please take a look arround.
                </p>
                <div>
                    <p>Can develop and implement user interfaces using React.js. Design
                        and develop backend services using Node.js, Express.js, and managing 
                        data storage using MongoDB. Knowledge in JavaScript, HTML, CSS, Tailwind 
                        and related front-end technologies. Write clean, efficient, and maintainable 
                        code following best practices and coding standards. Good understanding of code 
                        versioning tools, such as Git.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About