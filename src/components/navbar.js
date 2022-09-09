import React from 'react'
import harmbugger from "./assets/images/icon-hamburger.svg"
import close from "./assets/images/icon-close.svg"
import logo from "./assets/images/logo.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    console.log(isOpen)
    console.log(setIsOpen)
    return (
        <div className='z-10 absolute flex flex-row pl-[10em] pt-10 lg:items-center lg:pl-8  lg:py-8 lg:justify-start xl:justify-start xxl:justify-start'>
            <div>
                <img src={logo} alt="logo" className='mr-16 lg:w-[7em]' />
            </div>
            <nav className={`${isOpen ? "open w-screen py-8 lg:py-0 lg:w-auto" : ""}`}>
                <ul className='flex flex-row flex-wrap item-center justify-center gap-7 lg:gap-7 lg:text-2xl'>
                    <li><button className="font-medium border-b-2 border-transparent hover:border-neutral-900 transition-all
                        duration-200 lg:text-white lg:hover:border-white " >home</button></li>
                    <li><button className="font-medium border-b-2 border-transparent hover:border-neutral-900 transition-all
                        duration-200 lg:text-white lg:hover:border-white" >shop</button></li>
                    <li><button className="font-medium border-b-2 border-transparent hover:border-neutral-900 transition-all
                        duration-200 lg:text-white lg:hover:border-white" >about</button></li>
                    <li><button className="font-medium border-b-2 border-transparent hover:border-neutral-900 transition-all
                        duration-200 lg:text-white lg:hover:border-white" >contact</button></li>
                </ul>
            </nav>
            <div className='absolute left-8 top-8 z-20 lg:hidden '>
                {isOpen ? (
                    <button onClick={() => setIsOpen(false)}>
                        <img src={close} alt="harmburger" />
                    </button>
                ) : (<button onClick={() => setIsOpen(true)}>
                    <img src={harmbugger} alt="harmburger" />
                </button>)}
            </div>
        </div>
    )
}
