import React, {useEffect, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import RL from '../assets/react.png';
import MUI from '../assets/materialUI.png';
import SC from '../assets/styled-components.png';
import TW from '../assets/tailwind.png';
import SASS from '../assets/sass.png';
import Exp from '../assets/express.png';
import Node from '../assets/node.png';
import MDB from '../assets/mongo.png';

function DetailModel({onClose, object}) {

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return() => {
      document.body.style.overflowY = 'scroll';
    } 
  },[])

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const technologies = [
    {
      id:1,
      src: HTML,
      name: 'HTML'
    },
    {
      id:2,
      src: CSS,
      name: 'CSS'
    },
    {
      id:3,
      src: JS,
      name: 'JavaScript'
    },
    {
      id:4,
      src: RL,
      name: 'React JS'
    },
    {
      id:5,
      src: "https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-bootstrap-snippets/2.1.6/1702059788235/Microsoft.VisualStudio.Services.Icons.Default",
      name: 'React Bootstrap',
    },
    {
      id:6,
      src: SC,
      name: 'Styled Components',
      style: 'w-16'
    },
    {
      id:7,
      src: MUI,
      name: 'Material UI'
    },
    {
      id:8,
      src: TW,
      name: 'Tailwind',
    },
    {
      id:9,
      src: SASS,
      name: 'SASS',
      style: 'w-[6rem]'
    },
    {
      id:10,
      src: Exp,
      name: 'Express',
      style: 'w-[6rem]'
    },
    {
      id:11,
      src: Node,
      name: 'Node',
    },
    {
      id:12,
      src: MDB,
      name: 'MongoDB',
    },
  ]

  return (
    <div 
    className='bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-neutral-950 w-full h-screen z-10'>
      <div
      className={isAnimating == true ? 
      'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[44rem] overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popIn_0.3s_ease_forwards] z-20' 
      : 'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[44rem] overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popOut_0.3s_ease_forwards]'}>
        <IoMdClose onClick={handleClose}
        className='absolute top-10 right-5 text-2xl cursor-pointer hover:rotate-90 transition duration-300' />
        <div 
        className='flex flex-col justify-center items-start mx-4 pt-[6rem] sm:pt-2 w-fit h-fit'>
          <h1 className='text-2xl pt-[0rem] sm:pt-[4rem] font-bold inline border-b-4 border-pink-600'>Features</h1>
          <ul className='flex flex-col list-disc my-4 mx-4'>
            {
              object.features.map( (point, index) =>  (
                <li key={index} className='text-md text-left sm:text-lg py-[0.2rem]'>{point}</li>   
              ))
            }
          </ul>
          <h1 className='text-3xl font-bold inline border-b-4 mt-4 border-pink-600'>Technologies</h1>
          <div className='w-[18rem] sm:w-[70rem] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-4 px-4'>
            { object.thumbnaiText === 'Netflix Clone' ? 
                technologies.filter(  
                    fil => fil.id !== 5 && fil.id !== 8 && fil.id != 9 && fil.id != 10
                    && fil.id != 11 && fil.id != 12).map(tech => (
                    <div key={tech.id} className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                      <img src={tech.src} alt='insertImage'  className={'w-12 mx-auto' + ' ' + tech.style}/>
                      <p className='mt-2'>{tech.name}</p>
                    </div>
                  ))
                :
                technologies.map(tech => (
                  <div key={tech.id} className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                    <img src={tech.src} alt='insertImage'  className={'w-12 mx-auto' + ' ' + tech.style}/>
                    <p className='mt-2'>{tech.name}</p>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailModel
