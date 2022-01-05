import Country from "./Country"

// Countries
const CountryList = ({countries, totalNumberOfCountries}) => {

  const CountriesAfterValidation = (countries) => {

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
      return <p key={country.cca3+country.ccn3}>{country.name.common}</p>
  })
  }

  
    return <div>
    <p>Search found total of {countries.length} out of {totalNumberOfCountries} countries</p>
    {
      CountriesAfterValidation(countries)
    }
  </div>
}

export default CountryList;