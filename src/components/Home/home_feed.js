import React from 'react'

const HomeFeed = () => {
  return (
    <div className='box' style={{"padding" : "3rem", "backgroundColor" : "#fcf2f2"}}>
        <div className='flex' style={{"justifyContent" : "space-between"}}>
            <p style={{"fontSize" : "24px", "fontWeight" : "bold"}}>What our customers are<br/> saying</p>
            <div className='flex'>
                <div><img src='./images/LeftArrow.svg' width="50px" height="30px"/></div>
                <div style={{"backgroundColor" : "red", "borderRadius" : "40px", "height" : "2rem"}}><img src='./images/RightArrow.svg' width="50px" height="30px"/></div>
            </div>
        </div>
        <div className='flex' style={{"justifyContent" : "space-between"}}>
            <div className='flex' style={{"flexWrap" : "wrap", "gap" : 20}}>
                <div style={{"height" : "150px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem", "position" : "relative"}}>
                    <div style={{"height" : "70%", "color" : "gray"}}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.
                    </div>
                    <div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <div style={{"display" : "flex", "alignItems" : "center"}}>
                                <div style={{"marginRight" : "0.5rem"}}>
                                <img src='./images/Ellipse4.svg' width="50px" height="50px"/>
                                </div>
                                <div>
                                    <b>Kristin Watson</b><br/>
                                    <span style={{"fontSize" : "smaller"}}>Jun 27, 2020 · 6 min read</span>
                                </div>
                            </div>
                            <div>
                                <img src='./images/rating.svg' width="100px" height="50px"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "150px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem", "position" : "relative"}}>
                    <div style={{"height" : "70%", "color" : "gray"}}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.
                    </div>
                    <div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <div style={{"display" : "flex", "alignItems" : "center"}}>
                                <div style={{"marginRight" : "0.5rem"}}>
                                <img src='./images/Ellipse4.svg' width="50px" height="50px"/>
                                </div>
                                <div>
                                    <b>Kristin Watson</b><br/>
                                    <span style={{"fontSize" : "smaller"}}>Jun 27, 2020 · 6 min read</span>
                                </div>
                            </div>
                            <div>
                                <img src='./images/rating.svg' width="100px" height="50px"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div style={{"height" : "150px", "width" : "350px", "borderRadius" : "5px", "backgroundColor" : "white", "padding" : "1rem", "position" : "relative"}}>
                    <div style={{"height" : "70%", "color" : "gray"}}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.
                    </div>
                    <div>
                        <div style={{"display" : "flex", "justifyContent" : "space-between"}}>
                            <div style={{"display" : "flex", "alignItems" : "center"}}>
                                <div style={{"marginRight" : "0.5rem"}}>
                                <img src='./images/Ellipse4.svg' width="50px" height="50px"/>
                                </div>
                                <div>
                                    <b>Kristin Watson</b><br/>
                                    <span style={{"fontSize" : "smaller"}}>Jun 27, 2020 · 6 min read</span>
                                </div>
                            </div>
                            <div>
                                <img src='./images/rating.svg' width="100px" height="50px"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeFeed;