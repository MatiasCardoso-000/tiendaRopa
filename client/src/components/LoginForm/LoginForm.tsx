import { useForm } from "react-hook-form";
import type { User } from "../../types/user.interface";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signIn, errors: LoginErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signIn(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-full flex flex-col items-center">
      {LoginErrors.map((error, i) => (
        <p key={i} className="text-center bg-red-400 text-white p-2 rounded">
          {error}
        </p>
      ))}

      <form
        onSubmit={onSubmit}
        className="w-full h-5/6 md:h-[600px] flex flex-col gap-4 p-4 items-center justify-center"
      >
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label htmlFor="username" className="font-medium">
            Nombre de usuario
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
            className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">Nombre de usuario requerido</p>
          )}
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <label htmlFor="password" className="font-medium">
            Contraseña
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Contraseña requerida</p>
          )}
        </div>

        <button className="w-full md:w-1/3 bg-zinc-800 text-slate-50 font-semibold p-2 hover:bg-slate-600 cursor-pointer mt-12 rounded transition-colors">
          Ingresar
        </button>
      </form>
    </div>
  );
};
