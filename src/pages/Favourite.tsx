import Tab from "../components/Tab";

import List from "../components/List";
import Grid from "../components/Grid";
import { useEffect, useState } from "react";
import { data } from "./HomePage";
import getQuery from "../query/getQuery";
import { Skeleton } from "antd";
import useStore from "../zustand";
const Favourite = () => {
  const { inc } = useStore();
  const { data, error, isLoading } = getQuery();
  const favorite = data && data.filter((e: any) => e.favorite === true);
  console.log(favorite);

  const [tab, setTab] = useState(1);
  useEffect(() => {
    if (data) {
      inc(data);
    }
  }, [data]);
  if (isLoading) {
    return <Skeleton active />;
  }
  return (
    <div>
      <Tab title="Избранное" setTab={setTab} />
      {tab === 1 ? (
        favorite.map((i: data) => {
          return <List data={i} key={i.id} />;
        })
      ) : (
        <div className="flex gap-4 flex-wrap">
          {favorite.map((i: data) => {
            return <Grid data={i} key={i.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Favourite;
