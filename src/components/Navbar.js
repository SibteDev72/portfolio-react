import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa6";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, useAnimation } from 'framer-motion';

function Navbar() {
    
    const[nav, setNav] = useState(false);
    const[activeNavSlide, setActiveNavSlide] = useState('home');
    const mainControls = useAnimation();

    useEffect(() => {

        const handleScroll = () => {

            const about = document.getElementById('about');
            const technologies = document.getElementById('technologies');
            const projects = document.getElementById('projects');
            const contact = document.getElementById('contact');

            const scrollPosition = window.scrollY;

            if(scrollPosition < about.offsetTop - 100){
                setActiveNavSlide('home');
            }else if(scrollPosition < technologies.offsetTop - 100){
                setActiveNavSlide('about');
            }else if(scrollPosition < projects.offsetTop - 100){
                setActiveNavSlide('technologies');
            }else if(scrollPosition < contact.offsetTop - 100){
                setActiveNavSlide('projects');
            }else{
                setActiveNavSlide('contact');
            }

        };

        window.addEventListener('scroll', handleScroll);
        // return() => window.removeEventListener('scroll', handleScroll);

    },[])

    useEffect(() => {
        if(nav === true){
            mainControls.start("visible")
        }else{
            mainControls.start("hidden")
        }
    }, [!nav])

    const socialMediaLinks = [
        {
            id: 1,
            icons: <FaLinkedin size={30} />,
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sibte-muhammad-48391727b',
            style1: 'bg-blue-600 rounded-tr-md',
            style2: 'bg-blue-600 rounded-tl-md rounded-tr-md'
        },
        {
            id: 2,
            icons: <FaGithubSquare size={30} />,
            name: 'GitHub',
            href: 'https://github.com/SibteDev72',
            style1: 'bg-[#131313]',
            style2: 'bg-[#131313] rounded-tl-md rounded-tr-md'
        },
        {
            id: 3,
            icons: <IoMdMail size={30} />,
            name: 'Mail',
            href: 'mailto:sibte.dev72@gmail.com',
            style1: 'bg-[#6fc2b0]',
            style2: 'bg-[#6fc2b0] rounded-tl-md rounded-tr-md'
        },
        {
            id: 4,
            icons: <BsFillPersonLinesFill size={30} />,
            name: 'Resume',
            href: 'Resume2.pdf',
            style1: 'bg-[#3f3f3f] rounded-br-md',
            style2: 'bg-[#3f3f3f] rounded-tl-md rounded-tr-md',
            dowload: true
        }
    ]

    const menuLinks = [
        {
            id:1,
            title: 'home'
        },
        {
            id:2,
            title: 'about'
        },
        {
            id:3,
            title: 'technologies'
        },
        {
            id:4,
            title: 'projects'
        },
        {
            id:5,
            title: 'contact'
        }
    ]

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md shadow-pink-600'>
        <div className='flex justify-between items-center w-[200px]'>
            <h1 className='text-2xl sm:text-4xl font-signature font-bold text-pink-600 cursor-pointer'>
                <Link to="home" smooth={true} duration={500}>SM</Link>
            </h1>
        </div>   
        { /* Menu */ }
        <ul className='hidden md:flex'>
            {
                menuLinks.map( link => {
                    return(
                        <li className='capitalize' key={link.id}>
                            <Link 
                            className={activeNavSlide === link.title ? 'inline border-b-4 border-pink-600 pb-1':''} 
                            to = {link.title} smooth={true} duration={500}>
                            { link.title }
                            </Link>
                        </li>
                    );
                })
            }
        </ul>  
        { /*  Hameburger */ }
        <div onClick={() => setNav(!nav)} className='md:hidden z-10'>
            { !nav ? <FaBars size={25} /> : <IoMdClose size={25} />}
        </div>
        { /* Mobile Menu */ }
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col items-center justify-center'}>
            <ul>
                {
                    menuLinks.map( (link) => { 
                        const duration = 0.5 + link.id * 0.1;
                        return(
                            <motion.li
                            variants={{
                                hidden: { opacity: 0, y: 75},
                                visible: { opacity: 1, y: 0 },
                            }}
                            animate={mainControls}
                            transition={{ duration, delay:0.5, ease:'easeIn' }}
                            className='py-6 text-4xl capitalize' 
                            key={link.id}>
                                <Link onClick={() => setNav(!nav)} to={link.title} smooth={true} duration={500}>
                                { link.title }
                                </Link>
                            </motion.li>
                        );
                    })
                }
            </ul>  
        </div>
        {/* Aside Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[36%] left-0'>
            <ul>
                {
                    socialMediaLinks.map(links => (
                        <li key={links.id} 
                        className={'w-[160px] h-[55px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300' + ' ' + links.style1}>
                            <a className='flex justify-between items-center w-full text-gray-300' 
                            href={links.href} 
                            download={links.dowload} 
                            target="_blank"
                            > 
                                { links.name }{ links.icons }
                            </a> 
                        </li>
                    ))
                }
            </ul>
        </div>
         {/* Aside Social Media Mobile */}
        <div className={ !nav ? 'fixed flex justify-center bottom-0 left-0 w-full lg:hidden' : 'hidden'}>
            <ul className='flex'>
                {
                    socialMediaLinks.map(links => (
                        <li key={links.id} 
                        className={'w-[55px] h-[55px] flex justify-between items-center mx-1 ' + ' ' + links.style2}>
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