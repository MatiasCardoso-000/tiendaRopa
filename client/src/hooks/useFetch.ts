import { useEffect, useState } from "react";

type Data<T> = T | [];

type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  error: ErrorType;
  loading: boolean;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>([]);
  const [error, setError] = useState<ErrorType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error in the request");
        }
        const data: T = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};
