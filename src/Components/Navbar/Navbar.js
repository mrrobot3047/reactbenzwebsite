import React,{useState} from 'react'
import slider from  '/Users/VIVEK/mercedesbenz/src/Images/benz logo.png'
import {Link} from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {
    const[openLinks,setOpenLinks]=useState(false);
    const  toggleNavbar =()=>{
        setOpenLinks(!openLinks)

    }
  return (
    <div className='navbar'>
        <div className='leftside' id={openLinks ? "open":"close"}  >
            <img id="img" src={slider}/>
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/collection">Collection</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}  >
                <i class="fa-solid fa-bars"></i>
            </button>

        </div>
    </div>
  )
}

export default Navbar
