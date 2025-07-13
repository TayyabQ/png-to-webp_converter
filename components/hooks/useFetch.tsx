interface FetchProps {
  url: string;
  method: string;
  body?: BodyInit;
}

export default function useFetch() {
  const fetchdata = async ({ url, method, body }: FetchProps) => {
    try {
      const response = await fetch(url, {
        method,
        body,
      });

      const data = await response.json();

      return { ok: response.ok, data };
    } catch (error) {
      console.log("Data submission failed:", error);
      return { ok: false, data: null };
    }
  };

  return { fetchdata };
}
