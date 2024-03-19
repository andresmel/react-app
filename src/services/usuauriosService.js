import axios from "axios"

export const getUsersServices=async()=>{
       const fetchData=await axios.get("https://localhost:7288/api/getUsers");
       const list = await fetchData.data;
       return  list;
}

export const UserService=async(data)=>{

       const userDto={
              IdUser:0,
              Nombre:data.nombre,
              Apellido:data.apellido,
              IdCiudad:parseInt(data.idCiudad),
              IdCiudadNavigation:{}
       }
     
       const fetchdata=await axios.post("https://localhost:7288/api/insertUser",userDto);
       return fetchdata;

}

export const eliminarUsuario=async(id)=>{
       const userDto={
              IdUser:id.IdUser,
              Nombre:id.Nombre,
              Apellido:id.Apellido,
              IdCiudad:parseInt(id.IdCiudad),
              IdCiudadNavigation:{}
       }
       const fetchData=axios.post("https://localhost:7288/api/deleteUser",userDto);
       const res=(await fetchData).data;
       return res;
}

export const actualizarUsuario=async(id)=>{
       const userDto={
              IdUser:id.IdUser,
              Nombre:id.Nombre,
              Apellido:id.Apellido,
              IdCiudad:parseInt(id.IdCiudad),
              IdCiudadNavigation:{}
       }
       const fetchData=axios.post("https://localhost:7288/api/updateUser",userDto);
       const res=(await fetchData).data;
       return res;
}


export const GetUserById=async(IdUser)=>{
       const fetchData=axios.post("https://localhost:7288/api/getUserById?IdUSer="+IdUser);
       const res=(await fetchData).data;
       return res;
}
