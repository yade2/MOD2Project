import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'


const Nav = () =>{
    return (
        <nav>
            
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/recipe/search">Recipe Search</Link></li>
            <li><Link to ="/wine/search">Wine Search</Link></li>
            <li><Link to ="/contact">Contact Us</Link></li>
            
        
        </nav>   
    );
}

export default Nav
