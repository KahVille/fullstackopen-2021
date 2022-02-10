import { useDispatch, useSelector } from "react-redux"
import { setFilterValueAction } from "../reducers/filterReducer"

const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filter);

    const handleChange = (target) => dispatch(setFilterValueAction(target.value));

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            <label>Filter <input name="filter" onChange = {({target}) => handleChange(target)} value={filter} /></label>
        </div>
    )
}

export default Filter;
