import React, { useState } from "react";

function Header() {
   const [user,setUser] = useState("");
   return ( 
      <header>
               <div className="logo">
               <i className="fa-solid fa-light fa-leaf"  style={{fontSize: "50px" , color: "purple"}}></i>
               </div>
               <ul>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>About</li>
               </ul>
               <div className="btn_sign">
                  <button id="btn_s">Sing Up</button>
               </div>
      </header>
    );
}

export default Header;