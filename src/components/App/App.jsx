import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SerachBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import ModeButton from "../ModeButton/ModeButton";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: "Name it!",
        headerExpanded: true,
        suggestedNames: [],
        darkMode: false,
    }

    changeThemeMode = (value) => {
        if (value === "dark") {
            document.getElementsByTagName("html")[0].style.backgroundColor = "#2B2A3F";
            this.setState({
                darkMode: true,
            });
        } else {
            document.getElementsByTagName("html")[0].style.backgroundColor = "white";
            this.setState({
                darkMode: false,
            });
        }
    }

    handleInputChange = (value) => {
        this.setState({
            headerExpanded: !value,
            suggestedNames: !value ? [] : name(value),
        });
    }

    render() {
        return (
            <div className="App" style={this.state.darkMode ? { backgroundColor: "#2B2A3F" } : { backgroundColor: "white" }}>
                <Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                    darkMode={this.state.darkMode}
                />
                <ModeButton changeThemeMode={this.changeThemeMode} />
                <SearchBox handleInputChange={this.handleInputChange}></SearchBox>
                <ResultsContainer suggestedNames={this.state.suggestedNames} darkMode={this.state.darkMode} />
            </div>
        );
    }
}


export default App;