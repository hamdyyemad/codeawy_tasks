import { useState, useEffect } from "react";
/**
 * A custom hook to fetch data from a URL.
 *
 * @template T - The type of the data expected from the API response.
 * @param {string} url - The URL to fetch data from.
 * @returns {{
 *   data: T | null;
 *   isLoading: boolean;
 *   error: string | null;
 * }} An object containing the fetched data, loading state, and error message.
 *
 * @example
 * const { data, isLoading, error } = useFetch<MyDataType>("https://api.example.com/data");
 * if (isLoading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error}</div>;
 * return <div>{data?.property}</div>;
 */
export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json: T = await response.json();
        setIsLoading(false);
        setData(json);
        setError(null);
        console.log(json);
      } catch (error) {
        console.error(error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
