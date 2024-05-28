import React, { useRef, useEffect } from 'react';
import Data from '../Data/projects.json';
import DetailModel from './DetailModel';
import DemoModel from './DemoModel';
import { useStore } from '../Store/functions-store';
import { motion, useAnimation, useInView } from 'framer-motion';

function Projects() {

  const { openModel, boolValue, btnValue } = useStore((state) => ({
    openModel: state.openModel,
    boolValue: state.isModelOpen,
    btnValue: state.btnType
  }))

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if( isInView ){
      mainControls.start("visible")
    }else{
      mainControls.start("hidden")
    }
  }, [isInView])

  return (
    <div id='projects' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
      {/* Content */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
          <div className='text-left ml-2'>
              <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
              <p className='pt-4'>// These are the projects that I have Build.</p>
          </div>
          <div ref={ref} className='flex flex-col items-center sm:w-full text-center pt-4 sm:grid sm:grid-cols-3 sm:gap-6'>
            {
              Data.map(project => {
                  const duration = 0.5 + project.id * 0.1;
                return(
                  <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -35},
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration, delay:0.2, ease:'easeIn' }}
                  key={project.id} 
                  className='shadow-md mb-[1rem] shadow-pink-600 w-[20rem] h-[12rem] hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'
                  >
                    <div className='h-[6rem] bg-black flex justify-center items-center rounded-md hover:scale-105 duration-300'>
                      <img src={project.Imgsrc} className='w-[4.2rem]' alt={project.thumbnaiText} />
                      <p className='px-2 py-1 text-gray-300 text-xl font-bold'>{project.thumbnaiText}</p>
                    </div>
                    <div className='flex justify-center items-center py-4'>
                      <button
                        onClick={() => openModel(project, 'Details')}
                        className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-2 px-6 my-2 hover:bg-pink-600 rounded-full duration-300'>
                        Details
                      </button>
                      <button
                        className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-2 px-6 my-2 hover:bg-pink-600 rounded-full duration-300'
                        onClick={() => openModel(project, 'Demo')}
                      >
                        Demo
                      </button>
                    </div>
                  </motion.div>
                );
              })
            }
          </div>
      </div>
      {/* Model Content */}
      <div>
        { boolValue && btnValue === 'Details' && <DetailModel />}
        { boolValue && btnValue === 'Demo' && <DemoModel />}
      </div>
    </div>
  )
}

export default Projects