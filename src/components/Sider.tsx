import {
  Button,
  Checkbox,
  Collapse,
  InputNumber,
  Layout,
  Menu,
  MenuProps,
  Select,
  Space,
} from "antd";
const { Sider } = Layout;

import icon from "../assets/images/icons/Menu.svg";
import logo from "../assets/images/icons/logo.svg";
import hamburger from "../assets/images/icons/hamburger.svg";
import home from "../assets/images/icons/homeIcon.svg";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Категория недвижимости", "sub1", null, [
    getItem("Новостройки", "1"),
    getItem("Квартиры", "2"),
    getItem("Участки", "3"),
    getItem("Земля", "4"),
    getItem("Офисы", "5"),
    getItem("Магазины", "6"),
  ]),
  getItem("Область", "sub2", null, [
    getItem("Город Ташкент", "7"),
    getItem("Ташкентская область", "8"),
    getItem("Андижанская область", "9"),
    getItem("Бухарская область", "10"),
    getItem("Джизакская область", "11"),
    getItem("Каракалпакстан", "12"),
  ]),
  getItem("Район", "sub3", null, [
    getItem("Алмазарский район", "13"),
    getItem("Бектемирский район", "14"),
    getItem("Мирабадский район", "15"),
    getItem("Мирзо-Улугбекский район", "16"),
    getItem("Сергелийский район", "17"),
    getItem("Чиланзарский район", "18"),
  ]),
  getItem("Район", "sub4", null, [
    getItem("Евроремонт", "19"),
    getItem("Hi-Tech", "20"),
    getItem("Обычный ремонт", "21"),
    getItem("Советский ремонт", "22"),
    getItem("Категория ремонта", "23"),
    getItem("Категория ремонта", "24"),
  ]),
];
const nearby = [
  getItem("Рядом", "sub5", null, [
    getItem("Школа", "23"),
    getItem("Детский сад", "24"),
    getItem("Станция метро", "25"),
    getItem("Рынок", "26"),
  ]),
];

interface widths {
  siderWidth: number;
  setSiderWidth: (e: number) => void;
  setWidth: (e: string) => void;
}
function SiderComponent({ siderWidth, setSiderWidth, setWidth }: widths) {
  const changeSider = () => {
    setSiderWidth(300);
    setWidth("75vw");
  };
  const { pathname } = useLocation();
  if (pathname === "/form") {
    return null;
  }
  const changeSider2 = () => {
    setSiderWidth(70);
    setWidth("93vw");
  };
  return (
    <Sider
      width={siderWidth}
      style={{
        color: "red",
        borderRight: "1px solid #eee",
        backgroundColor: "#fff",
        paddingLeft: "15px",
      }}
    >
      {" "}
      <div
        className={`mt-4 me-4  ${
          siderWidth === 300 ? "hidden" : "flex"
        } flex-col items-center justify-center`}
      >
        <img
          onClick={changeSider}
          className="hover:cursor-pointer"
          src={hamburger}
          alt=""
        />
        <Link to={"/"}>
          <img className="mt-5" src={home} alt="" />
        </Link>
      </div>
      <div className={`${siderWidth === 300 ? "block" : "hidden"}`}>
        <div style={{ margin: "10px 6px" }}>
          <img onClick={changeSider2} src={icon} alt="" />
        </div>
        <div style={{ margin: "30px 30px 0" }}>
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
        <hr
          style={{
            width: "90%",
            margin: "23px 0 33px",
            height: "0px",
            borderBottom: "1px solid #EEEEEE",
          }}
        />
        <h2 className="sidebar-title" style={{ fontFamily: "Roboto" }}>
          Фильтр
        </h2>
        <div className="sidebar-flex">
          <Space wrap>
            <Select
              className="custom-select"
              defaultValue="Продажа"
              style={{
                width: 85,
                fontSize: "6px",
                backgroundColor: "#f3f3f3",
              }}
              options={[
                { value: "jack", label: "Полная предоплата" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "РасПродажасрочка" },
              ]}
            />
            <Select
              className="custom-select"
              defaultValue="Аренда"
              style={{ width: 85, fontSize: "6px" }}
              options={[
                { value: "jack", label: "Полная предоплата" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "РасПродажасрочка" },
              ]}
            />
            <Select
              className="custom-select"
              defaultValue="Сожит."
              style={{ width: 85, fontSize: "6px" }}
              options={[
                { value: "jack", label: "Полная предоплата" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "РасПродажасрочка" },
              ]}
            />
          </Space>
        </div>
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />

        <Collapse defaultActiveKey={["2"]} bordered={false}>
          <Collapse.Panel header="Количество комнат" key="2">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>От</span>
              <InputNumber style={{ backgroundColor: "#f3f3f3" }} min={1} />
              <span>До</span>
              <InputNumber style={{ backgroundColor: "#f3f3f3" }} min={1} />
              <Button type="primary" style={{ backgroundColor: "#d89106" }}>
                Принять
              </Button>
            </div>
          </Collapse.Panel>
        </Collapse>
        <Collapse
          style={{ marginTop: "5px" }}
          defaultActiveKey={["2"]}
          bordered={false}
        >
          <Collapse.Panel header="Площадь" key="2">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>От</span>
              <InputNumber style={{ backgroundColor: "#f3f3f3" }} min={1} />
              <span>До</span>
              <InputNumber style={{ backgroundColor: "#f3f3f3" }} min={1} />
              <Button type="primary" style={{ backgroundColor: "#d89106" }}>
                Принять
              </Button>
            </div>
          </Collapse.Panel>
        </Collapse>
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={nearby} />
        <div>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "14px",
              marginLeft: "8px",
              color: "#161A1D",
            }}
          >
            Комиссионные
          </h3>
          <div
            className="flex items-center justify-between px-4 "
            style={{ marginLeft: "8px" }}
          >
            <div>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "12px",

                  color: "#161A1D",
                  display: "inline-block",
                  marginRight: "18px",
                }}
              >
                Да <Checkbox style={{ marginLeft: "18px" }}></Checkbox>
              </span>
              <span
                style={{
                  fontWeight: "500",
                  color: "#161A1D",
                  display: "inline-block",
                  fontSize: "12px",
                  marginRight: "18px",
                }}
              >
                Нет <Checkbox style={{ marginLeft: "18px" }}></Checkbox>
              </span>
            </div>
            <Button type="primary" style={{ backgroundColor: "#d89106" }}>
              Принять
            </Button>
          </div>
        </div>
      </div>
    </Sider>
  );
}

export default SiderComponent;
