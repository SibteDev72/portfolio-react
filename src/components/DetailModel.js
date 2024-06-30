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
import zustand from "../assets/zustand.png";
import { useStore } from '../Store/functions-store';
import { motion, useAnimation } from 'framer-motion';

function DetailModel() {

  const [isAnimating, setIsAnimating] = useState(true);
  const animationController = useAnimation();

  const { object, closeModel } = useStore((state) => ({
    object: state.projectObject,
    closeModel: state.closeModel
  }))

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    animationController.start("visible");
    return() => {
      document.body.style.overflowY = 'scroll';
    } 
  },[])

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      closeModel();
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
    {
      id:13,
      src: zustand,
      name: 'Zustand',
    }
  ]

  return (
    <div
    className='bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-neutral-950 w-full h-screen z-10'>
      <div
      className={isAnimating === true ? 
      'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[44rem] overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popIn_0.3s_ease_forwards] z-20' 
      : 'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[44rem] overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popOut_0.3s_ease_forwards]'}>
        <IoMdClose onClick={handleClose}
        className='absolute top-10 right-5 text-2xl cursor-pointer hover:rotate-90 transition duration-300' />
        <motion.div
        variants={{
          hidden: { opacity: 0,},
          visible: { opacity: 1,}
        }}
        initial="hidden"
        animate={animationController}
        transition={{ duration: 1.2, ease:'easeIn' }}
        className='flex flex-col justify-center items-start mx-4 pt-[6rem] sm:pt-2 w-fit h-fit'>
          <h1 className='text-2xl pt-[0rem] sm:pt-[4rem] font-bold inline border-b-4 border-pink-600'>Features</h1>
          <ul className='flex flex-col list-disc my-4 mx-4'>
            {
              object.project.features.map( (point, index) =>  {
                const duration = 0.5 + (index + 1) * 0.1;
                return(
                  <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -35},
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  animate={animationController}
                  transition={{ duration, ease:'easeIn' }} 
                  key={index} className='text-md text-left sm:text-lg py-[0.2rem]'>{point}</motion.li>
                );   
              })
            }
          </ul>
          <h1 className='text-3xl font-bold inline border-b-4 mt-4 border-pink-600'>Technologies</h1>
          <div className='w-[18rem] sm:w-[70rem] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-4 px-4'>
            { object.project.thumbnaiText === 'Netflix Clone' ? 
                technologies.filter(
                    fil => fil.id !== 5 && fil.id !== 8 && fil.id !== 9 && fil.id !== 10
                    && fil.id !== 11 && fil.id !== 12 && fil.id !== 13).map((tech, index) => {
                    const duration = 0.5 + (index + 1) * 0.1;
                    return(
                      <motion.div
                      variants={{
                      hidden: { opacity: 0, x: -35},
                      visible: { opacity: 1, x: 0 }
                      }}
                      initial="hidden"
                      animate={animationController}
                      transition={{ duration, ease:'easeIn' }} 
                      key={index} 
                      className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'
                      >
                        <img src={tech.src} alt='insertImage' className={'w-12 mx-auto' + ' ' + tech.style}/>
                        <p className='mt-2'>{tech.name}</p>
                      </motion.div>
                    );
                })
                : object.project.thumbnaiText === 'E-Commerce' ?
                technologies.map((tech, index) => {
                  const duration = 0.5 + (index + 1) * 0.1;
                  return(
                    <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -35},
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={animationController}
                    transition={{ duration, ease:'easeIn' }} 
                    key={index} 
                    className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                      <img src={tech.src} alt='insertImage' className={'w-12 mx-auto' + ' ' + tech.style}/>
                      <p className='mt-2'>{tech.name}</p>
                  </motion.div>
                  );
                })
                :
                technologies.filter(
                  fil => fil.id !== 5 && fil.id !== 6 && fil.id !== 7 && fil.id !== 9 && fil.id !== 10
                  && fil.id !== 11 && fil.id !== 12).map((tech, index) => {
                  const duration = 0.5 + (index + 1) * 0.1;
                  return(
                    <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -35},
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={animationController}
                    transition={{ duration, ease:'easeIn' }} 
                    key={index} 
                    className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                      <img src={tech.src} alt='insertImage' className={'w-12 mx-auto' + ' ' + tech.style}/>
                      <p className='mt-2'>{tech.name}</p>
                  </motion.div>
                  );
                })
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DetailModel
