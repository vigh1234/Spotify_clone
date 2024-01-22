import React from 'react'
import './Main3.css'
import Home from './Home'
import Library from './Library'
import Player from './Player'
import Song1 from './Song1'


export default function Main2() {
  return (
    <div>
      <div className="container">
            
        <div className="home"><Home/></div>
        <div className="library"><Library/></div>
        <div className="Song1"><Song1/></div>
        <div className="player"><Player/></div>
        
      </div>
 
    </div>
  )
}