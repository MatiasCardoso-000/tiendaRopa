import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

export const UserIcon = () => {
 const navigate =  useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div>
      <Button className="w-[30px] cursor-pointer" onClick={handleClick}>
        <img
          src="../../../public/iconos/icons8-usuario-50.png"
          alt="icono con la silueta de una persona que sirve para ingresar a la cuenta de usuario"
        />
      </Button>
    </div>
  );
};
