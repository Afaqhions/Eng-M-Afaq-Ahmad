import React from 'react'

const Contact = () => {
  return (
    <div className='flex-col justify-center my-[5rem]'>
      <span className='text-4xl font-extrabold flex align-middle justify-center my-8'>Contact</span>
      <div className='lg:mx-[25rem] my-[3rem]'>
        <form action="https://api.web3forms.com/submit" method="POST" className='px-8 border-2 rounded-lg py-16 mx-10 lg:flex-col justify-center'>
          <input type="hidden" name="access_key" value="587ebdde-7315-448b-999e-b12c876a6b5c"></input>
        <label htmlFor="">Name:</label><br />
        <input className='bg-red-500 rounded-lg text-white p-1 my-4 sm:w-[240px]' type="text" name='name' placeholder='Enter your Name...' /><br />
        <label htmlFor="">Email:</label><br />
        <input className='bg-red-500 rounded-lg text-white p-1 my-4 sm:w-[240px]' type="email" name='email'  placeholder='Enter your Email...'/><br />
        <label htmlFor="">Phone:</label><br />
        <input className='bg-red-500 rounded-lg text-white p-1 my-4 sm:w-[240px]' type="number" name="phone" placeholder='Enter your Phone...'/><br />
        <label htmlFor="">Message:</label><br />
        <textarea className='bg-red-500 rounded-lg w-[17.5rem] h-[10rem] my-4 text-white p-1 sm:w-[240px]' name='message' placeholder='Enter your Message...'></textarea><br/>
        <button
              href="#contact"
              class="inline-block px-6 py-2 border border-red-500 text-red-500 hover:bg-white hover:text-red-500 transition duration-300 rounded-full text-[1rem] uppercase tracking-widest"
            >
              Contact Us
            </button>
      </form>
      </div>
    </div>
  )
}

export default Contact