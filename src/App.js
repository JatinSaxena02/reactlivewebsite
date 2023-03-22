// Example --5 //

// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";



// function App() {
//   return <>
//     <Heading/>
//     <Para/>
//     <List/>
//   </>
// }
// export default App;

// Example --6

// import React from "react";
// import Greeting from "./Greeting";

// function App() {
// return <Greeting/>
// }
// export default App;

// Example --7 //

// const name="shivam";
// const Sub="React.js";

// function Utube(){
//   let name="Thapa";
//   return name;
// }
// function Sname(){
//   let sname="Technical";
//   return sname;
// }
// export default name;
// export {Sub,Utube,Sname};

// Example --8 Calculator //

// import React from "react";

// function add(a,b){
//   return a+b;
// }

// function sub(a,b){
//   return a-b;
// }

// function divide(a,b){
//   let div=a/b;
//   div=div.toFixed(2)
//   return div;
// }

// function multiply(a,b){
//   return a*b;
// }

// export {add,sub,divide,multiply}


// Example --9 Netflix App //

// import React from "react";
// import Card from "./Cards";
// import Sdata from "./Sdata";

// --------We can do this also if we want only amazon series or netflix series------//
// const FavSeries = "Amazon"

// const FavS = () => {
//     if (FavSeries === "Netflix") {
//         return <Netflix/>

//     } else {
//         return <Amazon/>
//     }
// }
// ---------------------------------------------------------------------------------//

// const App = () => (
//     <>
//         <h1 className="heading_style">List of top 5 Netflix Series.</h1>
//         {Sdata.map((val) => {
//             return (
//                 <Card
//                     key={val.id}
//                     imgsrc={val.imgsrc}
//                     title={val.title}
//                     sname={val.sname}
//                     link={val.link}
//                 />
//             );
//         })}
//     </>
// );

// export default App;

// // Examlple --10 Slot machine //

// import React from "react";
// import SlotM from "./Slotmachine";

// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style">Welcome to <span>Slot machine</span></h1>
//             <div className="slotmachine">
//                 <SlotM x=':' y=':' z=':' />
//                 <SlotM x=':' y=',' z=':'/>
//                 <SlotM x=':' y=':' z=':'/>
//             </div>
//         </>
//     );
// };

// export default App;

// Example -- 11 Number Increment //

// import React, { useState } from 'react';


// const App = () => {
//     const state=useState()

//     const [count,setCount]=useState(0);

//     const IncNum=()=>{
//         setCount(count+1)
//     };
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     )
// }


// export default App


// Example -- 12 Normal Clock //

// import React, { useState } from 'react';


// const App = () => {

//     let time = new Date().toLocaleTimeString();

//     let [ctime, settime] = useState(time)

//     function updtime() {
//         time = new Date().toLocaleTimeString();
//         settime(time)
//     }



//     let date = new Date().toLocaleDateString();

//     let [cdate, setdate] = useState(date)

//     function upddate() {
//         date = new Date().toLocaleDateString();
//         console.log(date)
//         setdate(date)
//     }

//     return (
//         <>
//             <div>
//                 <h1>{ctime}</h1>
//                 <h1>{cdate}</h1>
//                 <button onClick={updtime}>Get Time</button>
//                 <button onClick={upddate}>Get Date</button>
//             </div>
//         </>
//     )

// };

// export default App


// Example --13 Digital Clock //

// import React, { useState } from "react";

// const App = () => {
//     let time = new Date().toLocaleTimeString()
//     let [ctime, settime] = useState(time)

//     let updtime = () => {
//         time = new Date().toLocaleTimeString()
//         settime(time)
//     }

//     setInterval(updtime, 1000)



//     return (
//         <><div>
//         <h1>Digital Clock</h1>
//             <h1>{ctime}</h1>
//         </div>
//         </>
//     )
// }
// export default App


// Example --14 Color Changing site//

// import React, { useState } from "react";

// const App = () => {

//     const yellow = '	#ffff00';
//     // const name = "Color Changed"
//     const [bg, setbg] = useState(yellow);
//     const [name, setname] = useState('Click Me')

//     const bgchange = () => {
//         const newbg = '#000000'
//         setbg(newbg)
//         setname('Ouuch..')
//     }

//     const bgchange1 = () => {
//         setbg(yellow)
//         setname('Ok..')
//     }

//     // const namechange = () => {
//     //     const newbg = '#fff'
//     //     setbg(newbg)
//     // }
//     return (
//         <>
//             <div style={{ backgroundColor: bg }}>
//                 <button onClick={bgchange} onDoubleClick={bgchange1}>{name}</button>
//             </div>
//         </>
//     )
// }


// export default App



// Example --15 Form //

// import React, { useState } from "react";

// const App = () => {

//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//     });

//     const inputEvent = (event) => {

//         console.log(event.target.value)
//         console.log(event.target.value)
//         const { name, value } = event.target;


//         setFullName((preValue) => {
//             console.log(preValue);

//             return{
//                 ...preValue,
//                 [name]:value,
//             };

//         })
//     }




//     const onSubmit = (event) => {
//         event.preventDefault();
//     }




//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>hello {fullName.fname}{fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.phone}</p>
//                         <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname} />
//                         <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname} />
//                         <input type="email" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email} />
//                         <input type="number" placeholder="Enter Your Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} />

//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )

// }

// export default App



// Example --16  TO DO LIST //

// import React, { useState } from "react";

// const App = () => {

//     const [inputlist, setinputlist] = useState("")
//     const [enteredlist, setenteredlist] = useState([])



//     const itemevent = (event) => {
//         setinputlist(event.target.value)

//     }


//     const submit = () => {
//         setenteredlist((olditem) => {
//             return [...olditem, inputlist]
//         })
//         setinputlist('');
//     }

//     const deleteItem = () => {
//         // console.log("gg")
//     }

//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1>To Do List</h1>
//                     <input type="text" placeholder="Add Items" onChange={itemevent} value={inputlist} />
//                     <button onClick={submit}>+</button>
//                     <ol>{enteredlist.map((itemval,index) => {
//                         return (
//                             <div>

//                             <i className="fa fa-times" aria-hidden="true"/>
//                             <li><button onClick={deleteItem}>-</button>{itemval}</li>
//                             </div>
//                             )
//                     })}</ol>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default App


// Example --17  Google Keep Clone //

// import React, { useState } from "react"
// import Footer from "./Footer"
// import Header from "./Header"
// import CreateNote from "./CreateNote"
// import Note from "./Note"

// const App = () => {

//     const [addItems, setAddItems] = useState([]);
//     const addNote = (note) => {
//         setAddItems((prevData) => {
//             return [...prevData, note];
//         })
//     }

//     return <>
//         <Header />
//         <CreateNote passNote={addNote} />
//         {addItems.map((val, index) => {
//             return (<Note
//                 key={index}
//                 id={index}
//                 title={val.title}
//                 content={val.content}
//             />)
//         })}
//         <Footer />
//     </>

// }

// export default App


// Example -- 17  Search Bar //

// import React from 'react'
// import Search from './Search'

// const App=()=>{
//     return <>
//         <Search/>
//     </>
// }
// export default App

// Example -- 18  Error Page //

import React from 'react'
import Error from './Error'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import { Routes, Route } from "react-router-dom"
import Menu from './Menu'
import "./index.css"
import SproductDetail from './Components/SproductDetail';
const App = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/product' element={<SproductDetail />} />
                {/* <Route exact element={<Error />} /> */}
                <Route path="*" element={<Error />} />
            </Routes>

        </>
    )
}
export default App