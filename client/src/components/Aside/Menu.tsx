import { Link } from "react-router-dom";

export const Aside = ({showSideMenu,isActive}) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-20 h-full bg-white border-r-4 transition-all duration-700 ease-in-out
          ${isActive ? "w-full md:w-[350px] left-0" : "w-0 md:w-0 left-[-100%]"}
        `}
      style={{ maxWidth: isActive ? "100vw" : "0" }}
    >
      <ul className="flex flex-col h-full">
        <div className="text-right text-2xl border-b-4 p-4 cursor-pointer">
          <span className="w-max" onClick={showSideMenu}>
            X
          </span>
        </div>
        <div className="p-2 flex-1">
          <li className="text-2xl md:text-4xl p-4 cursor-pointer border-b-4">
            <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
              <Link to={"/"}>Inicio</Link>
            </h3>
          </li>
          <li className="text-2xl md:text-4xl p-4 cursor-pointer border-b-4">
            <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
              <Link to={"/productos"}>Productos</Link>
            </h3>
          </li>
          <li className="text-2xl md:text-4xl p-4 cursor-pointer border-b-4">
            <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
              <Link to={"/contacto"}>Contacto</Link>
            </h3>
          </li>
        </div>
      </ul>
    </aside>
  );
};
