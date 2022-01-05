import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

// Country Information app
const App = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesHandler = countries => {
      console.log(countries);
      setCountries(countries)
    }

    const countriesAPIUrl = 'https://restcountries.com/v3.1/all'

    const countriesInit = {
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      },
    };

    const promise = fetch(countriesAPIUrl, countriesInit).then(response => response.json());
    promise.then(data => getCountriesHandler(data));
  }, [])


  const [filterCountryValue, setFilterCountryValue] = useState('');

  const  onFilterValueChange = (event) => {
    setFilterCountryValue(event.target.value)
  }

  const filteredCountries = (countries) => {

    const countriesToFilter = [...countries];

    const countriesMatched = countriesToFilter.filter((country) => country.name.common.toLowerCase().includes(filterCountryValue.toLowerCase()));

    if(!countriesMatched && countriesMatched.length <= 0)
      return countriesToFilter;

    return countriesMatched;
  }

  return (
    <div className="App">
      <h1>Countries Information</h1>

      <div>
        <label>Find countries: 
          <input placeholder="search for countries" 
          value={filterCountryValue}
          onChange={(event) => onFilterValueChange(event)} /></label>
      </div>

      <CountryList countries={filteredCountries(countries)} totalNumberOfCountries={countries.length} />
    </div>
  );
}

export default App;
