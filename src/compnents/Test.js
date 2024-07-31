// import axios from 'axios'
// import React, { Component } from 'react'

// export default class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       toggle:false
//     };
//   }
//   componentDidMount() {
//     axios.get('https://dummyjson.com/products')
//       .then((res) => {
//         this.setState({
//           data: res.data.products
//         })
//       })
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (this.state.toggle === nextState.toggle) {
//   //     return false;
//   //   }
//   //   return true;
//   // }
//   // componentWillUnmount() {
//   //   window.removeEventListener('scroll', this.handleScroll);

//   // }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.toggle !== prevState.toggle) {
//       axios.get('https://dummyjson.com/products')
//       .then((res) => {
//         this.setState({
//           data: res.data.products
//         })
//       })
//     }
//   }

//   render() {
//     const [data] = this.state
//     return (
//       <div>
//         <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>toggle</button>
//         <h1>Hello World !</h1>
//         {
//           data.length!==0 && data.map((item, i) => {
//             return(
//               <p>{item.title}</p>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }


import React from 'react'
import axios from 'axios'

const Test = ({ url }) => {
  const [data, setData] = React.useState()

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <button onClick={fetchData} data-testid="fetch-data">Load Data</button>
      {
        data ?
          <div>
            {
              data.length !== 0 && data.map((item, i) => {
                return (
                  <p>{item.title}</p>
                )
              })
            }
          </div> :
          <h1 data-testid="loading">Loading...</h1>
      }
    </>
  )
}

export default Test