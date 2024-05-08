import React from 'react'

function About() {
  return (
    <div id="about" className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
        {/* Content */}
        <div className='flex flex-col pt-14 justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <p className='pb-8 sm:text-right text-4xl font-bold'>
                    Hey. I am Sibte, nice to meet you. Please take a look arround.
                </p>
                <div>
                    <p>I can develop and implement user interfaces using React.js.Design
                        and develop backend services using Node.js knowledge in JavaScript, HTML, CSS, and related front-end technologies
                        Write clean, efficient, and maintainable code following best practices and coding standards.
                        Good understanding of code versioning tools, such as Git.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About