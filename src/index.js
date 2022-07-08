import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import NavBar from './components/NavBar/NavBar'
import FlightAdd from './components/FlightAdd/FlightAdd'
import FlightList from './components/FlightList/FlightList'
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavBar />
    <FlightAdd/>
    <FlightList/>
    </>
);

reportWebVitals();
