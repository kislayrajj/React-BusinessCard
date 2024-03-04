import React from 'react'


const MainContent= () => {
    return (
      <div className='p-3 m-1  text-white ' >

       
    <div className='pt-1 '>About</div>
    <div className='text-xs mt-1'>Hello! I'm someone who's deeply passionate about crafting solutions that truly make a difference, driven by a desire to positively impact lives.</div>
     <div className='pt-2 '>Interests</div>
     <div className='text-xs mt-1'>As a web developer, I'm passionate about coding, UX design, problem-solving, and staying updated with tech trends.</div>
     <div className="follow mt-3 m-1 flex justify-between text-3xl text-white ">
     <a href="https://github.com/kislayrajj"><div className="git cursor-pointer"><i class="fa-brands fa-square-github"></i></div></a> 
     <a href="https://twitter.com/Kislayrajj"><div className='twitter cursor-pointer'><i class="fa-brands fa-square-x-twitter"></i></div></a> 
     <a href=""><div className='fb cursor-pointer'><i class="fa-brands fa-facebook"></i></div></a> 
     <a href="https://www.instagram.com/kislayrajj/?igsh=MTFpbzlnYmZvN2RudA%3D%3D"><div className='insta cursor-pointer'><i class="fa-brands fa-square-instagram"></i></div></a> 
     </div>
      </div>
    
    )
  }
  
  

export default MainContent
