import { useForm } from "react-hook-form";
import type { User } from "../../types/user.interface";
import { useAuth } from "../../hooks/useAuth";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signUp ,errors : RegisterErrors} = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (

    <div className="w-full flex flex-col items-center gap-2">
      {
        RegisterErrors.map((error,i) => (
          <p key={i} className="bg-red-400 text-white p-2">{error}</p>
        ))
      }
       <form
      onSubmit={onSubmit}
      className=" w-full h-5/6  md:h-[600px] flex flex-col gap-4 p-4 items-center justify-center"
    >
      <label htmlFor="username">Nombre de usuario</label>
      <input
        {...register("username", { required: true })}
        type="text"
        id="username"
        className="w-full md:w-1/3  border border-slate-200 p-2"
      />
      {errors.username && (
        <p className=" text-red-500">Nombre de usuario requerido</p>
      )}

      <label htmlFor="email" className="text-left">
        {" "}
        Correo electrónico
      </label>
      <input
        {...register("email", { required: true })}
        type="email"
        id="email"
        className="w-full md:w-1/3 border border-slate-200  p-2"
      />
      {errors.email && <p className=" text-red-500">Email requerido</p>}
      <label htmlFor="password">Contraseña</label>
      <input
        {...register("password", { required: true })}
        type="password"
        id="password"
        className="w-full md:w-1/3 border border-slate-200  p-2"
      />
      {errors.password && <p className=" text-red-500">Contraseña requerida</p>}
      <button className="w-full md:w-1/3 bg-zinc-800 text-slate-50 font-semibold p-2 hover:bg-slate-600 cursor-pointer mt-12">
        Registrarse
      </button>
    </form>
    </div>
   
  );
};
