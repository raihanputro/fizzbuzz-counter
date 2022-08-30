import React from "react";
import { createRoot } from "react-dom/client";
import { CounterDisplay, IncreaseButton, DecreaseButton, ResetButton } from "./counterDisplay";


class CounterApp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count+1
            }
        })
    }

    onDecreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count-1
            }
        })
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })    
    }

    render() {
        return(
            <div>
                <CounterDisplay count={this.state.count} />
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <DecreaseButton decrease={this.onDecreaseEventHandler} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>  
        )
    }
}

const root = createRoot(document.getElementById('root'));

root.render(<CounterApp />);