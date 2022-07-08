import React from 'react';
import axios from 'axios';
import './FlightAddStyle.css'
import { useState } from 'react';

const url = `http://localhost:8089/flights`

const FlightAdd = () => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [passengerLimit, setPassengerLimit] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const handleSubmit = async (e) => {
    try {
      await axios.post(url, {departureAirport, arrivalAirport, departureDate, arrivalDate, departureTime, arrivalTime, passengerLimit, airlineName });

    } catch (error) {
        console.log(error.resp)
    }  
  }
  return (
    
    <section>
      <br/>
    <form class="addFlight" onSubmit={handleSubmit}>
    <div>Create a new flight:</div>
    <select required placeholder='Airline Name' type='text' value={airlineName}
     onChange={(e) => setAirlineName(e.target.value)}>
       <option value="" disabled selected hidden>Airline</option>
       <option value="Skillstorm Air">Skillstorm Air</option>
       <option value="Southwest">Southwest</option>
       <option value="Delta">Delta</option>
       <option value="United">United</option>
       <option value="American Airlines">American Airlines</option>
     </select>

     <select required  placeholder='Airline Name' type='text' value={departureAirport}
     onChange={(e) => setDepartureAirport(e.target.value)}>
      <option value="" disabled selected hidden>Departure Airport</option>
       <option value="LAX">LAX</option>
       <option value="JFX">JFX</option>
       <option value="DEN">DEN</option>
       <option value="DTW">DTW</option>
       <option value="SLC">SLC</option>
       <option value="MCO">MCO</option>
     </select>

     <select required  placeholder='Airline Name' type='text' value={arrivalAirport}
     onChange={(e) => setArrivalAirport(e.target.value)}>
     <option value="" disabled selected hidden>Arrival Airport</option>
      <option value="LAX">LAX</option>
       <option value="JFX">JFX</option>
       <option value="DEN">DEN</option>
       <option value="DTW">DTW</option>
       <option value="SLC">SLC</option>
       <option value="MCO">MCO</option>
     </select>
  

<input required  placeholder='Departure Date' type='date' value={departureDate}
     onChange={(e) => setDepartureDate(e.target.value)}/>

<input required  placeholder='Arrival Date' type='date' value={arrivalDate}
     onChange={(e) => setArrivalDate(e.target.value)}/>

<input required  placeholder='Departure Time' type='time' value={departureTime}
     onChange={(e) => setDepartureTime(e.target.value)}/>

<input required  placeholder='Arrival Time' type='time' value={arrivalTime}
     onChange={(e) => setArrivalTime(e.target.value)}/>

<input required  placeholder='Passenger Limit' type='text' value={passengerLimit}
     onChange={(e) => setPassengerLimit(e.target.value)}/>

<button class="newFlightButton" type='submit'>Create</button>

    </form>
 </section>
  )
}

export default FlightAdd;
