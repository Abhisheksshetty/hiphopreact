import React from 'react'
import "./Navbar.css";
import {Link}  from 'react-router-dom';
const Navbar = () => {
    return (
        <>
         <div className="navbar">
     <Link to="/"><h1> <span><i class="fas fa-signature"></i></span> Hip Hop</h1></Link>
         <div className="nav">
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="Albums">Albums</Link></li>
             <li><Link to="Songs">Songs</Link></li>
             <li><Link to="News">News</Link></li>
             
           </ul>
         </div>
         </div>   
        </>
    )
}

export default Navbar
