import { CartIcon } from "../CartIcon/CartIcon";
import { FavIcon } from "../FavIcon/FavIcon";
import { UserIcon } from "../UserIcon/UserIcon";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-end px-4 h-[100px] shadow ">
      <div className="mt-[50px] mr-[50px] flex gap-8">
        <UserIcon/>
        <FavIcon widthValue={'30'}/>
        <CartIcon />
      </div>
    </header>
  );
};
