import { Button } from "../Button/Button";

export const CartIcon = () => {
  return (
    <div>
      <Button className="w-[30px] cursor-pointer">
        <img
          className="w-[20px] md:w-[30px]"
          src="../../../iconos/icons8-bolsa-de-compras-50.png"
          alt="icono carrito"
        />
      </Button>
    </div>
  );
};
