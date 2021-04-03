import React from 'react';
import './Nav.css'
const styling = {
    nav: {
        width: "100%",
        
    },
    login:{
        float:"right"
    },
    header:{
        fontSize: '30px',
        padding: '14px 16px',
        color: 'whitesmoke'
    },
    sticky:{
        position: 'sticky',
        top: '0'
       
    }
}


const Navigation = ()=>{
 

  return (
    <div style={styling.nav}>

            <ul>
                <li style={styling.header}>Bamazon</li>
                <li style={styling.login}>
                    <a href='/login'>Login</a>
                </li>
            </ul>

        <div style={styling.sticky}>

            <ul>
                <li>
                    <a href='/'>
                        Home
                    </a>
                </li>
            
                <li>
                    <a href='/history'>
                        History
                    </a>
                </li>

                <li className='dropdown'>
                    <a href="/departments" className='dropbtn'>
                        Departments
                    </a>

                    <div className='dropdown-content'>
                        <a href='/clothing' className='clothingbtn'>
                            Clothing
                        </a>
                            <div className='clothing-content'>
                                <a href='/men'>
                                    Men
                                </a>
                                <a href='/women'>
                                    Women
                                </a>
                                <a href='/boy'>
                                    Boy
                                </a>
                                <a href='/girl'>
                                    Girl
                                </a>
                                <a href='/baby'>
                                    Baby
                                </a>
                            </div>
                        <a href='/household'>
                            Home Improvement
                        </a>
                        <a href='/electronic'>
                            Electronics
                        </a>
                    </div>
                </li>

                <li style={{float:'right'}}>
                    <a href='/cart'>
                        Cart
                    </a>
                </li>
            </ul>

        </div>
    
    </div>
        
  );
}


export default Navigation;