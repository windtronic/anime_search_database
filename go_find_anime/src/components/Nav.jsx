import { Link } from 'react-router-dom'
import React from "react"

export default function Nav () {
    
    return (
        <div className='Link'>
            
            <Link to='/'>Home</Link>
            <Link to='/Data'>Data</Link>
            
        </div>
    )
}