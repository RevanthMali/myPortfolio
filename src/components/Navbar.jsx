import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Project from "../components/Projects"
import Contact from "../components/contact"
import About from "../components/AboutMe"
const Nav=()=>{
    const [Nav,SetNav] = useState(false);
    const handleNav = ()=>{
        SetNav(!Nav);
    } 
    const navItems = [
        {id:1,text:"About Me",path:"/aboutMe"},
        {id:2,text:"My Work",path:"/projects"},
        {id:3,text:"Say Hi!👋",path:"/contact"},
    ];
    return ( 
        <div className='bg-black flex justify-between items-center h-24 max-w-[1300px] font-semibold mx-auto px-4 text-fuchsia-700'>
          {/* Logo */}
          <h1 className='w-full text-3xl font-bold text-[#e13ae9e3]'>RM</h1>
    
          {/* Desktop Navigation */}
          <ul className='hidden md:flex'>
            {navItems.map(item => (
              <li
                key={item.id}
                className='pl-4 pr-4  pt-4 font-bold bg-transparent hover:bg-zinc-950 rounded-xl m-2 cursor-pointer duration-300 hover:text-lime-600'
              >
                {item.text}
              </li>
            ))}
          </ul>
    
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block md:hidden'>
            {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
    
          {/* Mobile Navigation Menu */}
          <ul
            className={
              Nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
            <h1 className='w-full text-3xl font-bold text-[#aeaeae] m-4'>RM</h1>
    
            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-slate-800 duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                {item.text}
              </li>
            ))}
          </ul>
       

        </div>
      );
};
export default Nav;