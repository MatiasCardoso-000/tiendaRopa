import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button/Button";

interface Params {
  widthValue: string;
}

export const FavoriteIconHeader = ({ widthValue }: Params) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }

    navigate("/favoritos");
  };

  return (
    <div>
      <Button className="w-[30px] cursor-pointer" onClick={handleClick}>
        {" "}
        <img
          className={`w-[${widthValue}px]`}
          src="../../../public/iconos/icons8-favorito-24.png"
          alt="icono de un corazon para guardar el producto en favoritos"
        />
      </Button>
    </div>
  );
};
