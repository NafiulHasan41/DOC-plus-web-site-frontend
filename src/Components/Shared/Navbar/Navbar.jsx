import {  useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink,} from "react-router-dom";
import Swal from "sweetalert2";




const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



          const customNavLink = (
            <>
             
                <NavLink to="/"  className={({ isActive }) =>
                      isActive ? " text-[#FFC637] text-[16px]  font-normal my-2 hover:bg-cyan-300  md:mx-[23px] rounded-lg   border-none" : "text-[16px]  font-normal my-2 hover:bg-cyan-300  md:mx-[23px]  text-[#020043] rounded-lg  border-none"
                    }>Home</NavLink>
                <NavLink to="/services"  className={({ isActive }) =>
                      isActive ? " text-[#FFC637] text-[16px]  font-normal my-2 hover:bg-cyan-300  md:mx-[23px] rounded-lg  border-none" : "text-[16px] font-normal my-2 hover:bg-cyan-300  md:mx-[23px]  text-[#020043] rounded-lg  border-none"
                    }>Services</NavLink>
                <NavLink to="/blogs"  className={({ isActive }) =>
                      isActive ? " text-[#FFC637] text-[16px]  font-normal my-2 hover:bg-cyan-300  md:mx-[23px] rounded-lg   border-none" : "text-[16px] font-normal my-2 hover:bg-cyan-300  md:mx-[23px]  text-[#020043] rounded-lg  border-none"
                    }>Blog</NavLink>
                <NavLink to="/about_us"  className={({ isActive }) =>
                      isActive ? " text-[#FFC637] text-[16px]  font-normal my-2 hover:bg-cyan-300  md:mx-[23px] rounded-lg   border-none" : "text-[16px] font-normal my-2 hover:bg-cyan-300  md:mx-[23px]  text-[#020043] rounded-lg  border-none"
                    }>About us</NavLink>

               

                  
        
            </>
          );

    



    return (
        <div>
       <div>
           <nav className={` max-w-[1160px] h-[48px] mx-auto `}>
               <div className="">
                   <div className="flex justify-between  lg:flex lg:items-center  lg:justify-between">
                       <div className="flex items-center justify-between">

                           <div className="flex gap-2">
                               <Link to='/'>
                               <img className=" w-full lg:w-[124px] lg:h-[32px] h-10 rounded-lg" src="https://i.ibb.co/X2TH5Kr/logo-dark.png"
                                   alt="logo" />
                               </Link>

                           </div>

                          
                       </div>
                       <div className="flex flex-row  items-center md:flex-row-reverse lg:items-center md:mt-4 lg:mt-0 md:gap-4 md:my-3">

                         
                           <div>
                             {/* Mobile menu button */}
                           <div className="flex lg:hidden">
                               <button onClick={toggleMenu} type="button"
                                   className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                   aria-label="toggle menu">
                                   {!isOpen ? (
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                   </svg>
                                   ) : (
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                   </svg>
                                   )}
                               </button>

                           </div>

                               {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                           <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300
                               ease-in-out bg-[#a0c5c4] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto
                               lg:opacity-100 lg:translate-x-0 flex flex-col-reverse lg:flex lg:flex-row lg:items-center
                               ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full' }`}>
                               <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                   {customNavLink}
                               </div>

                           </div>

                           </div>
                          
                       </div>
                       <div>
                       <div>
                               <div className="flex flex-row  items-center lg:items-center md:mt-4 lg:mt-0 md:gap-4 md:my-3">

                    
                                 <div>
                                       
                                       <div 
                                           className=" border px-[28px] py-[14px]  rounded-[12px] border-[#343268] flex items-baseline gap-2   text-black">
                                           <p className=" font-medium text-[16px] text-[#020043]">Appointment</p>
                                           <MdArrowOutward />
                                       </div>
                                       
                                   </div>

                               </div>
                           </div>
                       </div>

                   </div>
               </div>
           </nav>
       </div>

   </div>
    );
};

export default Navbar;