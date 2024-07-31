import React, { Component } from 'react'

export default class ClickEvent extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            data:[]
        }
    }
    callApi(){
        console.log("click event function")
    }
    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.setState({ value: this.state.value + 2 })}>Inc</button>
                    <p>{this.state.value}</p>
                    <button onClick={() => this.setState({ value: this.state.value - 1 })}>Dec</button>
                </div>
                <div className='resetStyle'>
                    <button onClick={()=>this.setState({value:0})}>reset</button>
                </div>
                    <button onClick={this.callApi}>reset</button>
            </>
        )
    }
}
