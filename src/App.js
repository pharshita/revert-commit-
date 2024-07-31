// import logo from './logo.svg';
// import './App.css';
// import Test from './compnents/Test';

// function App() {

//   return (
//     <div className="App">
//         <Test/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Test from './compnents/Test';
import './App.css';
import FirstTest from './compnents/FirstTest';
import About from './compnents/About';
import ClickEvent from './compnents/ClickEvent';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        {/* <Test /> */}
        {/* <About/> */}
        <ClickEvent/>
      </div>
    )
  }
}
