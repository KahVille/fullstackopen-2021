// Country details
const Country = ({country}) => {

    if(!country)
        return <div></div>
    
    const name = country.name.common;
    const [capital] = country.capital;
    const region = country.region;
    const flag = country.flag;


    return <div>
    <h2>{name}</h2>
    <p>{capital}</p>
    <p>{region}</p>

    <h3>Languages</h3>    
    {Object.entries(country.languages).map(([key, value]) => {return <p key={key}>{value}</p>})}

    <p>{flag}</p>

    </div>
}

export default Country;