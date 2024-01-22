import React from 'react'
import './Main4.css'
import Home from './Home'
import Library from './Library'
import Song1 from './Song1'
import SongPlay from './songplay'


export default function Main2() {
  return (
    <div>
      <div className="container">
            
        <div className="home"><Home/></div>
        <div className="library"><Library/></div>
        <div className="Song1"><Song1/></div>
        <div className="songplay"><SongPlay/></div>
        
      </div>
 
    </div>
  )
}