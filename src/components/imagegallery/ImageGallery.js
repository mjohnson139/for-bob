import React from "react";

import Navigation from "../navigation/Navigation";
import Carousel from "../carousel/Carousel";
import "./ImageGallery.css";

function ImageGallery() {
    return (
        <div className="image-gallery">
            <Navigation />
            <Carousel />
        </div>
    );
}

export default ImageGallery;