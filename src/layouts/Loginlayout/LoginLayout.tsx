import logo from "../../assets/images/icons/logo.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button, Select } from "antd";
import { CgFileDocument } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const LoginLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header
        className="flex justify-between items-center py-4 pt-6 max-w-[1200px] mx-auto"
        style={{ backgroundColor: "#fff" }}
      >
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-16">
          <div>
            <h2
              style={{ lineHeight: "20px" }}
              className="p-0 font-medium text-2xl"
            >
              +998 99 880 80-80
            </h2>
            <p
              style={{ lineHeight: "20px" }}
              className="p-0 text-right font-light text-xs"
            >
              Тех. поддержка
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Button
              className="text-sm font-medium py-5"
              type="primary"
              style={{ backgroundColor: "#fca311", color: "#161A1D" }}
            >
              Разместить объявление
            </Button>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CgFileDocument size={"1.5rem"} />
              <IoMdHeartEmpty size={"1.5rem"} />
              <FaRegUser size={"1.3rem"} />
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
      </header>

      <div className="bg-[#fca311] pb-5 min-h-screen pt-12">
        <div className="mx-auto max-w-[450px] w-full h-full bg-white rounded-xl">
          <div className="wave rounded-xl">
            <h2 className="text-center py-8 text-white text-[28px]">
              {pathname === "/login"
                ? "Зарегистрироваться"
                : "Подтверждение номера"}
            </h2>
          </div>
          <div className="mx-20 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
