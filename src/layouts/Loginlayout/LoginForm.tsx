import React from "react";
import { CheckOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { FiEye, FiPhone } from "react-icons/fi";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../zustand";
const LoginForm = () => {
  const { name, setName, setPhone } = useStore();

  const navigate = useNavigate();
  console.log(name);

  const [isValidPhone, setIsValidPhone] = useState(false);
  const [form] = Form.useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    const isMatching = /^\+998\d{9}$/.test(phoneNumber);
    setIsValidPhone(isMatching);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setName(values.name);
    setPhone(values.phone);

    navigate("check");

    form.resetFields();
  };
  return (
    <Form
      className=""
      form={form}
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 300, fontFamily: "Roboto" }}
    >
      <Form.Item
        label="Номер телефона"
        name="phone"
        rules={[{ required: true, message: "Please input your Phone number" }]}
        className={`${
          isValidPhone ? "!border-b-[#FCA311]" : "!border-b-[#999999]"
        } !border-b !pb-2 !mb-2`}
      >
        <Input
          className="!outline-none !border-none !ps-0 !bg-white"
          prefix={<FiPhone color={isValidPhone ? "#FCA311" : "#999999"} />}
          suffix={
            isValidPhone ? <CheckOutlined style={{ color: "#FCA311" }} /> : null
          }
          onChange={handleChange}
          placeholder="+998 99 880 80-80"
        />
      </Form.Item>

      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: "Please input your name" }]}
        className={`${
          isValidPhone ? "!border-b-[#FCA311]" : "!border-b-[#999999]"
        } !border-b !pb-2 !mb-2`}
      >
        <Input
          className="!outline-none !border-none !ps-0 !bg-white"
          prefix={<UserOutlined color={isValidPhone ? "#FCA311" : "#999999"} />}
          placeholder="Введите ваше имя"
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Please input your password" }]}
        className={`${
          isValidPhone ? "!border-b-[#FCA311]" : "!border-b-[#999999]"
        } !border-b !pb-2 !mb-2`}
      >
        <Input.Password
          className="!outline-none !border-none !ps-0 !bg-white"
          prefix={<LockOutlined color={isValidPhone ? "#FCA311" : "#999999"} />}
          iconRender={(visible) => (visible ? <FiEye /> : <FiEye />)}
          placeholder="Введите ваше Пароль"
        />
      </Form.Item>

      <Form.Item
        label="Подтверждение пароля"
        name="password2"
        rules={[
          {
            required: true,
            message: "Please input your Password again",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают"));
            },
          }),
        ]}
        className={`${
          isValidPhone ? "!border-b-[#FCA311]" : "!border-b-[#999999]"
        } !border-b !pb-2 !mb-2`}
      >
        <Input.Password
          className="!outline-none !border-none !ps-0 !bg-white"
          prefix={<LockOutlined color={isValidPhone ? "#FCA311" : "#999999"} />}
          iconRender={(visible) => (visible ? <FiEye /> : <FiEye />)}
          placeholder="Повторно введите пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button
          className="!bg-[#FCA311] !text-[#161A1D] font-medium text-sm my-3"
          block
          type="primary"
          htmlType="submit"
        >
          Далее
        </Button>
        <p className="text-center text-sm text-[#999999] my-4 mb-8">
          Уже есть аккаунт?{" "}
          <Link to={""} className="text-[#FCA311] font-bold text-sm ms-1">
            Войти
          </Link>
        </p>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
