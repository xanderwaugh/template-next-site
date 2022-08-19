import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setData((oldData) => oldData);
    setLoading(true);
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        // err: Error
        setLoading(false);
        setData({
          error: "Error fetching data",
        });
        // error: err.message,
      });
  }, [url, setData, setLoading]);

  return { data, loading };
};
