import React from 'react';
import axios from 'axios';
import './FlightEditStyle.css'

import { useState, useEffect } from 'react';
            
const FlightEdit = ({ 
              flightID, 
              airlineN, 
              flightN, 
              departureA, 
              arrivalA, 
              departureD, 
              arrivalD, 
              departureT,
              arrivalT, 
              passengerL,}) => {

  const [departureAirport, setDepartureAirport] = useState(departureA);
  const [arrivalAirport, setArrivalAirport] = useState(arrivalA);
  const [departureDate, setDepartureDate] = useState(departureD);
  const [arrivalDate, setArrivalDate] = useState(arrivalD);
  const [departureTime, setDepartureTime] = useState(departureT);
  const [arrivalTime, setArrivalTime] = useState(arrivalT);
  const [passengerLimit, setPassengerLimit] = useState(passengerL);
  const [airlineName, setAirlineName] = useState(airlineN);
  const [flightNumber, setFlightNum] = useState(flightN); 


useEffect(() => {
  function f1() {
  return new Promise(resolve => {
    console.log("111")
    setTimeout(() =>{
      console.log("222")
      resolve('resolved')
    }, 2000);
  })}})
  

  const HandleSubmit = async (e) => {
  
    try {
      axios.put(`http://localhost:8089/flights/${flightID}`, {departureAirport, arrivalAirport, departureDate, arrivalDate, departureTime, arrivalTime, passengerLimit, airlineName, flightNumber });
     
    } catch (error) {
        console.log(error.resp)
    }   
  }


  return (

    <section>
      <br/>
      
    <form class="editForm" onSubmit={HandleSubmit} >
    <select class="airlineName" required placeholder='Airline Name' type='text' value={airlineName}
     onChange={(e) => setAirlineName(e.target.value)}>
       <option value="" disabled selected hidden>Airline</option>
       <option value="Skillstorm Air">Skillstorm Air</option>
       <option value="Southwest">Southwest</option>
       <option value="Delta">Delta</option>
       <option value="United">United</option>
       <option value="American Airlines">American Airlines</option>
     </select>

     <input required  class="flightNumber" type='text' value={flightNumber}
     onChange={(e) => setFlightNum(e.target.value)}/>  

     <select required  class="departureAirport" type='text' value={departureAirport}
     onChange={(e) => setDepartureAirport(e.target.value)}>
      <option value="" disabled selected hidden>Departure Airport</option>
       <option value="LAX">LAX</option>
       <option value="JFX">JFX</option>
       <option value="DEN">DEN</option>
       <option value="DTW">DTW</option>
       <option value="SLC">SLC</option>
       <option value="MCO">MCO</option>
     </select>

     <select required  class='arrivalAirport' type='text' value={arrivalAirport}
     onChange={(e) => setArrivalAirport(e.target.value)}>
     <option value="" disabled selected hidden>Arrival Airport</option>
      <option value="LAX">LAX</option>
       <option value="JFX">JFX</option>
       <option value="DEN">DEN</option>
       <option value="DTW">DTW</option>
       <option value="SLC">SLC</option>
       <option value="MCO">MCO</option>
     </select>
  
<input required  class='departureDate' type='date' value={departureDate}
     onChange={(e) => setDepartureDate(e.target.value)}/>

<input required  class='arrivalDate' type='date' value={arrivalDate}
     onChange={(e) => setArrivalDate(e.target.value)}/>

<input required  class='departureTime' type='time' value={departureTime}
     onChange={(e) => setDepartureTime(e.target.value)}/>

<input required  class='arrivalTime' type='time' value={arrivalTime}
     onChange={(e) => setArrivalTime(e.target.value)}/>

<input required  class='passengerLimit' type='text' value={passengerLimit}
     onChange={(e) => setPassengerLimit(e.target.value)}/>

<button class='editSingleFlightButton' type='submit' >Update</button>

    </form>
   
 </section>


 
  )

  
}

export default FlightEdit;
