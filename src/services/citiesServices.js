import axios from "axios";

export const CitiesServices = async () => {
  
  const fetchData = await axios.get("https://restcountries.com/v3.1/all");
  const datos = await fetchData.data;
  const paises = datos.map(({capital,region,subregion}) => {
    return{
       capital:capital,
       region:region,
       subregion:subregion
    }
  });


  return paises;
};
