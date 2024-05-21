import React from 'react';
import Data from '../Data/projects.json';
import DetailModel from './DetailModel';
import DemoModel from './DemoModel';
import { useStore } from '../Store/functions-store';

function Projects() {

  const { openModel, boolValue, btnValue } = useStore((state) => ({
    openModel: state.openModel,
    boolValue: state.isModelOpen,
    btnValue: state.btnType
  }))

  return (
    <div id='projects' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
      {/* Content */}
      <div className='max-w-[1000px] mx-auto pt-[7rem] flex flex-col justify-center w-full h-full'>
          <div className='text-left ml-2'>
              <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
              <p className='pt-4'>// These are the projects that I have Build.</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-2'>
            {
              Data.map(project => (
                <div
                  key={project.id} 
                  className='shadow-md shadow-pink-600 w-[100] h-70 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'
                >
                  <div className='h-40 bg-black flex justify-center items-center rounded-md hover:scale-105 duration-300'>
                    <img src={project.Imgsrc} className='w-[8rem]' alt={project.thumbnaiText} />
                    <p className='px-1 text-gray-300 text-2xl font-bold'>{project.thumbnaiText}</p>
                  </div>
                  <div className='flex justify-center items-center py-4'>
                    <button
                      onClick={() => openModel(project, 'Details')}
                      className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-3 px-7 my-2 hover:bg-pink-600 rounded-full duration-300'>
                      Details
                    </button>
                    <button
                      className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-3 px-7 my-2 hover:bg-pink-600 rounded-full duration-300'
                      onClick={() => openModel(project, 'Demo')}
                    >
                      Demo
                    </button>
                  </div>
                </div>
              ))
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