import { useForm } from "react-hook-form";
import type { User } from "../../types/user.interface";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Button } from "../Button/Button";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signUp, errors: RegisterErrors } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="w-full min-h-screen flex flex-wrap  items-center justify-around bg-zinc-950">
      {RegisterErrors.map((error, i) => (
        <ErrorMessage
          key={i}
          className="bg-red-400 text-white p-2"
          text={error}
        />
      ))}
      <h1 className="font-bold text-4xl md:text-8xl  p-2 text-zinc-50 md:mt-80 tracking-widest">
        RIOT
      </h1>
      <form
        onSubmit={onSubmit}
        className="w-full h-screen  md:w-1/4 md:h-[550px] flex flex-col gap-4 p-4 items-center justify-around bg-zinc-50"
      >
        <div className="w-full">
          <h3 className="font-bold text-3xl mb-10">REGISTRO</h3>
          <div className="w-full  flex flex-col gap-2">
            <Label htmlFor="username" className="font-semibold">
              Nombre de usuario
            </Label>
            <Input
              {...register("username", { required: true })}
              type="text"
              id="username"
              className="w-full  border border-slate-200 p-2"
            />
          </div>
          {errors.username && (
            <ErrorMessage
              className=" text-red-500"
              text="Nombre de usuario requerido"
            />
          )}
          <div className="w-full  flex flex-col gap-2">
            <Label htmlFor="email" className="font-semibold">
              Correo electrónico
            </Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="w-full  border border-slate-200  p-2"
            />
          </div>

          {errors.email && (
            <ErrorMessage
              className=" text-red-500"
              text="El correo electrónico es obligatorio"
            />
          )}
          <div className="w-full  flex flex-col gap-2">
            <Label htmlFor="password" className=" font-semibold">
              Contraseña
            </Label>
            <Input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="w-full  border border-slate-200  p-2"
            />
          </div>

          {errors.password && (
            <p className=" text-red-500">Contraseña requerida</p>
          )}
          <Button className="w-full bg-zinc-800 text-slate-50 font-semibold p-2 hover:bg-slate-600 cursor-pointer mt-8 rounded transition-colors">
            Registrarse
          </Button>
        </div>

        <div className="w-full text-right ">
          <p>Ya tenes cuenta?</p>{" "}
          <Link to="/auth/login">
            <span className="font-semibold hover:underline cursor-pointer">
              Ingresá
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
