import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto pt-[4rem] flex flex-col justify-center w-full h-full'>
            <div className='text-left ml-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 sm:text-2xl'>Contact</p>
                <p className='pt-4 text-md sm:text-lg'>// Fill this form to get in touch with me or reach me out on my email - sibte.dev72@gmail.com.</p>
            </div>
            <form 
            className='flex flex-col justify-center items-center mt-[4rem] sm:mt-6' 
            action="https://getform.io/f/pbqgywlb" method="POST">
                <input className='bg-[#ccd6f6] text-black mb-2 p-2 rounded-sm w-[300px] sm:w-[500px] sm:h-[2.5rem]' type='text' name='name' placeholder='Name' />
                <input className='bg-[#ccd6f6] text-black mb-2 p-2 rounded-sm w-[300px] sm:w-[500px] sm:h-[2.5rem]' type='text' name='email' placeholder='Email' />
                <textarea className='bg-[#ccd6f6] text-black mb-2 p-2 rounded-sm w-[300px] sm:w-[500px]' name='message' rows={7} placeholder='Message'></textarea>
                <button 
                className='text-white group border-2 py-3 px-6 hover:bg-pink-600 hover:border-pink-600 hover:rounded-sm duration-300'>
                    Send Message
                </button>
            </form>
        </div>
    </div> 
  )
}

export default Contact