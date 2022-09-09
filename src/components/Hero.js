import React from "react"
import arrow from "./assets/images/icon-arrow.svg"
import left from "./assets/images/icon-angle-left.svg"
import right from "./assets/images/icon-angle-right.svg"
import roomsData from "./data"

export default function Hero() {
    const [rooms] = React.useState(roomsData)
    const [slideIndex, setSlideIndex] = React.useState(1)

    function nextSlideShow() {
        if (slideIndex !== rooms.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === rooms.length) {
            setSlideIndex(1)
        }
    }

    function prevSlideShow() {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(rooms.length)
        }
    }

    return (
        <div>
            {rooms.map((room, index) => (
                /* hero */
                <div
                    key={room.id}
                    className={slideIndex === index + 1 ? " grid md:grid-cols-2 lg:grid-cols-12" : "hidden"}>
                    <div className="p-0 relative md:col-span-8 lg:col-span-8 xl:col-span-8">
                        <picture>
                            <source media="(min-width: 500px)" srcSet={room.desk} alt="heroImage" className="w-[100%]" />
                            <img src={room.mobile} alt="heroImage" className="lg:h-screen w-[100%]" />
                        </picture>
                        <div className="absolute bottom-[-8px] right-[-1px] float-right lg:hidden ">
                            <button onClick={prevSlideShow}><img className="hover:bg-VeryDarkGray bg-black p-4" src={left} alt="left" /></button>
                            <button onClick={nextSlideShow}><img className="hover:bg-VeryDarkGray bg-black p-4" src={right} alt="right"/></button>
                        </div>
                    </div>
                    {/* discover */}
                    <div className="sm:pt-[6em] sm:p-8 md:p-8  grid lg:place-items-center md:relative md:col-span-4 lg:col-span-4 xl:col-span-4 xxl:pt-[3em] xxl:px-[4em]" key={room.id}>
                        <h1 className=" text-3xl font-bold md:text-[25px]  lg:text-3xl xxl:text-7xl xxl:leading-11 ">
                            {room.heading}
                        </h1>
                        <p className="text-gray-400 md:text=[12px] lg:text-[16px] md:leading-4 lg:leading-5 xl:leading-6 xxl:text-[20px] xxl:leading-6 ">{room.info} </p>
                        <button className="flex flex-row my-4 tracking-[0.3em] flex-nowrap items-center space-x-8 text-2xl cursor-pointer hover:ease-in-out duration-300 hover:text-gray-500 hover:pl-2 md:text-[14px] md:mb-[3em] md:mt-0 font-bold lg:text-[20px] xl:text-[26px] xxl:mb-[8em] justify-self-start
                         ">shop now <img src={arrow} alt="arrow" className="w-95 ml-4 font-bold" /></button>
                        <div className="absolute bottom-[-9px] left-[-0px] sm:hidden lg:block float-right">
                            <button onClick={prevSlideShow}><img className="hover:bg-VeryDarkGray bg-black md:py-3 md:px-[20px] lg:py-3 lg:px-[24px] xl:px-[31px] xl:py-6 ease-in duration-300" src={left} alt="left" /></button>
                            <button onClick={nextSlideShow} ><img className="hover:bg-VeryDarkGray bg-black md:py-3 md:px-[20px] lg:py-3 lg:px-[24px]  xl:px-[31px] xl:py-6 ease-in duration-300" src={right} alt="right" /></button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}