import React from "react";
import Img1 from "../../../../public/images/f1.jpg";
import Img2 from "../../../../public/images/f2.jpg";
import Img3 from "../../../../public/images/f3.jpg";
import Image from "next/image";

const Feature = () => {
    return (
        <main id="Features" className="pt-[5rem] pb-[3rem]">
           {/* Heading */}
           <h1 className="heading">
            Burgers made with <br /> love and 
            <span className="text-red-600"> care</span>
           </h1>

           {/* Cards */}
           <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid
           grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">

            {/* 1st Card */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={Img1} alt="burger cards" className="rounded-3xl" />
                    <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                        Our Burger
                    </h2>
                    
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dignissimos quaerat voluptate ut quam, placeat nemo laborum deleniti laudantium ratione.
                    </p>
                </div>
            </div>

            {/* 2nd Card */}
            <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            >

                <div className="lg:translate-y-[3rem] p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={Img2} alt="burger cards" className="rounded-3xl" />
                    <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                        Your Opinion is important
                    </h2>
                    
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dignissimos quaerat voluptate ut quam, placeat nemo laborum deleniti laudantium ratione.
                    </p>
                </div>
            </div>

            {/* 3rd card */}
            <div 
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
            >
                <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
                    <Image src={Img3} alt="burger cards" className="rounded-3xl" />
                    <h2 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
                        Chicken Burgers
                    </h2>
                    
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dignissimos quaerat voluptate ut quam, placeat nemo laborum deleniti laudantium ratione.
                    </p>
                </div>
            </div>

           </div>
        </main>
    )
};

export default  Feature;