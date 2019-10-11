import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
    return <header className="header" data-testid="header">
      <nav>
          <div className="logo">
              <img public ="/images/logo-squared-c-us-white(2)" alt="Todastic"/>
          </div>
          <div className="settings">
              
          </div>
          <ul>
              <li>+</li>
              <li>
                  <FaPizzaSlice />
              </li>
          </ul>
          </nav>  
    </header>;
};