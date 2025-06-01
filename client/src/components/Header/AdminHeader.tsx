import { NavLink } from "react-router-dom";
import { CartIcon } from "../CartIcon/CartIcon";
import { MenuIcon } from "../Icons/Icons";
import { MenuItem } from "../MenuItem/MenuItem";
import { HeaderProps } from "../../types/header.interface";

export const AdminHeader = ({
  isAuthenticated,
  user,
  handleClick,
  showSideMenu,
}:HeaderProps) => {
  return (
    <>

      <header className="w-full flex flex-col items-center justify-end px-6 h-[100px] bg-zinc-950  text-zinc-50 ">
        <div className="w-full flex justify-end mt-[50px]  md:mr-[50px] gap-8  ">
          <div className="w-full flex justify-between items-center h-auto  cursor-pointer  gap-8  md:ml-[50px]">
            {/* Solo visible en mobile */}
            <MenuIcon showSideMenu={showSideMenu} />
            {/* Solo visible en desktop */}
            <h3
              onClick={showSideMenu}
              className=" hidden md:block md:text-4xl font-bold"
            >
              Menú
            </h3>
          </div>
          <div className="flex gap-4 items-center py-2">
            <MenuItem
              text={"Inicio"}
              redirectTo={"/"}
              className={
                "w-max hidden md:block  text-sm hover:text-zinc-400 transition-all duration-500 font-bold md:font-normal md:text-2xl p-4 md:p-0 cursor-pointer hover:underline"
              }
            />
            {isAuthenticated && user.role === "admin" ? (
              <MenuItem
                text={"Administración"}
                redirectTo={"/auth/admin"}
                className={
                  "w-max hidden md:block  text-sm hover:text-zinc-400 transition-all duration-500 font-bold md:font-normal md:text-2xl p-4 md:p-0 cursor-pointer hover:underline"
                }
              />
            ) : (
              ""
            )}
            {isAuthenticated ? (
              <MenuItem
                onClick={handleClick}
                text={"Salir"}
                className={
                  "w-max hidden md:block  text-sm hover:text-zinc-400 transition-all duration-500 font-bold md:font-normal md:text-2xl p-4 md:p-0 cursor-pointer hover:underline"
                }
              />
            ) : (
              <MenuItem
                text={"Ingresar"}
                redirectTo={"/auth/login"}
                className={
                  "w-max hidden md:block  text-sm hover:text-zinc-400 transition-all duration-500 font-bold md:font-normal md:text-2xl p-4 md:p-0 cursor-pointer hover:underline"
                }
              />
            )}
            {isAuthenticated && (
              <NavLink to={"/carrito"}>
                {" "}
                <CartIcon />
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
