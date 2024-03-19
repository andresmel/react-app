import { Routes,Route } from "react-router-dom"
import { Formulario } from "../components/usuariosRegis"
import { Cities } from "../components/cities"
import { ListUsers } from "../components/ususariosList"
import { Login } from "../components/login"
import { Actualizar } from "../components/actualizar"


export const Rutas=()=>{
    return(
        <Routes>
          <Route path="/Formulario" element={<Formulario/>}></Route>
          <Route path="/Paises" element={<Cities/>}></Route>
          <Route path="/Usuarios" element={<ListUsers/>}></Route>
          <Route path="/Actualizar/:IdUser" element={<Actualizar/>}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
    )
}