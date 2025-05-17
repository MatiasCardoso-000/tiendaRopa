import { Link } from "react-router-dom";
export const UserIcon = () => {
  return (
    <Link to={"/perfil"}>
      <span className="text-sm md:text-2xl cursor-pointer hover:underline">
        {" "}
        Perfil
      </span>
    </Link>
  );
};
