import { Form, Input, Button, Menu, Typography, Divider, Space } from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  HeartOutlined,
  DollarOutlined,
  IdcardOutlined,
  TagsOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import useStore from "../zustand";

const { Title, Text } = Typography;

const ProfileEdit = () => {
  const [form] = Form.useForm();
  const { name, setName, setPhone, phone, clearAll } = useStore();
  const handleFinish = (values: any) => {
    console.log("Form Values:", values);
    setName(values.name);
    setPhone(values.phone);
  };

  return (
    <div
      className="rounded-xl"
      style={{
        display: "flex",
        backgroundColor: "#f7f7f7",

        borderRadius: "10px",
      }}
    >
      <Menu
        className="profile"
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{ width: 200, borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Мой профиль
        </Menu.Item>
        <Menu.Item key="2" icon={<ProfileOutlined />}>
          Мои объявления
        </Menu.Item>
        <Menu.Item key="3" icon={<HeartOutlined />}>
          Избранное
        </Menu.Item>
        <Menu.Item key="4" icon={<DollarOutlined />}>
          Баланс: 10,000 UZS
        </Menu.Item>
        <Menu.Item key="5" icon={<IdcardOutlined />}>
          Ваш ID: 1001
        </Menu.Item>
        <Menu.Item key="6" icon={<TagsOutlined />}>
          Тарифы
        </Menu.Item>
        <Menu.Item key="7" icon={<MessageOutlined />}>
          Отзывы
        </Menu.Item>
        <Menu.Item
          onClick={clearAll}
          key="8"
          icon={<LogoutOutlined />}
          style={{ color: "red" }}
        >
          Выйти из аккаунта
        </Menu.Item>
      </Menu>

      <div
        style={{
          flex: 1,
          padding: "0 20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Title className="!my-4" level={3}>
          Изменить профиль
        </Title>

        <Form
          className="!w-[300px]"
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ name: name, phone: phone }}
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[{ required: true, message: "Введите имя" }]}
          >
            <Input placeholder="Имя" />
          </Form.Item>

          <Form.Item label="Телефон" name="phone">
            <Input addonBefore="+998" placeholder="Введите телефон" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              marginBottom: "20px",
              backgroundColor: "#FCA311",
              color: "#161A1D",
            }}
          >
            Сохранить
          </Button>
        </Form>

        <Divider />

        <div>
          <Text strong>Текущий тариф:</Text> <Text>Optimal Plan 3</Text>
        </div>

        <Space
          className="mb-6 w-[300px]"
          direction="vertical"
          style={{ marginTop: "10px" }}
        >
          <Text>
            Разрешение на размещение объявлений{" "}
            <span style={{ color: "green" }}>Есть ✔</span>
          </Text>
          <Text>
            Разрешение на просмотр дополнительной информации об объявлениях{" "}
            <span style={{ color: "red" }}>Нет ✘</span>
            <Button type="link">Подписаться на тарифный план</Button>
          </Text>
          <Button
            type="primary"
            ghost
            style={{
              width: "100%",
              color: "#161A1D",
              backgroundColor: "#FCA311",
            }}
          >
            Поднять объявление в топ
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ProfileEdit;