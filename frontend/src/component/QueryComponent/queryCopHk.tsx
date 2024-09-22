import { useState, useEffect } from 'react'

export interface hookProp {
    title: string;
    content: string;
  }

export const useFetchApi = (query: string, list: {}) => {

  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  console.log(list)

  // Function to simulate API request
  const fetchApiResponse = async (query: string) => {
    try {
      const apiResponse = await new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Response for query: ${list}`), 2000)
      );
      setResponse(apiResponse);
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiResponse(query);
  }, [query]);

  return { response, loading, error }
};
