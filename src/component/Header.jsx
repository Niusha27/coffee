import React,{useState} from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] =useState(false)

    const toggleMenu =()=>{
        setIsMenuOpen(!setIsMenuOpen)
    }
    return (
        <header className="absolute top-0 left-0 w-full text-white z-10" >
            <nav className="px-10 py-5" >
                <div className="flex justify-between items-center " >

                    <div className="hidden lg:flex" >
                        <h1>کافه امضا</h1>
                    </div>

                    <div className="lg:hidden" >
                        <button  onClick={toggleMenu} className="lg:hidden " >
                            <IoMdMenu className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="hidden lg:flex gap-10" >
                        <ul className="flex gap-10" >
                            <li>خانه</li>
                            <li>منو</li>
                            <li>درباره ما</li>
                            <li>ارتباط با ما</li>
                        </ul>
                    </div>

                    <div  className="flex">       
                        <button className="mx-2 hidden bg-cream px-4 py-2 rounded-3xl text-gray-950 lg:block" >ثبت نام</button>
                        <button className="hidden mx-2 lg:block" > ورود</button>
                    </div>
                </div>
            </nav>

            <div className={`fixed w-[300px] top-0 right-0 h-screen bg-gray-300  text-gray-950 p-4 transform transition-transform duration-300
            ease-in-out ${
                isMenuOpen? "translate-x-0" : "translate-x-full"
            }
            `} >

            </div>

            <div></div>
            
            
        </header>
    );
};

export default Header;
