import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { CartIcon } from "../CartIcon/CartIcon";
import { LogoutIcon } from "../LogoutIcon/LogoutIcon";
import { UserIcon } from "../UserIcon/UserIcon";

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="w-full flex flex-col items-center justify-end px-4 h-[100px] shadow bg-white relative">
        <div className="mt-[50px] mr-[50px] flex gap-8 absolute top-[-20px] right-[90px] md:top-0 md:right-0 ">
          {isAuthenticated ? <LogoutIcon /> : ""}
          <UserIcon />
          <CartIcon />
        </div>

        <h3
          onClick={showSideMenu}
          className="text-2xl cursor-pointer absolute top-[-20px] flex flex-col gap-8 left-[-20px] md:top- md:left-0 mt-[70px] ml-[50px]"
        >
          Menú
        </h3>
      </header>
      <div
        className={` ${
          isActive
            ? "transition-all duration-1000 ease-in-out  absolute top-0 left-[-100%]  min-h-screen w-[350px] "
            : "transition-all duration-700 ease-in-out absolute top-0 left-0  bg-white min-h-screen w-[350px] border-r-4"
        }  `}
      >
        <ul className="flex flex-col">
          <div
            onClick={showSideMenu}
            className="text-right text-2xl border-b-4 p-4 cursor-pointer"
          >
            X
          </div>
          <div className="p-2">
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="hover:text-zinc-400 transition-all duration-500 font-bold">
                Inicio
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4">
              <h3 className="hover:text-zinc-400 transition-all duration-500 font-bold">
                Productos
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="hover:text-zinc-400 transition-all duration-500 font-bold">
                Contactos
              </h3>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
