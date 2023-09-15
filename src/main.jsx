import React from 'react'
import ReactDOM from 'react-dom/client'
//npm i react-router-dom//

import {Routes,Route,BrowserRouter} from "react-router-dom";

import Home from './Home/Home.jsx'
import ToWach from './ToWatch/ToWatch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/ToWatch' element={<ToWach/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)