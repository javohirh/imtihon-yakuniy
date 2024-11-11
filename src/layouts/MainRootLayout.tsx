import { Layout, Pagination } from "antd";

import { useState } from "react";
import SiderComponent from "../components/Sider";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const MainRootLayout = () => {
  const [width, setWidth] = useState("75vw");
  const [siderWidth, setSiderWidth] = useState(300);
  return (
    <Layout style={{ minHeight: "100vh", fontFamily: "unset" }}>
      <SiderComponent
        siderWidth={siderWidth}
        setSiderWidth={setSiderWidth}
        setWidth={setWidth}
      />
      <Layout>
        <HeaderComponent width={width} />
        <Content
          className={`${width}`}
          style={{
            backgroundColor: "#f6f6f6",
          }}
        >
          <div style={{ maxWidth: "850px", margin: "40px auto" }}>
            <Outlet />
          </div>
        </Content>
        <FooterComponent width={width} />
      </Layout>
    </Layout>
  );
};

export default MainRootLayout;
