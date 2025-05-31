import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="h-[300px] w-full bg-zinc-950 flex items-center justify-between">
      <ul className="flex flex-col ">
        <div className="p-2">
            <li className="text-4xl p-4 cursor-pointer ">
              <h3 className="w-max text-zinc-50 hover:text-zinc-400 transition-all duration-500 font-bold">
               <Link to={'/'}> Inicio</Link>
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer ">
              <h3 className="w-max text-zinc-50 hover:text-zinc-400 transition-all duration-500 font-bold">
               <Link to={'/productos'}>
                Productos
               </Link>
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer ">
              <h3 className="w-max text-zinc-50 hover:text-zinc-400 transition-all duration-500 font-bold">
               <Link to={'/contacto'}>
                Contacto
               </Link>
              </h3>
            </li>
          </div>
      </ul>
      <h3 className="font-bold text-5xl text-zinc-50 px-20 mt-50">RIOT</h3>
    </footer>
  );
};
