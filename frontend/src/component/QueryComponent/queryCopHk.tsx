import { useState, useEffect } from 'react';

export interface HookProp {
  title: string;
  content: string;
}

export const useTextApi = (query: string, list: HookProp[]) => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to make the API request
  const fetchApiResponse = async (query: string) => {
    setLoading(true);
    setError(null);

    const input = `
      You are an AI tasked with using knowledge consolidation to link content based on a specific query. Please follow these instructions:

      Input:
      Query: ${query}
      Array of JSON: ${JSON.stringify(list)}

      Task:
      Analyze the query.
      Identify and consolidate one to three pieces of content from the provided JSON that relate to the query.
      Create a cohesive response that links the selected content while addressing the query.
      Rejection of Irrelevant Requests:
      If the query does not relate to any of the provided content, respond politely with a message such as:
      "I'm sorry, but I cannot assist with that request as it does not relate to the provided content."
    `;

    try {
      const response = await fetch("https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': import.meta.env.VITE_API_KEY, 
        },
        body: JSON.stringify({
          input: input,
          parameters: {
            decoding_method: "greedy",
            max_new_tokens: 200,
            min_new_tokens: 0,
            stop_sequences: [],
            repetition_penalty: 1,
          },
          model_id: "ibm/granite-13b-chat-v2",
          project_id: "e2b11363-c136-4be3-b433-c99ebd639461",
          moderations: {
            hap: {
              input: {
                enabled: true,
                threshold: 0.5,
                mask: { remove_entity_value: true },
              },
              output: {
                enabled: true,
                threshold: 0.5,
                mask: { remove_entity_value: true },
              },
            },
          },
        }),
      })

      const data = await response.json();
      setResponse(data); 
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchApiResponse(query);
    }
  }, [query, list]);

  return { response, loading, error };
};
