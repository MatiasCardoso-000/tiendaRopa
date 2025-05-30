import { useState } from "react";
import { searchProductRequest } from "../../auth/auth";

export const useSearch = () => {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchValue = formData.get('search')
    const response = await searchProductRequest({ product: searchValue });
    setValueInput(response.data)
  };

  return {
    valueInput,
    handleSubmit,
  }
}