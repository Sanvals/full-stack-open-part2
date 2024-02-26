import axios from "axios"
import { useState, useEffect } from "react"

const ShowQuery = ({info}) => {
    const {name, capital, area, languages, flags, capitalInfo} = info
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const api_key = import.meta.env.VITE_KEY
        
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${capitalInfo.latlng[0]}&lon=${capitalInfo.latlng[1]}&appid=${api_key}`)
            .then(res => {
                // console.log(res.data)
                setTemp(res.data.main.temp)
                setWind(res.data.wind.speed)
                setWeather(res.data.weather[0].icon)
            })
            .catch(error => console.log(error))
    }, [capitalInfo])

    return (
        <>
        <h2>{name.common}</h2>
        <div>capital {capital}</div>
        <div>area {area} km²</div>
        <h3>languages</h3>
        <ul>
            {Object.entries(languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
        </ul>
        <div><img src={flags.png}></img></div>
        <h3>Weather in {capital}</h3>
        <div>Temperature: {Math.round(temp - 273.15)} Cº</div>
        <div><img src={`https://openweathermap.org/img/wn/${weather}.png`}/></div>
        <div>Wind: {wind} m/s</div>
        </>
    )
}

export default ShowQuery