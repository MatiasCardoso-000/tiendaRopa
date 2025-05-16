import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CartIcon } from "../CartIcon/CartIcon";
import { LogoutIcon } from "../LogoutIcon/LogoutIcon";
import { UserIcon } from "../UserIcon/UserIcon";

export const Header = ({ showSideMenu }) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="w-full flex flex-col items-center justify-end px-4 h-[100px] shadow bg-zinc-950 relative text-zinc-50">
        <div className="mt-[50px] mr-[20px] md:mr-[50px] flex gap-8 absolute top-0 right-0 ">
          {isAuthenticated ? (
            <LogoutIcon />
          ) : (
            <Link to={"/login"}>
              {" "}
              <span className="text-2xl cursor-pointer">Login</span>
            </Link>
          )}
          {isAuthenticated ? <UserIcon /> : ""}
          <Link to={"/cart"}>
            {" "}
           <CartIcon/>
          </Link>
        </div>

        <h3
          onClick={showSideMenu}
          className="text-2xl cursor-pointer absolute top-[-20px] flex flex-col gap-8 left-[-20px] md:top- md:left-0 mt-[70px] ml-[50px]"
        >
          Menú
        </h3>
      </header>
    </>
  );
};
