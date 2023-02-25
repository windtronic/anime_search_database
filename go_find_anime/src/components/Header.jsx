import React from "react"
import Nav from './Nav'

export default function Header (props) {
    return (
    <div>
        <div className='header-title'>
          <h1>GO FIND ANIME</h1>
        </div>

        <div className='nav-container'>
            <Nav />
        </div>
    </div>
    )
}