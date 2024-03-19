import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetUserById, actualizarUsuario } from "../services/usuauriosService";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const Actualizar = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [response, setResponse] = useState({
    IdUser: 0,
    Nombre: "",
    Apellido: "",
    IdCiudad: 0,
    IdCiudadNavigation: null,
  });

  const goback = () => {
    navigate("/Usuarios");
  };

  const getUserUnique = async () => {
    const IdUser = id.IdUser;
    GetUserById(IdUser)
      .then((res) => {
        setResponse({
          IdUser:res[0].IdUser,
          Nombre:res[0].Nombre,
          Apellido:res[0].Apellido,
          IdCiudad:res[0].IdCiudad,
          IdCiudadNavigation:null
        });
        console.log(res);
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actUser = async () => {
    const res = await actualizarUsuario(response);
    console.log(res);
    Swal.fire({
      title: "Usuario actualizado correctamente",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/Usuarios");
      }
    });
  };


  const handleChangeinput=({target})=>{
   const {name,value}=target;
   setResponse({...response,
     [name]:value
  });
  }
    

  useEffect(() => {
    getUserUnique();
  },[]);

  return (
    <>
      <h3>Actualizar</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="hidden"
                value={response.IdUser}
                name="IdUser"
                className="form-control"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={response.Nombre}
                name="Nombre"
                className="form-control"
                onChange={handleChangeinput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={response.Apellido}
                name="Apellido"
                className="form-control"
                onChange={handleChangeinput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={response.IdCiudad}
                name="IdCiudad"
                className="form-control"
                onChange={handleChangeinput}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={actUser}>
        Actualizar
      </button>

      <button className="btn btn-secondary" onClick={goback}>
        Regresar
      </button>
    </>
  );
};
