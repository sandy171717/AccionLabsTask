import React, { Component } from 'react'
import './App.css'
import'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './components/Weather'
import Form from './components/Form'

const API_key='882f38589f8b53f1bb0d35fa6c5b214b'

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       city:undefined,
       country:undefined,
       icon:undefined,
       main:undefined,
       celsius:undefined,
       temp_max:undefined,
       temp_min:undefined,
       description:"",
       error:false
     }
     this.getWeather();
     }
     calCelius(temp)
     {
         let cell=Math.floor(temp-273.15)
         return cell;
     }
   getWeather=async(e)=>{
     //e.preventDefault();
    // const city'e.target.elements.city.value';
     //const country='e.target.elements.country.value';
     const apiCall=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
     const res=await apiCall.json();
     console.log(res);
     this.setState({
           city:res.name,
           country:res.sys.country,
           celsius:this.calCelius(res.main.temp),
           temp_max:this.calCelius(res.main.temp_max),
           temp_min:this.calCelius(res.main.temp_min),
           description:res.weather[0].description

     })



                     }
 

  render() {
    return (
      <div>
      <Form load={this.state.getWeather}/>
    
      <Weather city={this.state.city} 
      country={this.state.country}
      celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      />
        
      </div>
    )
  }
}
export default App;