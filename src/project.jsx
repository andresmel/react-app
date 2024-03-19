
import { Header } from "./shared/header";
import { BrowserRouter } from "react-router-dom";
import { Rutas } from "./Routes/routes";

function Project() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Rutas/>
      </BrowserRouter>
    </>
  );
}

export default Project;
