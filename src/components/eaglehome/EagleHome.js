import React from "react";
import HomeContent from './HomeContent';
import Navigation from "../navigation/Navigation";
import "./EagleHome.css";

function EagleHome() {
    return (
        <div className="eagle-home">
            <Navigation />
            <HomeContent />
        </div>
    );
}

export default EagleHome;