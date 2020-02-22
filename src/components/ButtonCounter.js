import React from 'react';

export default class ButtonCounter extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0
        }
    }

    // handleClick = () => {
    //     let newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // }

    // React's built-in solution using previousState
    handleClick = () => {
        this.setState(previousState => {
            return{
                count: previousState.count + 1
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click counter</button>
            </div>
        )
    }
}