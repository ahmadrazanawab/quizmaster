import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { id: 1, name: "Home", to: '/' },
        { id: 2, name: "About", to: '/about' },
        { id: 3, name: "Q&A", to: '/' },
        { id: 4, name: "Question3",to:'/cate3'},
    ]
  return (
    <nav className="bg-[#ddd] fixed shadow-md py-4  md:py-0  w-full items-center   md:flex flex justify-between">
          <Link to="/" className="text-2xl font-bold outline-none text-gray-900 hover:text-slate-500 ease-in duration-300 mb-1 mx-4">QuizMaster</Link>
          <ul className={`md:flex  flex md:flex-row flex-col py-4 md:py-2 items-center md:static absolute md:mt-0 mt-9 w-full md:bg-[#ddd] bg-[#ddd] ${open ? 'top-9 opacity-100':'top-[-490px]'} duration-500 z-[-1] easy-in `}>
              {
                  links.map((link) => {
                      return <li className="md:mx-2 mx-0 my-4 px-2" key={link.id}>
                          <Link className="text-xl md:text-gray-700 text-gray-800 hover:text-slate-400 font-bold z-[-1] outline-none" to={link.to} onClick={()=>{setOpen(!open)}}>{link.name}</Link>
                      </li>
                  })
              }
          </ul>
      <div className="flex justify-end  w-full items-center">
         <div onClick={()=>setOpen(!open)}>
            {!open ?<GiHamburgerMenu className="flex flex-none cursor-pointer mx-2 md:hidden" size={40}/>
            :<IoClose className="flex flex-none cursor-pointer md:hidden mx-2 " size={40} />}
           </div>
      </div>
    </nav>
  )
}

export default Navbar
