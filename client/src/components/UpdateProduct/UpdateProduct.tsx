import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { Product } from "../../types/product.interface";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";

export const UpdateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState<string>("agregar");

  const showSideMenu = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    console.log("Opción seleccionada:", selectedOption);
    setOption("");
    if (selectedOption === "agregar") {
      setOption(selectedOption);
      console.log(option);
    }
    if (selectedOption === "modificar") {
      setOption(selectedOption);
      console.log(option);
    }
  };

  const { register, handleSubmit, reset } = useForm<Product>({
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
    },
  });

  const createProductRequest = async (product: Product) => {
    return await axios.post(`http://localhost:5000/`, product);
  };

  const createProduct = async (product: Product) => {
    const res = await createProductRequest(product);
    console.log(res.data);
  };

  const handleProduct = handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      if (!data.image || data.image.length === 0) {
        throw new Error("No se ha seleccionado una imagen");
      }

      const imageBased64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.result) {
            resolve(reader.result.toString());
          } else {
            reject(new Error("No se pudo leer el archivo"));
          }
        };

        reader.onerror = () => {
          reject(new Error("Error al leer el archivo"));
        };

        reader.readAsDataURL(data.image[0]);
      });

      const newProduct: Product = {
        ...data,
        image: imageBased64,
      };

      await createProduct(newProduct);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const UpdateProductRequest = async (product: Product) => {
    return await axios.put(`http://localhost:5000/${product._id}`, product);
  };

  const UpdateProduct = async (product: Product) => {};

  return (
    <>
      <Header showSideMenu={showSideMenu} />
      <aside
        className={` ${
          isActive
            ? "w-full min-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0 bg-white  md:w-[350px] border-r-4 z-10"
            : "w-full  min-h-screen transition-all duration-1000 ease-in-out  absolute top-0 left-[-100%]  md:w-[350px] z-10"
        }  `}
      >
        <ul className="flex flex-col">
          <div className=" text-right text-2xl border-b-4 p-4 cursor-pointer">
            <span className="w-max" onClick={showSideMenu}>
              X
            </span>
          </div>
          <div className="p-2">
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Inicio
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Productos
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Contactos
              </h3>
            </li>
          </div>
        </ul>
      </aside>
      <div className="w-full h-screen flex items-center justify-center px-4">
        {!isLoading ? (
          <>
            <div
              className={
                option === "agregar"
                  ? "w-full flex flex-col items-center"
                  : "hidden"
              }
            >
              <h3 className={option === "agregar" ? "text-3xl" : "hidden"}>
                {option} Producto
              </h3>
              <form
                className="md:w-1/3 flex flex-col items-center gap-4"
                onSubmit={handleProduct}
              >
                <Label htmlFor="title" className="font-medium">
                  Nombre del Producto:
                </Label>
                <Input
                  type="text"
                  id="title"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("title", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Precio del Producto:
                </Label>
                <Input
                  type="text"
                  id="price"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("price", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Imagen del Producto:
                </Label>
                <Input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="image"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("image", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Descripcion del Producto:
                </Label>
                <Input
                  type="text"
                  id="description"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("description", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Categoria del Producto:
                </Label>
                <Input
                  type="text"
                  id="category"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("category", { required: true }) }}
                />

                <select onChange={handleSelect}>
                  <option value="modificar">Modificar</option>
                  <option value="agregar">Agregar</option>s
                </select>
                <button className="bg-zinc-700 p-2 text-white">
                  Agregar/Modificar
                </button>
              </form>
            </div>
            <div
              className={
                option === "modificar"
                  ? "w-full flex flex-col items-center"
                  : "hidden"
              }
            >
              <h3 className={option === "modificar" ? "text-3xl" : "hidden"}>
                {option} Producto
              </h3>
              <form
                className="md:w-1/3 flex flex-col items-center gap-4"
                onSubmit={handleProduct}
              >
                <Label htmlFor="title" className="font-medium">
                  Nombre del Producto:
                </Label>
                <Input
                  type="text"
                  id="title"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("title", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Precio del Producto:
                </Label>
                <Input
                  type="text"
                  id="price"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("price", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Imagen del Producto:
                </Label>
                <Input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="image"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("image", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Descripcion del Producto:
                </Label>
                <Input
                  type="text"
                  id="description"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("description", { required: true }) }}
                />
                <Label htmlFor="title" className="font-medium">
                  Categoria del Producto:
                </Label>
                <Input
                  type="text"
                  id="category"
                  className="w-full  border border-slate-200 p-2"
                  register={{ ...register("category", { required: true }) }}
                />

                <select onChange={handleSelect}>
                  <option value="agregar">Agregar</option>
                  <option value="modificar">Modificar</option>
                </select>
                <button className="bg-zinc-700 p-2 text-white">
                  Agregar/Modificar
                </button>
              </form>
            </div>
          </>
        ) : (
          <h2 className="text-2xl font-bold">Enviando información</h2>
        )}
      </div>
    </>
  );
};
