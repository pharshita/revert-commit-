import React, { Component } from 'react'

export default class FirstTest extends Component {
    render() {
        return (
            <div>
                <h2> First test</h2>
                <h2> second test</h2>
                <button>click me</button>
                <marquee>hello everyone</marquee>
                <input placeholder="Username" />
                <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
                <input type="text" id="lastName" value="name"/>
            </div>
        )
    }
}
