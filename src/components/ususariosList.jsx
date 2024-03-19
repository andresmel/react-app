import { useNavigate } from "react-router-dom";
import { UseGetUSers } from "../hooks/useUser";
import { eliminarUsuario } from "../services/usuauriosService";
import { BsFillPenFill } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";

export const ListUsers=()=>{

let navigate = useNavigate();

const listaUsuarios=UseGetUSers();

  const eliminar=async(user)=>{
    eliminarUsuario(user);
    location.reload();
  }

  const actualizar=async(user)=>{
    navigate("/Actualizar/"+user.IdUser);
  }


  return(
    <>
   <div className="position-relative center-div  mt-5">
     <table className="table table-striped table-dark">
     <thead>
     <tr>
        <th>Id</th>
        <th>Nombres</th>
        <th>Apelidos</th>
        <th>Ciudad</th>
        <th></th>
        <th></th>
     </tr>
     </thead>
     <tbody>
      {
        listaUsuarios.map((item)=>(
            <tr key={item.IdUser}>
                <td>{item.IdUser}</td>
                <td>{item.Nombre}</td>
                <td>{item.Apellido}</td>
                <td>{item.IdCiudad}</td>
                <td><button onClick={()=>eliminar(item)} className="btn  btn-danger"><BsTrash3Fill/></button></td>
                <td><button onClick={()=>actualizar(item)} className="btn  btn-secondary"><BsFillPenFill /></button></td>
            </tr>
        ))
      }
     </tbody>
     </table>
     </div>
    </>
  )



}