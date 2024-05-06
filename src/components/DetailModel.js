import React, {useEffect} from 'react'
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

function DetailModel({ closeModel, name, buttonType }) {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return() => {
      document.body.style.overflowY = 'scroll';  
    } 
  },[])

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
      id:10,
      src: MDB,
      name: 'MongoDB',
    },
  ]

  return (
    <>
    <div className='bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 bg-neutral-950 w-full h-screen z-10'></div>
    <div 
    className='fixed top-[5rem] right-6 sm:left-[3rem] sm:w-[74rem] sm:h-[34rem] sm:top-[1.5rem]  bg-[#0a192f] text-[#ccd6f6] text-center w-fit h-[50rem] overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg z-20'>
      <IoMdClose onClick={closeModel} 
      className='absolute top-10 right-5 text-2xl cursor-pointer hover:rotate-90 transition duration-300' />
      <div 
      className={name==='Netflix Clone' && buttonType==='Details' ? 'flex flex-col justify-center items-start mx-4 pt-[18rem] sm:pt-16 max-w-[1200px] w-full h-full' : 'hidden'}>
        <h1 className='text-2xl font-bold inline border-b-4 border-pink-600 sm:text-3xl sm:pt-[-6rem]'>Features</h1>
        <ul className='flex flex-col items-start my-4'>
          <li className='text-lg py-1'>Fully Functioning Feature Page.</li>
          <li className='text-lg py-1'>Multi ReactJS Components</li>
          <li className='text-lg py-1'>Customizable Sliders.</li>
        </ul>
        <h1 className='text-3xl font-bold inline border-b-4 border-pink-600'>Technologies</h1>
        <div className='w-[22rem] sm:w-[70rem] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-4 px-4'>
              {
                technologies.filter( 
                  fil => fil.name !== 'React Bootstrap' && fil.name !== 'Tailwind' && fil.name != 'SASS' && fil.name != 'Express'
                  && fil.name != 'Node' && fil.name != 'MongoDB').map(tech => (
                  <div key={tech.id} className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                    <img src={tech.src} alt='insertImage'  className={'w-12 mx-auto' + ' ' + tech.style}/>
                    <p className='mt-2'>{tech.name}</p>
                  </div>
                ))
              }
        </div>
      </div>
      <div
      className={name=='BinYousaf Clone' && buttonType=='Details' ? 'flex flex-col justify-center items-start mx-4 pt-[5rem] sm:pt-0 w-fit h-fit' : 'hidden'}>
        <h1 className='text-2xl pt-[0rem] sm:pt-[4rem] font-bold inline border-b-4 border-pink-600'>Features</h1>
        <ul className='flex flex-col items-start my-4'>
          <li className='text-lg py-1'>// Complete E-Commerce Website</li>
          <li className='text-lg py-1'>// Products controlled through.</li>
          <li className='text-lg py-1'>// Development of Restful.</li>
          <li className='text-lg py-1'>// Graphical Representation.</li>
          <li className='text-lg py-1'>// Implementing SASS.</li>
          <li className='text-lg py-1'>// Implement Authentication.</li>
        </ul>
        <h1 className='text-3xl font-bold inline border-b-4 mt-4 border-pink-600'>Technologies</h1>
        <div className='w-[22rem] sm:w-[70rem] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-4 px-4'>
              {
                technologies.map(tech => (
                  <div key={tech.id} className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                    <img src={tech.src} alt='insertImage' className={'w-12 mx-auto' + ' ' + tech.style}/>
                    <p className='mt-2'>{tech.name}</p>
                  </div>
                ))
              }
        </div>
      </div>
    </div>
    </>
  )
}

export default DetailModel