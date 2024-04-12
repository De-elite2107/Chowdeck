import React from 'react'

const HomeGo = () => {
  return (
    <div className='box flex' style={{"padding" : "3rem", "backgroundColor" : "#ffbfc3"}}>
        <div style={{"width" : "50%"}}>
            <b style={{"fontSize" : "32px"}}>Meals on the Go!!!</b>
            <p style={{"marginBottom" : "3rem", "color" : "#18191F"}}>
                Download the app to to enjoy discounts, promotions and offers.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.
            </p>
            <div>
                <div>Get the App</div>
                <div className='flex' style={{"gap" : 6}}>
                    <img src='./images/googleplay_badge.svg' width="100px" height="50px"/>
                    <img src='./images/appstore_badge.svg' width="100px" height="50px"/>
                </div>
            </div>
        </div>
        <div className='flex' style={{"width" : "50%", "justifyContent" : "center"}}>
            <img src='./images/Iphone.svg' width="700px" height="400px"/>
        </div>
    </div>
  )
}

export default HomeGo