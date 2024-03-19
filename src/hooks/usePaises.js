import { CitiesServices } from "../services/citiesServices"
import { useEffect, useState } from "react";

export const UsePaises=()=>{
   
    const [listpaises,setListPaises]=useState([]);

    const getPaises= async ()=>{
        const res=await CitiesServices();
        return res;
    }

    useEffect(()=>{
      getPaises().then((result)=>{
        setListPaises(result);
      }).catch((error)=>{
        setListPaises(error);
      });
    },[])

    return listpaises;
}