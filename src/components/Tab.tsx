import list from "../assets/images/icons/list.svg";
import grid from "../assets/images/icons/grid.svg";
import { FireOutlined } from "@ant-design/icons";
import { useState } from "react";
type tab = { title: string; setTab: (e: number) => void };
const Tab = ({ title, setTab }: tab) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "5px" }}>
        <h2 className="text-3xl font-medium">{title}</h2>
        <FireOutlined style={{ fontSize: "24px", marginLeft: "20px" }} />
      </div>
      <div className="flex ">
        <img
          className="hover:cursor-pointer "
          onClick={() => setTab(1)}
          width={28}
          src={list}
          alt=""
          title="List"
        />
        <img
          title="Grid"
          className="hover:cursor-pointer "
          onClick={() => setTab(2)}
          width={28}
          src={grid}
          alt=""
        />
      </div>
    </div>
  );
};

export default Tab;
