import { UsePaises } from "../hooks/usePaises";
//import { TablePaises } from "./tablePaises";
import { TablePaises } from "./tablePaises";

export const Cities = () => {
  const paises=UsePaises();
  const name="Paises";

    return (
    <>
        <TablePaises paises={paises} nombre={name}/>
    </>
    )
   
};
