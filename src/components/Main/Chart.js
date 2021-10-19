import React, {useEffect, useState} from 'react'
import { Line } from "react-chartjs-2";


const Chart = ({lat, lon}) => {
    const [weather, setWeather] = useState([])
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=currently,minutely,hourly,alerts&appid=73dee316d83fc8e4312e68d912a37b42`)
        .then((res) => res.json())
            .then((data) => {
                setWeather(data.daily)
            })
    }, [lat, lon])
    const label = weather.map(day => day.dt.toString())
    
    const data = {
        labels: label,
        datasets: [
          {
            label: "Max",
            data: weather.map(({temp}) => temp.max - 273 ),
            fill: false,
            borderColor: "rgba(75,192,192,1)"
          },
        //   {
        //     label: "Day",
        //     data: weather.map(({temp}) => temp.day - 273),
        //     fill: false,
        //     borderColor: "orange"
        //   },
        //   {
        //     label: "Night",
        //     data: weather.map(({temp}) => temp.night - 273),
        //     fill: false,
        //     borderColor: "silver"
        //   },
          {
            label: "Min",
            data: weather.map(({temp}) => temp.min - 273),
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
      
      
    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default Chart
