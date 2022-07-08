import React from 'react'
import './NavBarStyle.css'
import pic from './/Airplane.png'


export default function NavBar() {
  return (
    <>    
    <div class='navbar'>
     <img class="pic" src={pic} alt="Logo" />
      <div class="navName">Airline Service<br></br> Management System</div>
    </div>
    </>
  )

}
