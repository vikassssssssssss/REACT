// import React from "react";
// function App() {
//   // let ele = React.createElement("div",{className:"App"},React.createElement("h1",null,"Header"))
//   let username = "Vikas";
//   return (
//     // <div className="App">
//     //   <h1>Header</h1>
//     // </div>
//     // <div>one jsx element</div>
//     // <section>
//     //    <h1>Header</h1>
//     // </section>
//     <div>
//       <h1>{username}</h1>
//     </div>
//   );
// }

// export default App;

//! components
//!CBC
// import React from "react"
// class App extends React.Component{
//   render(){
//     return(
//       <h1> Class based components</h1>
//     )
//   }
// }
// export default App;

//! function FBC

// function App(){
//   return(
//     <h1>Function based components</h1>
//   )
// }
// export default App;

//!component composition 
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar from './components/Sidebar'
// import Sidebar1 from './components/Sidebar1'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className='app'>
//         <Navbar/>
//         <Main/>
//         <div className='sidebar'>
//             <Sidebar/>
//             <Sidebar1/>
//         </div>
//         <Footer/>
//     </div>
//   )
// }
// export default App

//!props 
// import React, { Component } from 'react'
// import CBCpropEX from './propsex/CBCpropEX'
// import FBCPropsEX from './propsex/FBCPropsEX'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
        // {/* <CBCpropEX
        // username="vikas"
        // age={20}
        // hobbies={["games","drawing","gym"]}
        // address={{city:"hyderabad",area:"old bowenpally"}}
        // sendFun={function(){alert("hi im vikas")}}
        // /> */}
      //   <FBCPropsEX
      //   username="mohan"
      //   isMarried={true}
      //   hobbies={["dancing","singing","filming"]}
      //   />
      // </div>
//     )
//   }
// }

// function demo(a){
//   return a;

// }
// demo(a)

//! props children 
// import React from 'react'
// import PropChildEx from './propsesx/PropChildEx'
// import SubChild from './propsex/SubChild'

// const App=()=> {
//   return (
//     <div>
//       <PropChildEx num={1000}>
//         <h1>this is data coming from props children</h1>
//         <SubChild/>
//       </PropChildEx>
//         />
//     </div>
//   )
// }
// export default App

//! state component
// import React, { useEffect, useState } from 'react'
// // import CBCStateEx from './stateexample/CBCStateEx'
// import FBCStateEx from './stateexample/FBCStateEx'
// const App=()=>{
//   return (
//     // <CBCStateEx/>
//     <FBCStateEx/>
    
//   )
// }
// export default App;

//! hooks example
import React from 'react'
import UseEffectEx from './hookexamples/UseEffectEx'

const App = () => {
  return (
    <div> <UseEffectEx/>
      
    </div>
  )
}

export default App