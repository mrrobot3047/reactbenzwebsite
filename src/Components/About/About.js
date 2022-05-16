import React from 'react'
import Slider from '/Users/VIVEK/mercedesbenz/src/Images/benz12321.jpg'
import '../About/About.css'

function About() {
  return (
    <div className='about'  >
        <div className='aboutTop' style={{backgroundImage:`url(${Slider})`}} >

        </div>
        <div className='aboutBottom'>
            <h1>About us</h1>
            <p>Mercedes-Benz (German pronunciation: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-] (listen)),[6][7] commonly referred to as Mercedes, is a German luxury automotive brand. Both Mercedes-Benz and Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) are headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.[note 2] Its first Mercedes-Benz-badged vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.[8]

The company's origins lie in Daimler-Motoren-Gesellschaft's 1901 Mercedes and Karl Benz's 1886 Benz Patent-Motorwagen, which is widely regarded as the first internal combustion engine in a self-propelled automobile. The slogan for the brand is "the best or nothing".[9]</p>
        </div>
    </div>
  )
}

export default About