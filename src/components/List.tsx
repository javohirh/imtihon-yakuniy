import room from "../assets/images/images/Room.png";
import area from "../assets/images/images/Area.png";
import conditon from "../assets/images/images/condition.png";
import { EyeOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../axios";
import { message } from "antd";
import useStore from "../zustand";
import { useNavigate } from "react-router-dom";

function List({ data }: any) {
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
      messageApi.success("Succes !!!");
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
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: "10px",
        borderRight: "10px solid #FCA311",
      }}
    >
      {contextHolder}
      <img
        className="rounded-s-lg"
        style={{ width: "25%" }}
        src={image}
        alt=""
      />
      <div style={{ margin: "0px 20px ", width: "75%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#161A1D", fontSize: "25px", margin: "5px" }}>
            {title}
          </h2>
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#999999", fontSize: "15px" }}>
              <img
                style={{ marginRight: "10px", display: "inline-block" }}
                src={room}
                alt=""
              />
              {rooms}
            </span>
            <span style={{ color: "#999999", fontSize: "15px" }}>
              <img
                style={{ marginRight: "10px", display: "inline-block" }}
                src={area}
                alt=""
              />
              {field} м2
            </span>
            <span style={{ color: "#999999", fontSize: "15px" }}>
              <img
                style={{ marginRight: "10px", display: "inline-block" }}
                src={conditon}
                alt=""
              />
              Евроремонт
            </span>
          </div>
          <h2 style={{ color: "#6A9B0C", fontSize: "24px" }}>$ {price}</h2>
        </div>
        <div
          className="mt-8 mb-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#161A1D", fontSize: "14px" }}>
            г.Ташкент, Юнусабадский р-н, ул.Янгишахар
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <p style={{ color: "#999999", fontSize: "14px" }}>
              <EyeOutlined />
              12983
            </p>
            <p style={{ color: "#999999", fontSize: "14px" }}>
              Опубликовано 22:38 25-Окт 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
