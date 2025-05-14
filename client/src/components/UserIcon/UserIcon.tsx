import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { useAuth } from "../../hooks/useAuth";

export const UserIcon = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }
    navigate("/perfil");
  };

  return (
    <div>
      <Button className="w-[30px] cursor-pointer" onClick={handleClick}>
        <img
          src="../../../iconos/icons8-usuario-50.png"
          alt="icono con la silueta de una persona que sirve para ingresar a la cuenta de usuario"
        />
      </Button>
    </div>
  );
};
