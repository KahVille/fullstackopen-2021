// Countries
const CountryList = ({countries}) => {
    
    return <div>
    { 
    countries.map((country) => {
        return <p key={country.cca3+country.ccn3}>{country.name.common}</p>
    })
    }
  </div>
}

export default CountryList;