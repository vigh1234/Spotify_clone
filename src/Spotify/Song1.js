import React from "react";
import { Link } from "react-router-dom";
import './Song1.css'

export default function Song1(){

    // const [song,setSong]=useState([])

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(response => response.json())
    //     .then(song => setSong(song.splice(0,10)))
    // })
    
    return(
        <>
        <div className="container7">  
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
        <p className="p1"><Link  id="sign"to="/signup">sign up</Link></p>
        <button id="btn1" type="button"> <Link to="/login"><p className="p2">Log in</p></Link> </button>
        </div>
        <div className="Mainimage">
        <div className="image1"><img className="starboy" src="./image/1.jpg" atl="star boy"/></div>
        <div className="songname"><p id="songname">Song</p>
        <div className="weeknd"><p id="weeknd">starboy</p></div>
        <div className="songdescription">The weeknd  starboy  2016</div>
        </div>
        </div>
        <span className="playbutton"><Link to ="/songplay"><i class="fa-solid fa-circle-play"></i></Link></span>
        <span className="playbutton"><i class="fa-regular fa-heart"></i></span>
        <div id="fullsong">
        <div className="fullsong">Sign in to see lyrics and listen to the full track</div>
        <Link to ='/login'><div className="fullsong1">Login</div></Link>
       <button id="signbutton" type="button"> <Link to ='/signup'><p className="p2">Sign up</p></Link></button>
        </div>
        

        </>
    )
}