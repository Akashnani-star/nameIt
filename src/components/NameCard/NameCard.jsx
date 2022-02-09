import React from "react";
import "./NameCard.css";

const NameCard = ({ suggestedName }) => {
    const nameCheapUrl = `https://www.namecheap.com/domains/registration/results/?domain=${suggestedName}`
    return (
        <a href={nameCheapUrl} className="name-link" target="_blank">
            <span className="result-name-card">
                <p className="result-name">
                    {suggestedName}
                </p>
            </span>
        </a>
    );
}

export default NameCard;