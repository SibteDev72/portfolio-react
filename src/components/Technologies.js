import {useRef, useEffect} from 'react'
import { technologies } from '../constant/data';
import { motion, useAnimation, useInView } from 'framer-motion';

function Technologies() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if( isInView ){
      mainControls.start("visible")
    }else{
      mainControls.start("hidden")
    }
  }, [ isInView ])

  return (
    <div id='technologies' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
        {/* Content */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='text-left ml-2'>
                <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Technologies</p>
                <p className='pt-4'>// These are the technologies that I have worked with.</p>
            </div>
            <div ref={ref} className='w-full grid grid-cols-2 sm:grid-cols-5 gap-[1rem] text-center pt-[1rem]'>
              {
                technologies.map(tech => {
                  const duration = 0.5 + tech.id * 0.1;
                  return(
                    <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -50},
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration, delay:0.2, ease:'easeIn' }}
                    key={tech.id} 
                    className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                      <img src={tech.src} className='w-[3rem] sm:w-[3.5rem] mx-auto' />
                      <p className='mt-2'>{tech.name}</p>
                  </motion.div>
                  );
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Technologies