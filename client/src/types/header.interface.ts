export interface HeaderProps {
  isAuthenticated: boolean;
  user: { role: string };
  isActive?: boolean;
  handleClick: () => void;
  showSideMenu: () => void;
}
