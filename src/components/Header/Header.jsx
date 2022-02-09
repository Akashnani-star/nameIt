import React from "react";
import "./Header.css";

const Header = (props) => {

    const darkImage = "https://github.com/Akashnani-star/gitpod1/blob/main/imageedit_7_9830005310.png?raw=true";
    const lightImage = "https://github.com/Akashnani-star/gitpod1/raw/main/undraw_Domain_names_re_0uun.png";

    return (
        <div className="head-container">
            <img
                src={props.darkMode ? darkImage : lightImage}
                alt="head-pic"
                className={`head-image ${props.headerExpanded ? "head-image-expanded" : "head-image-contracted"}`}
            />
            <h1 className={`head-text ${props.headerExpanded ? "head-text-expanded" : "head-text-contracted"}`}>{props.headTitle}</h1>
        </div>
    );
}

export default Header;