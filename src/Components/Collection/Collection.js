import React from 'react'
import MenuItem from '../helpers/MenuItem'
import {MenuList} from '../helpers/MenuList'
import Sllider from '/Users/VIVEK/mercedesbenz/src/Images/dark.jpg'
import '../Collection/Collection.css'

function Collection() {
  return (
    <div className='menu' style={{backgroundImage:`url(${Sllider})`}} >
      <h1 style={{color:'white'}} className='menuTitle'>Collection</h1>
      <div className='menuList'>{MenuList.map((menuItem,key)=>{
        return <MenuItem key={key}  image={menuItem.image}name={menuItem.name} dateoforigin={menuItem.dateoforigin}  />
      })}</div>
    </div>
  )
}

export default Collection