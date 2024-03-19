import { useEffect, useState } from "react";
import { getUsersServices } from "../services/usuauriosService";

export const UseGetUSers =  () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const getUsers = async () => {
    const res = await getUsersServices();
    return res;
  };

  useEffect(() => {
    getUsers()
      .then((result) => {
        setListaUsuarios(result);
      })
      .catch((error) => {
        setListaUsuarios(error);
      });
  }, []);

  return listaUsuarios;
};
