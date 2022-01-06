//Country list item
const CountryListItem = (props) => {
    return <div>
        <p>{props.country.name.common}</p>
        <button onClick={() => props.onShowCountryDetails(props.country)}>Show</button>
    </div> 
}

export default CountryListItem;