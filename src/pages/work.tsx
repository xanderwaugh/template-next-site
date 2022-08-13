import { NextPage } from "next";
import { Item } from "@prisma/client";
import { useEffect, useState } from "react";

const WorkPage: NextPage = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/items")
      .then((res) => res.json())
      .then((res: Item[]) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <h1> Loading... </h1>
      </div>
    );
  if (!data)
    return (
      <div>
        <h1> No Items Loaded </h1>
      </div>
    );

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Items
      </h1>
    </div>
  );
};

WorkPage.displayName = "Work";

export default WorkPage;
