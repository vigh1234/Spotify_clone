import React from "react";
import { Link } from "react-router-dom";
import './Player.css'

export default function Player(){

    return(
        <>
        <div className="container11">
            <div className="preview">PREVIEW OF SPOTIFY
                <p className="preview1">Sign up to get unli,ited songs and padcast occational ads. No credit card needed</p>

            </div>
            <div className="sign up">
                
            <button id="btn20" type="button"><Link to ="/signup"><p className="p2">Sign up Free</p></Link></button>
               
            </div>
        </div>
        </>
    )
}