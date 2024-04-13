import React from 'react'



const Header = () => {
  return (
    <div className='flex header box' style={{"justifyContent" : "space-between"}}>
        <div><img src='./images/Chow.svg' width="70px" height="50px"/></div>
        <nav>
            <a className='navLink' href=''>Home</a>
            <a className='navLink' href=''>Menu</a>
            <a className='navLink' href=''>About</a>
            <a className='navLink' href=''>Restaurants</a>
            <a className='navLink' href=''>Contact</a>
        </nav>
        <div className='ancDiv flex'>
          <a className='navLink' href=''><span className='anc'><img src='./images/Vector.svg' width="100%" height="100%"/></span></a>
          <a className='navLink' href=''><span className='anc'><img src='./images/Vector_2.svg' width="100%" height="100%"/></span></a>
        </div>
    </div>
  )
}

export default Header