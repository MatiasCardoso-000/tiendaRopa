type IconProps = {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  showSideMenu?: () => void;
};

export const FavoriteIconBorder = ({ onClick }: IconProps) => (
  <img
    src={"../../../iconos/icons8-favorito-24.png"}
    alt="Favorito"
    className="w-6"
    onClick={onClick}
  />
);

export const FavoriteIcon = ({ onClick }: IconProps) => (
  <img
    src={"../../../iconos/favorito.png"}
    alt="Favorito"
    className="w-6"
    onClick={onClick}
  />
);

export const MenuIcon = ({ showSideMenu }: IconProps) => (
  <svg
    onClick={showSideMenu}
    className="mb-2 w-8 h-8 md:hidden cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);
