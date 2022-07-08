import React from 'react';
import axios from 'axios';
import './FlightListStyle.css'
import FlightEdit from '../FlightEdit/FlightEdit';

export default class FlightList extends React.Component {

  state = {
    flights: [],
    errorMessage: '',
    name:'React',
    showHide: false,
  }

  hideComponent = this.hideComponent.bind(this);

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHide":
        this.setState({ showHide: !this.state.showHide });
        break;

    }
  }

 deleteFlight = (id, e) => {
    e.stopPropagation();

    axios.delete(`http://localhost:8089/flights/${id}`)
    .then(res => {
          axios.get(`http://localhost:8089/flights`)
      .then(res => {
        const flights = res.data;
        this.setState({ flights })})

     console.log.apply('Deleted!!!', res)
  }).catch(err => console.log(err))
     }


  increasePassengers = (id, e) => {
   axios.put(`http://localhost:8089/flights/${id}`, { addPassenger: 1})
   .then(res => {
    axios.get(`http://localhost:8089/flights`)
.then(res => {
  const flights = res.data;
  this.setState({ flights })})


}).catch(err => {
   console.log(err)
   this.setState({errorMessage: err.request.response});
   })
  }   

  decreasePassengers = (id, e) => {
    axios.put(`http://localhost:8089/flights/${id}`, { 
      addPassenger: -1})
    .then(res => {
   
     axios.get(`http://localhost:8089/flights`)
 .then(res => {
   const flights = res.data;
   this.setState({ flights })})
  

 }).catch(err => {
  console.log(err)
  this.setState({errorMessage: err.request.response});
 })
   }

  componentDidMount() {
    axios.get(`http://localhost:8089/flights`)
      .then(res => {
        const flights = res.data;
        this.setState({ flights });
      })
  }
  render() {
    const { showHide } = this.state;
    return (
      <div class='flightlist'> 
      <button class="updateButton" onClick={() => this.hideComponent("showHide")}>Update</button>
       { this.state.errorMessage && alert(JSON.parse(this.state.errorMessage).message)}
       {this.state.errorMessage = null}
        {
          this.state.flights
            .map(flight =>
              <div  key={flight._id}>
                <div><br></br></div>
                
                <table>
                <thead>
                             <tr>
                                 <th class="airlineName1">Airline Name</th>
                                 <th>Flight Number</th>
                                 <th>Departure Airport</th>
                                 <th>Arrival Airport</th>
                                 <th>Departure Date</th>
                                 <th>Arrival Date</th>
                                 <th>Departure Time</th>
                                 <th>Arrival Time</th> 
                                 <th>Passenger Limit</th>
                                 <th>Current Passanger Count</th>
                                 <th>Actions</th>                        
                              </tr>
                </thead>
                  <tbody>
                  <tr>
                      <td>{flight.airlineName}</td>
                      <td>{flight.flightNumber}</td>
                      <td>{flight.departureAirport}</td>
                      <td>{flight.arrivalAirport}</td>
                      <td>{flight.departureDate}</td>
                      <td>{flight.arrivalDate}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.passengerLimit}</td>
                      <td>{flight.currentPassangerCount}</td>
                      <td><button class='delete' onClick={(e) => this.deleteFlight(flight._id, e)}>Delete</button>  
                      <div class='plusminus'><button class='plus' onClick={(e) => this.increasePassengers(flight._id, e)}>+</button>
                      <button class='minus' onClick={(e) => this.decreasePassengers(flight._id, e) }>-</button>
                      </div> 
                   </td> 
                 </tr>
                </tbody>
                </table>
                {showHide && <FlightEdit 
                flightID={flight._id} 
                airlineN={flight.airlineName}   
                flightN={flight.flightNumber}
                departureA={flight.departureAirport}
                arrivalA={flight.arrivalAirport}
                departureD={flight.departureDate}
                arrivalD={flight.arrivalDate}
                departureT={flight.departureTime}
                arrivalT={flight.arrivalTime}
                passengerC={flight.currentPassangerCount}
                passengerL={flight.passengerLimit}
                flights={flight}
                /> }  
              </div>
            )
        } 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
      </div>
   
    )
  }
  }