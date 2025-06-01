import { NavLink } from "react-router-dom";

interface MenuItemProps {
  text: string; 
  redirectTo?: string;
  className: string;
  onClick?: () => void; // Optional onClick handler
}

export const MenuItem = ({ text, redirectTo, className, onClick }: MenuItemProps) => {
  return (
    <li className={className} onClick={onClick}>
      {/* Using NavLink for active link styling */}
      <NavLink to={redirectTo ? redirectTo : "#"}>{text}</NavLink>
    </li>
  );
};
