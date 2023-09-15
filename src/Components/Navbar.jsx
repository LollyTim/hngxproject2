import React, {useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = ({ onSearch }) => {

     const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{
        backgroundImage:"url(Poster.png)",
        backgroundSize: "1440px",
        backgroundRepeat:'no-repeat',

    }}>
    <nav className='justify-center  items-center flex p-3 gap-40'>
     <div className=' ml-10 inline-flex items-center gap-5 '>
        <img src="tv.png" alt=""  className=' w-8 '/>
        <h2 className=' text-white'>MovieBox</h2>
     </div>
     <div className=' relative flex items-center mr-8 justify-between'>
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
        className=' bg-transparent px-2 py-2 font-semibold placeholder-white text-white rounded-xl border-none w-[525px] ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500'
        
      />
      <button className=' absolute ml-[480px]' onClick={handleSearch}><AiOutlineSearch className='text-white w-10' /></button>
     </div>
     <div className=' gap-5 flex'>
     <button className='text-white'>Sign In</button>
     <img  className="rounded-full bg-[#BE123C] p-1"  src="Menu alt 4.png" alt="" />
     </div>
    </nav>
     <section className='flex'>
        <div className='h-[445px] mt-[100px] ml-36'>
       <h1 className='w-[404px] text-white font-DM Sans font-[700] text-5xl leading-[56px]'>John Wick 3 :<br/> Parabellum</h1>
       <div className='py-4 flex gap-3 text-[#adadad] text-sm'>
        <div className='flex gap-1'>
        <img src="MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" alt="bif" />
        <p>80.0/100</p>
        </div>
        <div className='flex gap-1'>
        <img src="PngItem_1381056 1.png" alt="" />
        <p>80.0/100</p>
        </div>
       </div>
       <p className='w-[294px] text-white text-sm mb-6'>John Wick is on the run after killing a member of the
         international assassins' guild, and with a
          $14 million price tag on his head, he is the 
          target of hit men and women everywhere.</p>
          <button className='flex text-white bg-[#BE123C] justify-center p-3 rounded-md gap-2 items-center'> <img src="Play.png" alt="" /> WATCH TRILER</button>
        </div>
       <div className='text-[#9b9595] ml-[760px] flex-1 items-center justify-center pt-40'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
     </section>
    </div>
  )
}

export default Navbar
