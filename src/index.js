import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from "./routes/root"
import reportWebVitals from './reportWebVitals';
import MenuPlanner from "./routes/menuPlanner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom';
import Schedule from './routes/schedule';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/menuplanner",
    element: <MenuPlanner />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  }
])

createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
