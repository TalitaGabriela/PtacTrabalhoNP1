import React from 'react'
import ReactDOM from 'react-dom/client'
//npm i react-router-dom//

import {Routes,Route,BrowserRouter} from "react-router-dom";

import ToWach from './ToWatch/ToWatch.jsx'

//Renderização dos objetos JSX// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ToWach/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)