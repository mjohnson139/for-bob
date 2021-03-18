import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="options">
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/eaglehome"
                >
                    <span className="title">Home</span>
                </NavLink>
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/eaglebehavior"
                >
                    <span className="title">Eagle Behavior</span>
                </NavLink>
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/eaglediet"
                >
                    <span className="title">Eagle Diet</span>
                </NavLink>
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/imagegallery"
                >
                    <span className="title">Image Gallery</span>
                </NavLink>
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/nameandclassification"
                >
                    <span className="title">Name and Classification</span>
                </NavLink>
                <NavLink
                    className="option"
                    activeClassName="is-active"
                    to="/matingandreproduction"
                >
                    <span className="title">Mating and Reproduction</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;
