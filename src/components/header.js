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
        <div className='ancDiv'>
          <a className='navLink' href=''><span className='anc'>an</span></a>
          <a className='navLink' href=''><span className='anc'>an</span></a>
        </div>
    </div>
  )
}

export default Header