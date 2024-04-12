import React from 'react'

const HomeMeals = () => {
  return (
    <div>
        <div className='box' style={{"padding" : "6rem 3rem 3rem 3rem", "backgroundColor" : "#FFE5E5"}}>
            <div className='flex' style={{"justifyContent" : "space-between", "paddingBottom" : "3rem"}}>
                <div><b style={{"fontSize" : "32px"}}>Simple Meals for You</b></div>
                <div className='flex' style={{"gap" : 10, "alignItems" : "center"}}>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "white", "backgroundColor" : "red","fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>All</a>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>BreakFast</a>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Lunch</a>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Dinner</a>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Desert</a>
                    <a href='/' style={{"width" : "5rem", "height" : "1.5rem", "paddingTop" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Beverage</a>
                </div>
            </div>
            <div className='flex' style={{"flexWrap" : "wrap", "gap" : 40}}>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "350px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem 0rem 1rem 0rem", "position" : "relative"}}>
                    <div className='flex' style={{"alignItems" : "center"}}>
                        <img src='./images/star.svg' width="50px" height="50px"/> <span>4.5</span>
                    </div>
                    <div style={{"height" : "55%"}}>
                        <img style={{"position" : "absolute", "top" : -100, "right" : -70}} src='./images/food5.svg' width="350px" height="350px"/>
                    </div>
                    <div style={{"padding" : "1rem"}}>
                        <div style={{"paddingBottom" : "1rem"}}>French Toast and Coffee</div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <b style={{"fontSize" : "1.5rem"}}>&#36;10</b>
                            <div>
                                <a href='/' style={{"width" : "5rem", "padding" : "0.5rem", "color" : "red", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px"}}>Add To Cart</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div style={{"padding" : "3rem", "width" : "100%"}}>
                <button style={{"display" : "block", "width" : "7rem", "padding" : "0.5rem", "color" : "white", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "20px", "margin" : "auto", "backgroundColor" : "red"}}>Explore Menu</button>
            </div>
        </div>
    </div>
  )
}

export default HomeMeals