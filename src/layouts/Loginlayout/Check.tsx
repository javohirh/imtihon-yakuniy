import { GoBack } from "../../components/GoBack";
import { Button, GetProps, Input } from "antd";

import { useNavigate } from "react-router-dom";
import useStore from "../../zustand";
type OTPProps = GetProps<typeof Input.OTP>;
const Check = () => {
  const { token, setToken } = useStore();
  const onChange: OTPProps["onChange"] = (text) => {
    if (text) {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      })
        .then((res) => res.json())
        .then((json) => setToken(json.token));
    }
  };
  const navigate = useNavigate();
  const sharedProps: OTPProps = {
    onChange,
  };
  const handleSubmit = () => {
    if (token) {
      navigate("/");
    }
  };
  return (
    <div className="  ms-3 text-[#999999] text-sm">
      <GoBack path="/login" />
      <h2 className=" font-bold mt-4 mb-1">Введите код из СМС</h2>
      <p className="">
        Не получили код?{" "}
        <span className="text-[#FCA311] font-bold">Отправить повторно</span>
      </p>
      <p className="text-xs pb-7">Получить повторный код можно через 1:48</p>
      <div
        className="p
      b-8"
      >
        <Input.OTP {...sharedProps} />
      </div>
      <Button
        onClick={handleSubmit}
        className="!bg-[#FCA311] !text-[#161A1D] font-medium text-sm my-8 py-5"
        block
        type="primary"
        htmlType="submit"
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default Check;
