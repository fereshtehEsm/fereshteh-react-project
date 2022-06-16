import React from 'react'
import imgProfile from "./104359134.png"

const Profile=()=> {
  return (
    <div className='profile'>
      <img src={imgProfile} alt="" id="imgProfile"/>
      <div className='infoProfile'>
         <p>
!سلام، فرشته هستم
      </p>
      <p>
        <a href="https://github.com/fereshtehEsm" >Git:fereshtehEsm</a>

      </p>
      </div>
     
    </div>
  )
}

export default Profile