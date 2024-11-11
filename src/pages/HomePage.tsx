import List from "../components/List";
import Grid from "../components/Grid";

import { Pagination, Skeleton } from "antd";
import Tab from "../components/Tab";
import { useEffect, useState } from "react";
import getQuery from "../query/getQuery";
import useStore from "../zustand";
export interface data {
  rooms: number;
  title: string;
  image: string;
  info: string;
  category: string;
  sliderImage: string;
  area: number;
  favorite: boolean;
  id: string;
  price: number;
}

const HomePage = () => {
  const [tab, setTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { inc } = useStore();

  const { data, error, isLoading } = getQuery();
  const ItemsPerPage = 14;
  const totalItems = data ? data.length : 0;
  const totalPages = Math.ceil(totalItems / ItemsPerPage);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (data) {
      inc(data);
    }
  }, [data]);

  if (isLoading) {
    return <Skeleton active />;
  }
  if (error) {
    return <h1>There was an error while fetch data please try again later</h1>;
  }
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const currentItems = data && data.slice(startIndex, endIndex);
  return (
    <div>
      <Tab title="Топ объявления" setTab={setTab} />{" "}
      {tab === 1 ? (
        currentItems.map((i: data) => {
          return <List data={i} key={i.id} />;
        })
      ) : (
        <div className="flex gap-4 flex-wrap">
          {currentItems.map((i: data) => {
            return <Grid data={i} key={i.id} />;
          })}
        </div>
      )}
      <div className="my-10 justify-between" style={{ display: "flex" }}>
        <h2 className="text-3xl font-medium">Топ объявления</h2>
        <div className="flex gap-4">
          <select className="border-none bg-transparent" name="" id="">
            <option value="">Самые новые</option>
          </select>
          <select className="border-none bg-transparent" name="" id="">
            <option value="">Самые дешев</option>
          </select>
          <select className="border-none bg-transparent" name="" id="">
            <option value="">Самые дорог</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end my-9">
        <Pagination
          current={currentPage}
          onChange={onPageChange}
          defaultCurrent={1}
          pageSize={1}
          total={totalPages}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default HomePage;
