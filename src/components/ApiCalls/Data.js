export const fetchGlobalStats = async (url) => {
    try{
        const response = await fetch(url);
        const result = await response.json();
        let globalData = result.data[0];   // returns timeline---we need latest data which is at index 0
        return globalData;
    }
    catch(error){
        return error;
    }
  }

export const fetchCountriesData = async (url) => {
    try{
        const response = await fetch(url);
        const result = await response.json();
        const countriesData = result.data;
        return countriesData;
    }
    catch(error){
        return error;
    }
}
