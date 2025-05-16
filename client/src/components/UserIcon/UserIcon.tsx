import { useNavigate } from "react-router-dom";
export const UserIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/perfil");
  };

  return (
    <span
      className="text-2xl cursor-pointer hover:underline"
      onClick={handleClick}
    >
      {" "}
      Perfil
    </span>
  );
};
