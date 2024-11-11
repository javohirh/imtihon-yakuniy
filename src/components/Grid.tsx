import room from "../assets/images/images/Room.png";
import area from "../assets/images/images/Area.png";
import conditon from "../assets/images/images/condition.png";
import { EyeOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../axios";
import useStore from "../zustand";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Grid({ data }: any) {
  const { token } = useStore();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const { title, image, favorite, rooms, area: field, price, id } = data;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) =>
      request.put(`/products/${id}`, {
        favorite: !favorite,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const toggleFavourite = (id: string) => {
    if (token) {
      mutation.mutate(id);
    } else {
      message.info("Please login first");
      navigate("/login");
    }
  };
  return (
    <div
      className="mt-8"
      style={{
        backgroundColor: "#fff",
        maxWidth: "270px",
        borderRadius: "10px",
        borderBottom: "10px solid #FCA311",
      }}
    >
      {contextHolder}
      <img className="rounded-t-lg" src={image} alt="" />
      <h2 style={{ color: "#161A1D", fontSize: "20px", margin: "5px" }}>
        {title}
      </h2>
      <div style={{ margin: "0px 8px " }}>
        <div
          className="mt-4 mb-8"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {" "}
          <h2 style={{ color: "#6A9B0C", fontSize: "24px" }}>$ {price}</h2>
          {favorite ? (
            <HeartFilled
              onClick={() => toggleFavourite(id)}
              style={{ fontSize: "24px", color: "red" }}
            />
          ) : (
            <HeartOutlined
              onClick={() => toggleFavourite(id)}
              style={{ fontSize: "24px" }}
            />
          )}
        </div>
        <div
          className="my-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#999999", fontSize: "10px" }}>
              <img
                width={24}
                style={{ marginRight: "4px", display: "inline-block" }}
                src={room}
                alt=""
              />
              {rooms}
            </span>
            <span style={{ color: "#999999", fontSize: "10px" }}>
              <img
                width={24}
                style={{ marginRight: "4px", display: "inline-block" }}
                src={area}
                alt=""
              />
              {field} м2
            </span>
            <span style={{ color: "#999999", fontSize: "10px" }}>
              <img
                width={24}
                style={{ marginRight: "4px", display: "inline-block" }}
                src={conditon}
                alt=""
              />
              Евроремонт
            </span>
          </div>
          <p style={{ color: "#999999", fontSize: "14px" }}>
            <EyeOutlined />
            12983
          </p>
        </div>
        <div
          className="mt-8 mb-2 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#161A1D", fontSize: "12px" }}>
            г.Ташкент, Юнусабадский р-н, ул.Янгишахар
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <p style={{ color: "#999999", fontSize: "12px" }}>22:38 25-Окт</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
