import React from 'react'

const HomeStats = () => {
  return (
    <div style={{"padding" : "5rem"}} className='box'>
        <div className='flex box' style={{"boxShadow" : "5px 5px 5px 5px grey", "alignItems" : "center","justifyContent" : "space-around"}}>
          <div style={{"padding" : "2rem", "textAlign" : "center"}}>
            <span style={{"color" : "red", "fontSize" : "32px"}}>100%</span><br/>
            User satisfaction
          </div>
          <div style={{"padding" : "2rem", "textAlign" : "center"}}>
            <span style={{"color" : "red", "fontSize" : "32px"}}>150+</span><br/>
            Restaurants
          </div>
          <div style={{"padding" : "2rem", "textAlign" : "center"}}>
            <span style={{"color" : "red", "fontSize" : "32px"}}>24/7</span><br/>
            Customer Support
          </div>
          <div style={{"padding" : "2rem", "textAlign" : "center"}}>
            <span style={{"color" : "red", "fontSize" : "32px"}}>250K</span><br/>
            Users served
          </div>
        </div>
    </div>
  )
}

export default HomeStats