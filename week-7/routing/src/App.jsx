import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
// import Dashboard from "./components/Dashboard"
// import Landing from "./components/Landing"

import { lazy } from 'react'
const Dashboard = React.lazy(() => import(  "./components/Dashboard"))
const Landing = React.lazy(() => import("./components/Landing"))

function App() {
  
  return (
    <div>

      {/* this is not the correct way for client side routing as it brings back all the data from backend, similar to refresh or landing on different page */}
      {/* <button onClick = {() => {
        window.location.href = "/"
      }}>Landing page</button>
      <button onClick = {() => {
        window.location.href = "/dashboard"
      }}>Dashboard page</button> */}

      <BrowserRouter>
      <Appbar/>
        <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard /></Suspense>} />
            <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  //it keeps the same client bundle and doesn not hard refresh the page and changes the page
  const navigate = useNavigate();
  // useNavigate expects to be inside BrowserRouter 
  return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
  </div>
}

export default App






// import { useState } from "react"

// function App() {
  
//   return (
//     <div>
//       good
//       <Count />
    
//     </div>
//   )
// }

// function Count() {
//   return <div>
//     <Buttons />
//   </div>
// }

// function Buttons() {
//   const [count, setCount] = useState(0);

//   return <div>
//     {count}<br></br>

//     <button onClick={() => {
//       setCount(count+1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count+1)
//     }}>Decrease</button>
//   </div>
// }

// export default App







// import { useContext, useState } from "react"
// import { CountContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0);
//   // wrap anyone who needs the contexted vale inside a provider
//   return (
//     <div >
//       yeti
//       <CountContext.Provider value = {count}>
//       <Count count={count} setCount={setCount} />
       
//       </CountContext.Provider>
      
//     </div>
//   )
// }

// function Count({setCount}) {
//   return <div>
//     <CountRenderer />
//     <Buttons setCount={setCount} />
//   </div>
// }

// function CountRenderer() {
//   const count = useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({setCount}) {
//   const count = useContext(CountContext);

//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }

// export default App