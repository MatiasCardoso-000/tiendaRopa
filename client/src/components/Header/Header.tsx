import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AdminHeader } from "./AdminHeader";
import { GeneralHeader } from "./GeneralHeader";
import { Aside } from "../Aside/Menu";

export const Header = () => {
  const { isAuthenticated, user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <Aside showSideMenu={showSideMenu} isActive={isActive} handleClick={handleClick} />

      {isAuthenticated && user.role === "admin" ? (
        <AdminHeader
          isAuthenticated={isAuthenticated}
          user={user}
          isActive={isActive}
          showSideMenu={showSideMenu}
          handleClick={handleClick}
        />
      ) : (
        <GeneralHeader
          isAuthenticated={isAuthenticated}
          user={user}
          isActive={isActive}
          showSideMenu={showSideMenu}
          handleClick={handleClick}
        />
      )}
    </>
  );
};
