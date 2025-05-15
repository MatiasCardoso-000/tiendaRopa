import { Button } from "../Button/Button";
import { MouseEventHandler } from "react";

interface Params {
  widthValue: string;
  onClick: MouseEventHandler;
}

export const FavoriteIconCard = ({ widthValue, onClick }: Params) => {
  return (
    <div>
      <Button className="w-[30px] cursor-pointer" onClick={onClick}>
        {" "}
        <img
          className={`w-[${widthValue}px]`}
          src="../../../iconos/icons8-favorito-24.png"
          alt="icono de un corazon para guardar el producto en favoritos"
        />
      </Button>
    </div>
  );
};
