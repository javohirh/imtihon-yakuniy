import {
  FacebookOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";

type width = { width: string };
const FooterComponent = ({ width }: width) => {
  return (
    <Footer className={`${width} bg-white`}>
      <div className="flex justify-center gap-16">
        <ul>
          <li className="text-[#161A1D] text-base font-medium mb-6">
            Полезные Ссылки
          </li>
          <li className="text-[#999999] mt-2">О Нас</li>
          <li className="text-[#999999] mt-2">Пользовательское Соглашение</li>
          <p className="mt-9 text-[#999999]">
            ©️ 2021 <span className=" text-[#161A1D]">Utopia</span> | Все права
            защищены
          </p>
        </ul>
        <ul>
          <li className="text-[#161A1D] text-base font-medium mb-6">
            Наши Страницы
          </li>
          <li>
            <SendOutlined className="ms-2 hover:cursor-pointer text-[#161A1D] text-lg" />
            <YoutubeOutlined className="ms-2 hover:cursor-pointer text-[#161A1D] text-lg" />
            <FacebookOutlined className="ms-2 hover:cursor-pointer text-[#161A1D] text-lg" />
            <InstagramOutlined className="ms-2 hover:cursor-pointer text-[#161A1D] text-lg" />
          </li>
        </ul>
        <ul>
          <li className="text-[#999999] mt-2">
            <PhoneOutlined className="me-2 text-[#161A1D]" />
            Тех. поддержка
          </li>
          <li className="text-[#161A1D] text-2xl font-medium mt-2">
            +998 99 880 80-80
          </li>
          <li className="text-[#999999] mt-2">
            <MailOutlined className="me-2 text-[#161A1D]" />
            info@utopia.uz
          </li>
          <li className="text-[#999999] mt-2">
            <HomeOutlined className="me-2 text-[#161A1D]" />
            г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52
          </li>
        </ul>
      </div>
    </Footer>
  );
};

export default FooterComponent;
