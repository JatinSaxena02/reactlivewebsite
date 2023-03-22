// Example --1 //

// import React from 'react';
// import ReactDOM from 'react-dom';
// const fn="Jatin"
// const ln="Saxena"
// ReactDOM.render(<><h1>Jatin Saxena Netflix Pick</h1>
// <p>List Of 5 Best Series</p>
// <p>{`My name is ${fn} ${ln}`}</p>
// {/* In curlybrases we can only use Expression not Statement */}
// <ol>
//   <li>Dark</li>
//   <li>Extra Curricular</li>
//   <li>My Holo love</li>
//   <li>My First-2 love</li>
//   <li>Mr Robot</li>
// </ol></>,
//  document.getElementById('root'))

// Example --2 //

// import React from 'react';
// import ReactDOM from 'react-dom';
// const fn="Jatin"
// const ln="Saxena"
// let time=new Date().toLocaleTimeString()
// let date=new Date().toLocaleDateString()
// ReactDOM.render(
//   <>
//     <h1>{`Hello , My name is ${fn} ${ln}`}</h1>
//     <p>{`Current Date is ${date}`}</p>
//     <p>{`Current Time is ${time}`}</p>
//   </>,document.getElementById('root')
// )

// Example --3 //

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/200/300"
// const img3 = "https://picsum.photos/200/300"
// const nm="Jatin Welcome You in My World"
// ReactDOM.render(
//   <>
//     <h1 className='heading'>{nm}</h1>
//     <div className='img-div'>
//       <img src={img1} alt="random photo" />
//       <img src={img2} alt="random photo" />
//       <img src={img3} alt="random photo" />
//     </div>
//   </>, document.getElementById('root')
// );

// Example --4 //

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css"
// let time = new Date().getHours()
// let greeting = '';
// let cssStyle = {}

// if (time >= 1 && time < 12) {
//   greeting = "Good Morning"
// }
// else if (time >= 12 && time < 18) {
//   greeting = "Good Afternoon";
//   cssStyle.color = 'green';
// }
// else {
//   greeting = "Good Night"
// }


// ReactDOM.render(
//   <>
//     <div>
//       <h1>
//         Hello sir,<span style={cssStyle}> {greeting}</span>
//       </h1>
//     </div>
//   </>, document.getElementById('root')
// )

// Example --5 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App/>  
//   </>,document.getElementById('root')
// )

// Example --6 //
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css"

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// Example --7 //
// import React from "react";
// import ReactDOM from "react-dom";
// import name, {Utube,Sname, Sub} from "./App"
// ReactDOM.render(
//   <>
//     <ol>
//       <li>Jatin</li>
//       <li>{name}</li>
//       <li>{Sub}</li>
//       <li>{Utube()}</li>
//       <li>{Sname()}</li>
//     </ol>
//   </>,document.getElementById('root')
// )

// Example --8 //
// import React from "react";
// import ReactDOM from "react-dom";
// import {add,sub,divide,multiply} from "./App"
// ReactDOM.render(
//   <>
//     <ol>
//       <li>sum of two Number is{add(2,3)}</li>
//       <li>Subtraction of two Number is{sub(4,2)}</li>
//       <li>division of two Number is{divide(7,3)}</li>
//       <li>multiplication of two Number is{multiply(6,3)}</li>
//     </ol>
//   </>,document.getElementById('root')
// )

// Example --9 //
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );

// Example --10 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );


// Example --11 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );

// Example --12 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );


// Example --13 //
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );

// Example --14 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );


// Example --15 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );



// Example --16 //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );

// Example --17 Search Bar //

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(
//   <App/>, document.getElementById('root')
// );

// Example --18 Error Page //

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import "./index.css"

ReactDOM.render(
  <BrowserRouter>


      <App />
    

  </BrowserRouter>, document.getElementById('root')
);
