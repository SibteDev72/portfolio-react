import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import TW from '../assets/tailwind.png';
import RL from '../assets/react.png';
import Node from '../assets/node.png';
import MDb from '../assets/mongo.png';
import Git from '../assets/github.png';

function Technologies() {

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
      src: TW,
      name: 'Tailwind'
    },
    {
      id:5,
      src: RL,
      name: 'React JS'
    },
    {
      id:6,
      src: Node,
      name: 'Node JS'
    },
    {
      id:7,
      src: MDb,
      name: 'Mongo DB'
    },
    {
      id:8,
      src: Git,
      name: 'GitHub'
    }
  ]

  return (
    <div name='technologies' className='w-full h-screen text-[#ccd6f6] bg-[#0a192f]'>
        {/* Content */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div className='text-left ml-2 mt-8'>
                <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>Technologies</p>
                <p className='pt-4'>// These are the technologies that I have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-2'>
              {
                technologies.map(tech => (
                  <div key={tech.id} className='shadow-md shadow-pink-600 hover:scale-105 hover:shadow-[#8892b0] duration-500 py-2 rounded-lg'>
                    <img src={tech.src} className='w-20 mx-auto' />
                    <p className='mt-2'>{tech.name}</p>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Technologies