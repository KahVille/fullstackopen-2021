// Contact Filter
const Filter = (props) => {
    return       <div>
    filter contacts by name: <input
     value={props.filterNameValue}
     onChange={(event) => props.handleContactFilterChange(event)}
    />
  </div>
}

export default Filter;