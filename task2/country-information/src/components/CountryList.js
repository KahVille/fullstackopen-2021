// Countries
const CountryList = ({countries, totalNumberOfCountries}) => {
    
    return <div>
    <p>Search found total of {countries.length} out of {totalNumberOfCountries} countries</p>
    { 
     countries && countries.length -1 < 10 ?
     countries.map((country) => {
        return <p key={country.cca3+country.ccn3}>{country.name.common}</p>
    })
    : <p>Too many countries, please specify more filter options</p>
    }
  </div>
}

export default CountryList;