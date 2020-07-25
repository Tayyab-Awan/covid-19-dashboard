export default (state, action) => {
    switch(action.type){
        case 'SET_COUNTRIES_STATS':
            return{
                ...state,
                countriesStats: action.payload
            };
        case 'SET_GLOBAL_STATS':
            return{
                ...state,
                globalStats: action.payload,
            };
        case 'SET_SELECTED_COUNTRY_INDEX':
            return{
                ...state,
                selecedCountryIndex: action.payload
            };
        default:
            return state;
    }
}