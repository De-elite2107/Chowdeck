import React from 'react'

const Footer = () => {
  return (
    <div style={{"width" : "90%", "margin" : "auto", "padding" : "3rem", "backgroundColor" : "black", "color" : "white"}}>
        <div className='box flex' style={{"justifyContent" : "space-around", "alignItems" : "start", "paddingBottom" : "3rem", "borderBottom" : "3px solid white"}}>
            <div style={{"width" : "15%"}}>
                <p style={{"paddingBottom" : "1rem", "color" : "red"}}>Solutions</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </div>
            <div style={{"width" : "15%"}}>
                <p style={{"paddingBottom" : "1rem", "color" : "red"}}>Support</p>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
            </div>
            <div style={{"width" : "15%"}}>
                <p style={{"paddingBottom" : "1rem", "color" : "red"}}>Company</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Partners</p>
            </div>
            <div style={{"width" : "15%"}}>
                <p style={{"paddingBottom" : "1rem", "color" : "red"}}>Legal</p>
                <p>Claim</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
            <div style={{"width" : "30%"}}>
                <p style={{"paddingBottom" : "1rem", "color" : "red"}}>Subscribe to our newsletter</p>
                <p>The latest news, articles, and resources, sent to your inbox weekly</p>
                <div className='flex' style={{"gap" : 5}}>
                    <input placeholder='Enter your email' style={{"padding" : "0.5rem"}}/>
                    <button style={{"display" : "block", "width" : "7rem", "padding" : "0.6rem", "color" : "white", "fontSize" : "small", "border" : "1px solid red", "borderRadius" : "5px", "backgroundColor" : "red"}}>Subscribe</button>
                </div>
            </div>        
        </div>
        <div className=' box flex' style={{"padding" : "3rem", "justifyContent" : "space-between"}}>
            <div>© 2020 Dlex, Inc. All rights reserved</div>
            <div className='flex' style={{"gap" : 30}}>
                <img src='./images/logo-facebook.svg' width="20px" height="20px"/>
                <img src='./images/logo-twitter.svg' width="20px" height="20px"/>
                <img src='./images/logo-instagram.svg' width="20px" height="20px"/>
                <img src='./images/logo-github.svg' width="20px" height="20px"/>
            </div>
        </div>
    </div>
  )
}

export default Footer