import React from 'react'

const HomeArticle = () => {
  return (
    <div className='box flex' style={{"height" : "25rem", "backgroundColor" : "red", "padding" : "2rem", "color" : "white"}}>
        <div className='flex' style={{'width' : '50%', "flexDirection" : "column",}}>
            <h2 style = {{"width" : "100%"}}>Tasty Meals made for You</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div style={{'width' : '50%', "padding" : "4rem", "position" : "relative"}}>
            <img className='first' height="100px" width = "100px" style={{"top" : -70, "right" : 250}} src='./images/food1.jpeg' alt='food1'></img>
            <img className='first' height="100px" width = "100px" style={{"top" : 100, "right" : 200}} src='./images/food2.jpeg' alt='food2'></img>
            <img className='first' height="130px" width = "130px" style={{"bottom" : -150, "right" : 0}} src='./images/food3.jpeg' alt='food3'></img>
            <img className='first' height="170px" width = "170px" style={{"top" : -100, "right" : 0}} src='./images/food4.jpeg' alt='food4'></img>
            <img src=''></img>
        </div>
    </div>
  )
}

export default HomeArticle