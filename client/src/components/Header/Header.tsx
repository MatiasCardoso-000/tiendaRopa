import { useAuth } from "../../hooks/useAuth";
import { CartIcon } from "../CartIcon/CartIcon";
import { LogoutIcon } from "../LogoutIcon/LogoutIcon";
import { UserIcon } from "../UserIcon/UserIcon";

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="w-full flex flex-col items-center justify-end px-4 h-[100px] shadow bg-white">
      <div className="mt-[50px] mr-[50px] flex gap-8 absolute top-[-20px] right-[90px] md:top-0 md:right-0 ">
        {isAuthenticated ? <LogoutIcon /> : ""}
        <UserIcon />
        <CartIcon />
      </div>
      <ul className="flex gap-8 py-2">
        <li className="text-sm cursor-pointer hover:underline">Pantalones</li>
        <li className="text-sm cursor-pointer hover:underline">Remeras</li>
        <li className="text-sm cursor-pointer hover:underline">Zapatillas</li>
      </ul>
    </header>
  );
};
