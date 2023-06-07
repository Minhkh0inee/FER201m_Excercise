import React, { Component, useState } from "react";
import { Players } from "../shared/ListOfPlayers";
// import React from 'react'
export default function Navigation() {
    const [isSelected,SetSelected]=useState(0)
    const data=[]
  return (
            <div>
                <nav>
                    <ul className="nav">
                        <li className={`nav-ele ${isSelected == 0 ? "active": "" }`}  onClick={()=>SetSelected(0)}><a href="#home"><span class="text-dec-none">Home</span></a></li>
                        <li   className={`nav-ele ${isSelected == 1 ? "active": "" }`} onClick={()=>SetSelected(1)}><a herf="#news">News</a></li>
                        <li   className={`nav-ele ${isSelected == 2 ? "active": "" }`} onClick={()=>SetSelected(2)}><a href="#about">About</a></li>
                        <li  className={`nav-ele ${isSelected == 3 ? "active": "" }`} onClick={()=>SetSelected(3)}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
  )
}    

