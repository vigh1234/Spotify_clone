import React from "react";
import './Category.css'
import { Link } from "react-router-dom";


export default function Category(){
    return(
        <>
        <div className="container12">  
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
        <input id="input2" type="text"  placeholder="what do you want to listen to?"/>
        
        <p className="p20"><Link id="sign" to="/signup">sign up</Link></p>
       
         <button id="btn2" type="button"><Link to="/Login"><p className="p2">Log in</p></Link></button>
       
        </div>
        <div className="browse">Browse all</div>
        <div className="container13">

            <div className="song1"><p className="title">Podcast</p></div>
            <div className="song2"><p className="title">Live Events</p></div>
            <div className="song3"><p className="title">Made for you</p></div>
            <div className="song4"><p className="title">New Releases</p></div>
            


        </div>
        <div className="container14">

            <div className="song5"><p className="title">Hindi</p></div>
            <div className="song6"><p className="title">Punjabi</p></div>
            <div className="song7"><p className="title">Tamil</p></div>
            <div className="song8"><p className="title">Telugu</p></div>


        </div>
        <div className="container15">

            <div className="song9"><p className="title">Party</p></div>
            <div className="song10"><p className="title">Devotional</p></div>
            <div className="song11"><p className="title">Decades</p></div>
            <div className="song12"><p className="title">Hip-Hop</p></div>


        </div>
        </>
    )
}