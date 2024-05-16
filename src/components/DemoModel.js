import React, {useEffect, useState} from 'react';
import { IoMdClose } from "react-icons/io";
import NetflixCloneDemo from '../assets/NetflixCloneDemo.mp4';
import BinYousafDemo from '../assets/BinYousafDemo.mp4';

function DemoModel({onClose, object}) {

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

  return (
    <div 
    className='bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-neutral-950 w-full h-screen z-10'>
      <div 
      className={isAnimating == true ? 
      'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[40rem]'+
      'overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popIn_0.3s_ease_forwards] z-20' :
      'relative sm:w-[74rem] sm:h-[35rem] sm:overflow-y-scroll bg-[#0a192f] text-[#ccd6f6] text-center w-[20rem] h-[40rem]'+
      'overflow-y-scroll overflow-x-hidden shadow-md shadow-pink-600 rounded-lg animate-[popOut_0.3s_ease_forwards] z-20'}>
        <IoMdClose onClick={handleClose} 
        className='absolute top-10 right-5 text-2xl cursor-pointer hover:rotate-90 transition duration-300' />
        <div 
        className='flex flex-col justify-center items-center sm:max-w-[1200px] w-full h-[35rem]'>
          <h1 className='text-2xl font-bold inline border-b-4 border-pink-600 sm:text-3xl sm:pt-[-6rem]'>Demo Video</h1>
          { object.thumbnaiText === 'Netflix Clone' ? 
            <video 
            className='w-[18rem] mt-4 sm:w-[50rem] sm:mt-4 sm:rounded-md sm:shadow-md sm:shadow-pink-600' 
            src = {NetflixCloneDemo} controls autoPlay muted loop />
            :
            <video 
            className='w-[18rem] mt-4 sm:w-[50rem] sm:mt-4 sm:rounded-md sm:shadow-md sm:shadow-pink-600' 
            src = {BinYousafDemo} controls autoPlay muted loop />
          }
        </div>
      </div>
    </div>
  )
}

export default DemoModel