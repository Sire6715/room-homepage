import React from "react";
import DarkImg from "./assets/images/image-about-dark.jpg"
import LightImg from "./assets/images/image-about-light.jpg"


export default function About() {
    return (

        <div className="p-0 grid  md:grid-cols-2 lg:grid-cols-4 h-[100%] gap-0">
            <div className="md:col-span-1">
                <img src={DarkImg} alt="dark" className="md:w-[600px] md:min-w-[33%] h-[100%] " />
            </div>
            <div className=" center text-start p-8 md:p-[35px] mt-[25px] sm:mb-4 md:m-0 md:col-span-2 ">
                <h1 className=" text-2xl md:text-base mb-4 md:m-0 font-black tracking-[0.3em] lg:text-[20px] lg:leading-10">ABOUT OUR FURNITURE</h1>
                <p className="text-gray-400 sm:text-[14px] lg:text-xs md:leading-4 xxl:text-[20px] xxl:leading-6">Our multifunctional collections blend 
                design and function to suit your individual taste.Make each room unique or pick a cohesive theme that best express your interests and what inspires you.
                Find the pieces you need,from traditional to contemporary styles or anything in between.Product specialists are available to help you create your dream space.
                </p>
            </div>

            <div className="lg:col-span-1 md:col-span-1 md:row-end-1 lg:col-start-4">
                <img className=" h-[100%]" src={LightImg} alt="light xxl:w-[45em] " />
            </div>
        </div>
    )

}