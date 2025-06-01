import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { Product } from "../../types/product.interface";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { ProductItem } from "../Productitem/ProductItem";
import { Link } from "react-router-dom";

export const AdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    console.log("Opción seleccionada:", selectedOption);
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

  // const UpdateProductRequest = async (product: Product) => {
  //   return await axios.put(`http://localhost:8080/${product._id}`, product);
  // };

  return (
    <>
      <Header showSideMenu={showSideMenu} />
      <div className="w-full h-screen flex flex-col md:grid-cols-2 items-center justify-center ">
        <Link
          to={`/`}
          className="text-blue-600 hover:text-blue-800 flex items-center text-left justify-start w-full h-16 px-4"
        >
          <h1 className="text-lg font-semibold">← Volver al producto</h1>
        </Link>

        <div className="w-full h-screen flex flex-col  md:w-1/3 md:flex-row items-center justify-center px-4 md:gap-20">
          <form
            className="w-full flex flex-col items-center gap-4"
            onSubmit={handleProduct}
          >
            <Label htmlFor="title" className="font-medium">
              Nombre del Producto:
            </Label>
            <Input
              type="text"
              id="title"
              className="w-full border border-slate-200 p-2"
              register={{ ...register("title", { required: true }) }}
              placeholder="Nombre del Producto"
            />
            <Label htmlFor="title" className="font-medium">
              Precio del Producto:
            </Label>
            <Input
              type="text"
              id="price"
              className="w-full  border border-slate-200 p-2"
              register={{ ...register("price", { required: true }) }}
              placeholder="Precio del Producto"
            />
            <Label htmlFor="title" className="font-medium">
              Imagen del Producto:
            </Label>
            <Input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="image"
              className="w-full   border border-slate-200 p-2"
              register={{ ...register("image", { required: true }) }}
              placeholder="Imagen del Producto"
            />
            <Label htmlFor="title" className="font-medium">
              Descripcion del Producto:
            </Label>
            <Input
              type="text"
              id="description"
              className="w-full border border-slate-200 p-2"
              register={{ ...register("description", { required: true }) }}
              placeholder="Descripcion del Producto"
            />
            {/* <Label htmlFor="title" className="font-medium">
              Categoria del Producto:
            </Label>
            <Input
              type="text"
              id="category"
              className="w-full  border border-slate-200 p-2"
              register={{ ...register("category", { required: true }) }}
            /> */}
          </form>
          <ProductItem />
        </div>
      </div>
    </>
  );
};
