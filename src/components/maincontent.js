import React from 'react'

const MainContent= () => {
    return (
      <div className='p-3 pt-10 bg-slate-700 text-white'>
        <h1 className='text-3xl font-semibold'>Reasons to Learn react</h1>
        <ol className='pt-4 list-decimal marker:text-blue-300 pl-5'>
          <li className='mt-2'>It is one the best javascript libraries </li>
          <li className='mt-3'>It is fast</li>
          <li className='mt-3'>It opens new possibilities</li>
          <li className='mt-3'>and many more ...</li>
        </ol>
        <i class="fa-brands fa-react opacity-20 text-[300px] absolute right-[-120px] top-40" ></i>
      </div>
    )
  }
  
  

export default MainContent
