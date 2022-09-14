import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setnav] = useState(false)

  const handelClick = () => {
    setnav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo' style={{ width: '50px' }} />
        </Link>
      </div>
        
      {/* Desktop View */}

      <ul className='hidden md:flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>
      
      {/* Hamburger Menu */}

      <div onClick={handelClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      {/* Mobile View */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to='/'>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='/about'>About</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='/skills'>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>

      {/* Social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/srinivas-yarra-2154211a0/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/srinivasys'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://docs.google.com/document/d/1Jz8XXewgQAzvb0q-8od0CdLguC5nnkCDXfA1y3Ou2wQ/edit?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
