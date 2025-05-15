import { useForm } from "react-hook-form";
import type { User } from "../../types/user.interface";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Label } from "../Label/Label";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

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
    <div className="w-full flex flex-col items-center ">
      {LoginErrors.map((error, i) => (
        <ErrorMessage
          key={i}
          className="text-center bg-red-400 text-white p-2 rounded"
          text={error}
        />
      ))}

      <form
        onSubmit={onSubmit}
        className="w-full h-5/6 md:h-[600px] flex flex-col gap-4 p-4 items-center justify-center "
      >
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <Label htmlFor="username" className="font-medium">
            Nombre de usuario
          </Label>
          <Input
            type="text"
            id="username"
            className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
            register={{ ...register("username", { required: true }) }}
          />
          {errors.username && (
            <ErrorMessage
              text="Nombre de usuario requerido"
              className="text-red-500 text-sm"
            />
          )}
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <Label htmlFor="password" className="font-medium">
            Contraseña
          </Label>
          <Input
            type="password"
            id="password"
            className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
            register={{ ...register("password", { required: true }) }}
          />
          {errors.password && (
            <ErrorMessage
              text="Contraseña requerida"
              className="text-red-500 text-sm"
            />
          )}
        </div>

        <Button className="w-full md:w-1/3 bg-zinc-800 text-slate-50 font-semibold p-2 hover:bg-slate-600 cursor-pointer mt-12 rounded transition-colors">
          Ingresar
        </Button>
        <div className="w-1/3 text-right">
          <p>No tenes una cuenta?</p>{" "}
          <Link to="/registro">
            <span className="font-semibold hover:underline cursor-pointer">
              Registrarse
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
