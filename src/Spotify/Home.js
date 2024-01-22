import React from "react";
import {Link} from "react-router-dom"
import './Home.css'


export default function Home(){
    return(
        <>
            <div className="container1">
            <i class="fa-brands fa-spotify"></i>
            <p id="p1">Spotify</p>
            </div>
            
            
            <Link to="/">
                <div className="container1">
                <i class="fa-solid fa-house"></i>
                    <p id="p1">Home</p>
                </div>
                </Link>
           
            
            
            <Link to="/search">
            <div className="container1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p id="p2">Search</p>
            </div>
            </Link>
            
        </>

    )
}