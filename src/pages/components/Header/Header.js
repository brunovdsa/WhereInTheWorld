import React from 'react';
import whitemoon from './img/white-moon.png';
import './css/header.css'



function Header() {
    return(
      <div className="header-default">
        <div className="container">
          <h1>Where in the world?</h1>
            <button>
              <img src={whitemoon} alt="Ativar e desativar Dark Mode"></img>
              <p>Dark Mode</p>
            </button>            
        </div>        
      </div>
    );
}

export default Header;