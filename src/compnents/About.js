import React, { Component } from 'react'

export default class About extends Component {

    constructor() {
        super()
        this.state = {
            stateOne: "name",
            stateTwo: 1234
        }
    }
    render() {
        return (
            <div className='aboutStyle'>
                <h1>Hello about us</h1>
                <p>Hello Pera</p>
                <p>Hello</p>

                <ul className='uls'>
                    <li key='1' className='lis'>react</li>
                    <li className='lis'>2</li>
                    <li className='lis'>3</li>
                </ul>
                <button disabled>Click me </button>
            </div>
        )
    }
}
