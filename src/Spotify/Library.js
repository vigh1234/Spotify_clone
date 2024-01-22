import React from "react";
import './Library.css'

export default function Library(){

    return(
        <>
        <div className="container3">
            <div className="container2">
                <i class="fa-solid fa-list"></i>
                <p id="libry">Your library</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div className="container4">
                <p id="p3">Create your first Playlist</p>
                <p id="p4">It's easy we'll help you</p>
                <button type="button"><p id="p5">Create playlist</p></button>

                <p id="p8">Let's find some podcast to follow</p>
                <p id="p4">We'll keep you update on new episodes</p>
                <button type="button"><p id="p5">Browse podcast</p></button>
            </div>


            <div className="container5">
                <div id="p6">Legal</div>
                <div id="p6">Privacy Center</div>
                <div id="p6">Privacy policy</div>    
            </div>
            <div className="container6">
                <div id="p6">Cookies</div>
                <div id="p6">About ads</div>
                <div id="p6">Accessibility</div>    
            </div>
            <div className="container6">
                <div id="p6">Cookies</div>
            </div>

            <div id="container">
                <i class="fa-solid fa-earth-americas"></i><span id="p7">English</span>
            </div>
        </div>
        
        </>
    )
}