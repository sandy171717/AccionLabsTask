import React from 'react'

function Weather(props) {
    return (
     <div className="container">
       <div className="cards">
       <h1>{props.city},{props.country}</h1>
       <h5 className="py-4">
       <i className="wi wi-day-sunny"></i>
    
       </h5>
       <h1 className="py-2">{props.celsius}&deg;</h1>
             {minmaxTemp(props.temp_max,props.temp_min)}

       <h4 className="py-3">{props.description}</h4>

       </div>

     
     </div> 

    )
}

function minmaxTemp(min,max)
{
return(
    <h3>    <span>{min}&deg;</span>
             <span>{max}&deg;</span>
    
    </h3>

)

}

export default Weather
