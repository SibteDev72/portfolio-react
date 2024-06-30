import React, {useEffect, useState} from 'react';
import { IoMdClose } from "react-icons/io";
import NetflixCloneDemo from '../assets/NetflixCloneDemo.mp4';
import { useStore } from '../Store/functions-store';
import { motion, useAnimation } from 'framer-motion';

function DemoModel() {

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

  return (
    <div 
    className='bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-neutral-950 w-full h-screen z-10'>
      <div
      className={isAnimating == true ? 
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
        transition={{ duration: 0.2, ease:'easeIn' }}
        className='flex flex-col justify-center items-center sm:max-w-[1200px] w-full h-[35rem]'>
          <h1 className='text-2xl mb-[2rem] font-bold inline border-b-4 border-pink-600 sm:text-3xl sm:pt-[-6rem]'>
          { object.project.thumbnaiText === 'Chatbot' ? 'Demo Link' :
          object.project.thumbnaiText === 'E-Commerce' ? 'Demo Link': 'Demo Video'}</h1>
          <motion.div
          variants={{
            hidden: { opacity: 0, y: -30},
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={animationController}
          transition={{ duration: 0.2, delay:0.25, ease:'easeIn' }}
          >
          { object.project.thumbnaiText === 'Netflix Clone' ? 
            <video
            className='w-[18rem] sm:w-[50rem] sm:rounded-md sm:shadow-md sm:shadow-pink-600' 
            src = {NetflixCloneDemo} controls autoPlay muted loop />
            : object.project.thumbnaiText === 'E-Commerce' ?
            <a 
            className='text-gray-300 border-2 border-pink-600 cursor-pointer py-3 px-7 rounded-full hover:bg-pink-600 duration-300'
            href="https://ecommerce-9s85ircq0-syed-sibte-muhammads-projects.vercel.app/SignIn"  
            target="_blank">
              Open E-Commerce Project
            </a>
            : 
            <a 
            className='text-gray-300 border-2 border-pink-600 cursor-pointer py-3 px-7 rounded-full hover:bg-pink-600 duration-300'
            href="https://sibtedev72.github.io/Chatbot-React/"  
            target="_blank">
              Open Chatbot
            </a>
          }
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default DemoModel