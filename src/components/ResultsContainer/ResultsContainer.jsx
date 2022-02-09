import React from "react";
import "./ResultsContainer.css";
import NameCard from "../NameCard/NameCard";

const ResultsContainer = ({ suggestedNames, darkMode }) => {

    const suggestedNamesJSX = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}> </NameCard>
    })

    return (
        <div className="results-container" style={{ backgroundColor: (darkMode ? "#2B2A3F" : "white") }}>
            {suggestedNamesJSX}
        </div>
    );
}
export default ResultsContainer;