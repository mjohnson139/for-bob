import React from 'react';
import eaglebuddy from '../../assets/images/eagle-buddy.jpg';

const HomeContent = () => {
    return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginRight: 'auto', marginLeft: 'auto'}}>
        <h1>Hello Eagle Fans!</h1>
        <img style={{height: 200, width: 300}} src={eaglebuddy} alt="eagle buddy" />
        <p>Welcome to the official Pineapple Under the Sea website all about Eagles!</p>
        <p>Check out each section to the left for tons of EAGLE FACTS you can share with your friends!</p>
    </div>
    )}

export default HomeContent;