import { useState } from "react"
import Swal from "sweetalert2";
import { UserService } from "../services/usuauriosService";

export const Formulario=()=>{
 
  const [datosUser,setDataUser]=useState(
   {
      nombre:'',
      apellido:'',
      idCiudad:'',
      telefono:''
   }
  );

  const onSubmitRes=(event)=>{
   event.preventDefault()
  }

  const setValores =(event)=>{
      const {target}=event;
      const {name,value}=target
      setDataUser({
         ...datosUser,
         [name]:value
      })
   }

   const enviar=async()=>{
      
      if(datosUser.idCiudad==0 || datosUser.apellido=='' || datosUser.nombre=='' || datosUser.telefono==''){
         Swal.fire("Todos los datos son obligatorios");
         return 0;
      }
      const res=await UserService(datosUser);
      const {status}=res;
      if(status==200){
         Swal.fire("El usuario se Guardo Con exito"); 
         setDataUser({nombre:'',apellido:'',idCiudad:0,telefono:''});
      }else{
         Swal.fire("Ocurrio un error al guardar el  usuario");
         setDataUser({nombre:'',apellido:'',idCiudad:0,telefono:''});
      }

   }


  return(
     <>
        <div className="formulario">
         <form onSubmit={onSubmitRes}>
         <input placeholder="Nombres" value={datosUser.nombre} type="text" name="nombre" id="nombre" className="form-control mt-4"  onChange={setValores}/>
         <input placeholder="Apellidos" type="text" value={datosUser.apellido} name="apellido" id="apellido" className="form-control mt-4"  onChange={setValores}/>
         <select defaultValue={"Seleccione Ciudad"}  name="idCiudad" className="form-select mt-4 " onChange={setValores} >
            <option value="Seleccione Ciudad" disabled>Seleccione Ciudad</option>
            <option value={1}>Bogota</option>
            <option value={2}>Medellin</option>
            <option value={3}>Cali</option>
            <option value={4}>Huila</option>
         </select>
         <input placeholder="Telefono" type="text" value={datosUser.telefono} name="telefono" id="telefono" className="form-control mt-4" onChange={setValores}/>
         <button onClick={enviar} className="btn btn-primary mt-4">Enviar</button>
         </form>
        </div>
     </>

  )

}