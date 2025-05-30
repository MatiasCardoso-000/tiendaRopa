import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CartIcon } from "../CartIcon/CartIcon";
import { UserIcon } from "../UserIcon/UserIcon";
import { SearchIcon } from "../Icons/SearchIcon/SearchIcon";

export const Header = ({ showSideMenu }) => {
  const { isAuthenticated, user } = useAuth();
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <header className="w-full flex flex-col items-center justify-end px-4 h-[100px] bg-zinc-950 relative text-zinc-50 ">
        <div className="w-full flex flex-wrap justify-end mt-[50px] mr-[20px] md:mr-[50px] gap-8 absolute md:top-0 md:right-0 ">
          <div className="flex gap-4 items-center">
            <SearchIcon />
            {isAuthenticated && (
              <Link to={"/cart"}>
                {" "}
                <CartIcon />
              </Link>
            )}
            {isAuthenticated ? (
              <span
                className="text-sm md:text-2xl cursor-pointer hover:underline"
                onClick={handleClick}
              >
                Salir
              </span>
            ) : (
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-sm md:text-3xl hover:text-gray-700 cursor-pointer">
                  Login
                </span>
              </Link>
            )}
            {isAuthenticated && user.role === "user" ? <UserIcon /> : ""}{" "}
            {isAuthenticated && user.role === "admin" ? (
              <div className="flex gap-4 ">
                <UserIcon />
                <Link to="/update">
                  <span className="text-sm md:text-2xl cursor-pointer hover:underline">
                    Agregar/Modificar
                  </span>
                </Link>
              </div>
            ) : (
              ""
            )}
            <div className=" flex justify-center items-center  h-auto w-max md:text-4xl cursor-pointer absolute top-[-60px] left-[30px] gap-8 md:top-[-70px] md:left-[20px] md:mt-[70px] md:ml-[50px]">
              <h3 onClick={showSideMenu}>Menú</h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
