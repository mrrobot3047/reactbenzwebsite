import React from 'react'

function MenuItem({name,image,dateoforigin}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{dateoforigin}</p>

    </div>
  )
}

export default MenuItem