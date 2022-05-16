import React from 'react'
import {Link} from 'react-router-dom'
import Slider from '/Users/VIVEK/mercedesbenz/src/Images/benz.jpeg'
import '../Home/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer' style={{backgroundImage:`url(${Slider})`}}>
            <h1>Welcome to the luxury</h1>
            <p>Lets ride benz</p>
            <Link to="/collection"><button>Book Now</button></Link>
        </div>
    </div>
  )
}

export default Home