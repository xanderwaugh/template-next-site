import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setData((oldData) => oldData);
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setData({ error: "Error fetching data" });
      });
  }, [url, setData, setLoading]);

  return { data, loading };
};
