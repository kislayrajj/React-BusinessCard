import React from 'react'


const MainContent= () => {
    return (
      <div className='p-3 m-1  text-white' >

       
    <div className='pt-1 '>About</div>
    <div className='text-xs mt-1'>Hello! I'm someone who's deeply passionate about crafting solutions that truly make a difference, driven by a desire to positively impact lives.</div>
     <div className='pt-2 '>Interests</div>
     <div className='text-xs mt-1'>As a web developer, I'm passionate about coding, UX design, problem-solving, and staying updated with tech trends.</div>
     <div className="follow mt-3 m-1 flex justify-between text-3xl text-white ">
      <div className="git cursor-pointer"><i class="fa-brands fa-square-github"></i></div>
      <div className='twitter cursor-pointer'><i class="fa-brands fa-square-x-twitter"></i></div>
      <div className='fb cursor-pointer'><i class="fa-brands fa-facebook"></i></div>
      <div className='insta cursor-pointer'><i class="fa-brands fa-square-instagram"></i></div>
     </div>
      </div>
    
    )
  }
  
  

export default MainContent
