import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="headone">
               <nav>
                   <Link to="/">
                       <h1 className="title">
                       Home
                       </h1>
                      
                   </Link>
                  
               </nav>
            </div>
        )
    }
}
