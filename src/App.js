import React, { Component } from 'react';
import './App.css';
import ShowResultComponent from './components/Results';
import KeysComponent from "./components/Keypads";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: ""
        }
    }

    onClick = (button) => {
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else {
          this.setState({
              result: this.state.result + button
          })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--','+')
        } else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <ShowResultComponent result={this.state.result}/>
                    <KeysComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;