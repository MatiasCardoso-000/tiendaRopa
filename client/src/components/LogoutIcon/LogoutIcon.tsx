import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button/Button";

export const LogoutIcon = () => {
  const  {logout} = useAuth()

  const handleClick = () => {
    logout()
  }

  return (
    <div>
      <Button className="w-[30px] cursor-pointer" onClick={handleClick}>
        <img
          src="../../../iconos/icons8-apagar-50.png"
          alt="logout icon"
        />
      </Button>
    </div>
  );
};
