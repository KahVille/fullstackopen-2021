const initalState = { filter: '' }

const filterReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                filter: action.filter
            }
        default:
            return state;
    }
};

export const setFilterValueAction = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: 'set filter value',
        filter: filter
    }
};

export default filterReducer;
