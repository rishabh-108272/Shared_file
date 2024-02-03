import React from 'react';
import img from './images/profile.jpg';
import  './css/Style.css';
function file(){
    return (
    <div className='parent'>
         <div className="aside">
        <div className="image">
            <img src={img} alt='logo'/>
        </div>
        <div className="info">
            <p>Profile</p>
        </div>
        <div class="group">
            <p>Group1</p>
        </div>
        <div class="group">
            <p>Group2</p>
        </div>
        <div class="group">
            <p>Group3</p>
        </div>
        <div class="group">
            <p>Group4</p>
        </div>
    </div>
    <div class="main">
        <div class="btn">
            <p>Submit</p>
        </div>

        <div class="items">
            
        </div>
    </div>
    </div>
    );
}

export default file;