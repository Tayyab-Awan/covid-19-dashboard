import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    globalStats: {

    },
    countriesStats: [

    ],
    selecedCountryIndex: 300, // at 300 World Wide is selected in country list dropdown
};

export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const setCountriesStats = (data) => {
        dispatch({
            type: 'SET_COUNTRIES_STATS',
            payload: data
        });
    }
    const setGlobalStats = (data) => {
        dispatch({
            type: 'SET_GLOBAL_STATS',
            payload: data,
        });
        
    }
    const setSelecedCountryIndex = (index) => {
        dispatch({
            type: 'SET_SELECTED_COUNTRY_INDEX',
            payload: index
        });
    }


    return(
        <GlobalContext.Provider value={{
            globalStats: state.globalStats,
            countriesStats: state.countriesStats,
            selecedCountryIndex: state.selecedCountryIndex,
            setCountriesStats, setGlobalStats, setSelecedCountryIndex
        }}>
            {children}
        </GlobalContext.Provider>
    );

}