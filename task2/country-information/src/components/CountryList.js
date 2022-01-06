import Country from "./Country"
import CountryListItem from "./CountryListItem"

const CountriesAfterValidation = ({countries, onShowCountryDetails}) => {
  if(!countries)
    return <p>No Countries found</p>

    if(countries.length <= 0)
    return <p>No Countries found</p>

  if(countries.length > 10)
    return <p>Too many countries found. Please, specify your search filter</p>

  if(countries.length === 1) {
    const [country] = countries;
    return <Country country={country}></Country>
  }

  return countries.map((country) => {
    return <CountryListItem key={country.cca3+country.ccn3} country={country} onShowCountryDetails= {(country) => onShowCountryDetails(country)} />
})
}

// Countries
const CountryList = ({countries, totalNumberOfCountries, onShowCountryDetails}) => {

    return <div>
    <p>Search found total of {countries.length} out of {totalNumberOfCountries} countries</p>
    {
    <CountriesAfterValidation countries={countries} onShowCountryDetails={(country) => onShowCountryDetails(country)} />
    }
  </div>
}

export default CountryList;