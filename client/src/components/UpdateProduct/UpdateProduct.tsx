import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { Product } from "../../types/product.interface";
import axios from "axios";
import { useForm } from "react-hook-form";

type ProductForm = Omit<Product, "image"> & { image: FileList };

export const UpdateProduct = () => {
  // Removed unused product state
  const { register, handleSubmit } = useForm<ProductForm>();

  const createProductRequest = async (product: Product) => {
    return await axios.post(`http://localhost:5000/`, product);
  };

  const createProduct = async (product: Product) => {
    const res = await createProductRequest(product);
    console.log(res.data);
  };

  const handleProduct = handleSubmit(async (values) => {
    const newProduct: Product = {
      ...values,
      image:
        values.image && values.image.length > 0 ? values.image[0].name : "",
    };
    createProduct(newProduct);
    console.log(newProduct);
  });

  return (
    <div className="w-full flex justify-center">
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
          accept="image/png, image/jpeg"
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
        <button className="bg-zinc-700 p-2 text-white">
          Agregar/Modificar
        </button>
      </form>
    </div>
  );
};
