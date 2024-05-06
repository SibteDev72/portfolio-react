import React, {useState} from 'react';
import BinYosaf from '../assets/binYousaf.png';
import Netflix from '../assets/netflix.png'
import DetailModel from './DetailModel';

function Projects() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState();
  const [btnType, setBtnType] = useState();
  const setValuesDetails = (value1, value2, value3) => { setIsPopupOpen(value1); setTitle(value2); setBtnType(value3) };
  const setValuesPreview = (value1, value2, value3) => { setIsPopupOpen(value1); setTitle(value2); setBtnType(value3) };
  const closeModel = () => { setIsPopupOpen(false) };

  // const handleDetails = (item) => {
  //   // console.log(e);
  //   console.log('handleDetailFunction', item.thumbnaiText)
  //   setIsPopupOpen(true);
  //   setTitle(item.thumbnaiText);

  // }

  const projects = [
    {
      id:1,
      thumbnaiText: 'Netflix Clone',
      src: Netflix,
      style: 'w-60'
    },
    {
      id:2,
      thumbnaiText: 'BinYousaf Clone',
      src: BinYosaf,
      style: 'w-[120px]'
    },
  ]
  return (
    <div name='projects' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
      {/* Content */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
          <div className='text-left ml-2 mt-8'>
              <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
              <p className='pt-4'>// These are the projects that I have Build.</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-2'>
            {
              projects.map(project => (
                <div  
                  key={project.id} 
                  className='shadow-md shadow-pink-600 w-[100] h-70 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'
                >
                  <div className='h-40 bg-black flex justify-center items-center rounded-md hover:scale-105 duration-300'>
                    <img src={project.src} className={`${project.style}`} />
                    <p className='px-1 text-gray-300 text-2xl font-bold'>{project.thumbnaiText}</p>
                  </div>
                  <div className='flex justify-center items-center py-4'>
                    <button
                      onClick={() => setValuesDetails(true, project.thumbnaiText, 'Details')}
                      // onClick={() => handleDetails(project)}
                      className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-3 px-7 my-2 hover:bg-pink-600 rounded-full duration-300'>
                      Details
                    </button>
                    <button
                      className='text-gray-300 border-2 border-pink-600 cursor-pointer mx-4 py-3 px-7 my-2 hover:bg-pink-600 rounded-full duration-300'
                      onClick={() => setValuesPreview(true, project.thumbnaiText, 'Preview')}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      {/* Detail Model Content */}
      <div>
        { isPopupOpen && <DetailModel closeModel={closeModel} name={title} buttonType={btnType} />}
      </div>
    </div>
  )
}

export default Projects