import { Button, Select } from "antd";
import { Header } from "antd/es/layout/layout";

import Search from "antd/es/transfer/search";
import logo from "../assets/images/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import useStore from "../zustand";

import { CgFileDocument } from "react-icons/cg";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
type width = { width: string };
function HeaderComponent({ width }: width) {
  const { pathname } = useLocation();
  const { token, count } = useStore();
  return (
    <Header
      className={`${width}`}
      style={{ padding: 0, backgroundColor: "#fff" }}
    >
      {" "}
      <div className="header-content">
        {pathname === "/form" ? (
          <Link className="relative left-[-180px]" to={"/"}>
            {" "}
            <img src={logo} alt="" />
          </Link>
        ) : (
          ""
        )}
        <Search placeholder="Найти объявления..." />
        <div className="header-main">
          <Link className="flex h-[45px]" to={token ? "form" : "login"}>
            <Button
              className="text-sm font-medium py-5"
              type="primary"
              style={{ backgroundColor: "#fca311", color: "#161A1D" }}
            >
              Разместить объявление
            </Button>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CgFileDocument size={"1.5rem"} />
            {
              <Link
                to={token ? "favourite" : "login"}
                className="relative inline-block"
              >
                {count === 0 ? (
                  <IoMdHeartEmpty size={"1.5rem"} />
                ) : (
                  <IoIosHeart color="red" size={"1.5rem"} />
                )}

                <span className="absolute z-20 count text-[10px]  top-[-28px] right-[-3px]">
                  {count}
                </span>
              </Link>
            }
            <Link to={token ? "profile" : "login"}>
              <FaRegUser size={"1.3rem"} />
            </Link>
          </div>

          <Select
            className="custom-select"
            defaultValue="RU"
            style={{ width: 60 }}
            options={[
              { value: "ru", label: "Ru" },
              { value: "uz", label: "UZ" },
              { value: "en", label: "EN" },
            ]}
          />
        </div>
      </div>
    </Header>
  );
}

export default HeaderComponent;
