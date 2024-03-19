import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>
        <ul className="nav justify-content-end background">
       
          <li className="nav-item">
         
            <NavLink className="nav-link active" to="/Paises">
              Paises
            </NavLink>
            
          </li>
          <li className="nav-item">
          
            <NavLink className="nav-link active" to="/Formulario">
              Registrar
            </NavLink>
          </li>
      
          <li className="nav-item">
           
            <NavLink className="nav-link active" to="/Usuarios">
              Usuarios
            </NavLink>
          </li>
       
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
      
        </ul>
      </div>
    </>
  );
};
