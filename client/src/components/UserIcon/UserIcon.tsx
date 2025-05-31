import { Link } from "react-router-dom";
export const UserIcon = () => {
  return (
    <Link to={"/perfil"}>
      <span className="text-sm md:text-2xl hover:text-gray-700 cursor-pointer">
        {" "}
        Perfil
      </span>
    </Link>
  );
};
