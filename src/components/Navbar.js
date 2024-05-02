import React, {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
    
    const[nav, setNav] = useState(false);

    const socialMediaLinks = [
        {
            id: 1,
            icons: (
                <>
                    LinkedIn <FaLinkedin size={30} /> 
                </>
            ),
            href: 'https://www.linkedin.com/in/sibte-muhammad-48391727b',
            style: 'bg-blue-600 rounded-tr-md'
        },
        {
            id: 2,
            icons: (
                <>
                    GitHub <FaGithubSquare size={30} />
                </>
            ),
            href: 'https://github.com/SibteDev72',
            style: 'bg-[#131313]'
        },
        {
            id: 3,
            icons: (
                <>
                    Mail <IoMdMail size={30} />
                </>
            ),
            href: 'mailto:sibte.dev72@gmail.com',
            style: 'bg-[#6fc2b0]'
        },
        {
            id: 4,
            icons: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'Resume.pdf',
            style: 'bg-[#3f3f3f] rounded-br-md',
            dowload: true,
        }
    ]

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='flex justify-between items-center w-[200px]'>
            <h1 className='text-2xl sm:text-4xl font-signature font-bold text-pink-600'>SM</h1>
        </div>   
        { /* Menu */ }
        <ul className='hidden md:flex'>
            <li className='hover:scale-105 duration-200'>Home</li>
            <li className='hover:scale-105 duration-200'>About</li>
            <li className='hover:scale-105 duration-200'>Technologies</li>
            <li className='hover:scale-105 duration-200'>Projects</li>
            <li className='hover:scale-105 duration-200'>Contact</li>
        </ul>  
        { /*  Hameburger */ }
        <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
            { !nav ? <FaBars size={25} /> : <IoMdClose size={25} />}
        </div>
        { /* Mobile Menu */ }
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col items-center justify-center'}>
            <ul>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Technologies</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>  
        </div>
        {/* Aside Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[36%] left-0'>
            <ul>
                {
                    socialMediaLinks.map(links => (
                        <li key={links.id} 
                        className={'w-[160px] h-[55px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300' + ' ' + links.style}>
                            <a className='flex justify-between items-center w-full text-gray-300' 
                            href={links.href} 
                            download={links.dowload} 
                            target="_blank"
                            > 
                                { links.icons }
                            </a> 
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar