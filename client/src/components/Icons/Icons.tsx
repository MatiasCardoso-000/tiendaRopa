type IconProps = {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
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