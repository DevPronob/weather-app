import { Axios } from 'axios';
import React, { useState } from 'react';
import '../components/CSS/Home.css'
const Weather = () => {
    const axios = require('axios').default;
    const [input, setInput] = useState('');
    const [data,setData] =useState({})
    const handleSubmit =async(event) =>{

        event.preventDefault()
        console.log(input)
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
          );
          setData(response.data)
        
    }
    console.log(data )
  
    return (
        <div className='parant-bar'>
           {
            data.name ?
            <div className='search-bar'>
            <div className='first-container'>
            <h3 className='temp'> <span>{`${Math.floor(data?.main?.temp - 273)}°C`}</span>
            {`  |  ${data?.weather[0].description}`}
            </h3>
            <img className='main-img' src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Girl in a jacket" ></img>
            </div>

            <h4 className='text-name'>{`${data?.name}, ${data?.sys?.country}`}</h4>
            <div>
                <h5 className='info-text'>Weather Info</h5>
                <div className='add-info'>
                <div className='item'>
                <img src="https://ayushkul.github.io/react-weather-app/icons/temp.svg" alt="Girl in a jacket" ></img>
                <p>{data.sys.sunrise>data.sys.sunset?"Sunrise":"Sunset"}</p>
                </div>
                <div className='item'>
                <img src="https://ayushkul.github.io/react-weather-app/icons/humidity.svg" alt="Girl in a jacket" ></img>
                <p>{data?.main?.humidity}</p>
                </div>
                <div className='item'>
                <img src="https://ayushkul.github.io/react-weather-app/icons/wind.svg" alt="Girl in a jacket" ></img>
                <p>{data?.wind?.speed}</p>
                </div>
                <div className='item'>
                <img src="https://ayushkul.github.io/react-weather-app/icons/pressure.svg" alt="Girl in a jacket" ></img>
                <p>{data?.main?.pressure}</p>
                </div>
                </div>
            </div>
            
        </div>
             : <div className='search-bar'>
            <h4>React Weather App</h4>
            <img src={"https://ayushkul.github.io/react-weather-app/icons/perfect-day.svg"} alt="Girl in a jacket" width="500" height="600"></img>
            <h4>Find Weather of your city</h4>
            <form onSubmit={handleSubmit} class="sc-bdnxRM jvCTkj"><input onInput={e => setInput(e.target.value)} name='city' placeholder="City"/><button type="submit">Search</button></form>
            
        </div>
           }
        </div>
    );
};

export default Weather;