import React, { useState } from "react";
import "./ModeButton.css";

const ModeButton = ({ changeThemeMode }) => {
    const [theme, setTheme] = useState("light");
    const [buttonTextColor, setButtonTextColor] = useState("#6C63FF");
    return (
        <div className="mode-button-container">
            <label className="switch">
                <input type="checkbox"
                    onChange={(e) => {
                        setTheme(theme === "dark" ? "light" : "dark");
                        changeThemeMode(theme === "dark" ? "light" : "dark");
                        setButtonTextColor(theme !== "light" ? "#6C63FF" : "white");
                    }} />
                <span className="slider round"></span>
            </label>
            <div style={{ color: buttonTextColor }}>{theme}</div>
        </div >
    );
}

export default ModeButton;