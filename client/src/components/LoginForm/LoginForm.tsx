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
    console.log(values);
    signIn(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center md:items-center md:justify-around bg-zinc-950 ">
      {LoginErrors.map((error, i) => (
        <ErrorMessage
          key={i}
          className="text-center bg-red-400 text-white p-2 rounded"
          text={error}
        />
      ))}
      <h1 className="font-bold text-4xl md:text-8xl p-2 text-zinc-50 md:mt-80 tracking-widest">
        RIOT
      </h1>
      <form
        onSubmit={onSubmit}
        className="w-full h-screen  md:w-1/4 md:h-[550px] flex flex-col gap-4 p-4 items-center justify-around bg-zinc-50"
      >
        <div className="w-full">
          <h3 className="font-bold text-3xl mb-10">INGRESAR</h3>
          <div className="w-full  flex flex-col gap-2">
            <Label htmlFor="username" className="font-medium">
              Nombre de usuario
            </Label>
            <Input
            { ...register("username", { required: true }) }
              type="text"
              id="username"
              className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
            {errors.username && (
              <ErrorMessage
                text="Nombre de usuario requerido"
                className="text-red-500 text-sm"
              />
            )}
          </div>

          <div className="w-full  flex flex-col gap-2">
            <Label htmlFor="password" className="font-medium">
              Contraseña
            </Label>
            <Input
            { ...register("password", { required: true }) }
              type="password"
              id="password"
              className="w-full border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
            />
            {errors.password && (
              <ErrorMessage
                text="Contraseña requerida"
                className="text-red-500 text-sm"
              />
            )}
          </div>

          <Button className="w-full  bg-zinc-800 text-slate-50 mt-8 font-semibold p-2 hover:bg-slate-600 cursor-pointer mt- rounded transition-colors">
            Ingresar
          </Button>
        </div>

        <div className="w-full text-right">
          <p>No tenes una cuenta?</p>{" "}
          <Link to="/auth/register">
            <span className="font-semibold hover:underline cursor-pointer">
              Registrarse
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
