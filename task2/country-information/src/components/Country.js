import { useEffect, useState } from "react";

// Country details
const Country = ({country}) => {

    const name = country.name.common;
    const [capital] = country.capital;
    const region = country.region;
    const flag = country.flag;

    const [weatherDetails, setWeatherDetails] = useState({temperatureC : 0});

    useEffect(() => {
        setWeatherDetails({temperatureC: -10.5})
    }, [])


    return <div>
    <h2>{name}</h2>
    <p>{capital}</p>
    <p>{region}</p>

    <h3>Languages</h3>    
    {Object.entries(country.languages).map(([key, value]) => {return <p key={key}>{value}</p>})}

    <p>{flag}</p>

    <h2>Weather in {name}</h2>
    <p>{weatherDetails.temperatureC}</p>

    </div>
}

export default Country;