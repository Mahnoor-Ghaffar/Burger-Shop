'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Feature from './Features/Features';
import PopularBurger from './PopularBurger/PopularBurger';
import Delivery from './Delivery/Delivery';
import Team from './Team/Team';
import Reservation from './Reservation/Reservation';
import Newsletter from './Newsletter/Newsletter';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration : 1000,
        easing:'ease',
        once: true,
        anchorPlacement: "top-center"
      })
    };

    initAOS();
  },[]);


  return (
    <main className='overflow-hidden'>
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <Newsletter />
    </main>
  )
}

export default Home;