import { Button } from "../Button/Button";

interface Params { 
  widthValue : string
}

export const FavIcon = ({widthValue}:Params) => {
  return (
    <div>
      <Button className="w-[30px] cursor-pointer">
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
