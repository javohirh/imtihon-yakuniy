import { GoBack } from "../components/GoBack";
import { useState } from "react";
import {
  Form,
  Select,
  Radio,
  Button,
  Input,
  InputNumber,
  Upload,
  Checkbox,
} from "antd";
const { TextArea } = Input;
import { UploadOutlined } from "@ant-design/icons";
import request from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { data } from "./HomePage";
const { Option } = Select;
const FormPage = () => {
  const [installment, setInstallment] = useState(false);
  const regions = [
    {
      value: "tashkent",
      label: "Ташкент",
      districts: ["Юнусабад", "Мирзо-Улугбек", "Чилонзор"],
    },
    {
      value: "samarkand",
      label: "Самарканд",
      districts: ["Пайарык", "Тайлак", "Пастдаргом"],
    },
    {
      value: "bukhara",
      label: "Бухара",
      districts: ["Каган", "Вабкент", "Гиждуван"],
    },
  ];

  const [districts, setDistricts] = useState([]);

  const handleRegionChange = (value: any) => {
    const selectedRegion = regions.find((region) => region.value === value);
    setDistricts(selectedRegion ? selectedRegion.districts : []);
    form.setFieldsValue({ district: undefined });
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (value: any) =>
      request.post(`/products`, {
        favorite: false,
        title: value.district + " " + value.region,
        image: "https://loremflickr.com/640/480/city",
        info: "Possimus ipsam eius illo eum. Dignissimos voluptate voluptatem. Fuga est dicta temporibus cum. Ad soluta modi. Consequuntur cupiditate consectetur.",
        category: value.nearby,
        sliderImage: "https://loremflickr.com/640/480/abstract",
        area: +value.area,
        price: +value.price,
        rooms: +value.rooms,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    mutation.mutate(values);
    form.resetFields();
  };
  return (
    <>
      <GoBack path="/" />
      <h1 className="text-[#161A1D] text-[50px] text-center font-medium mb-12">
        Разместить объявление
      </h1>
      <div className="flex items-end mx-auto justify-center   ">
        <div className="text-[#999999] rounded-t-xl  bg-[#FFFFFF] pt-8 text-center w-[250px] h-[144px]">
          <h2 className="text-2xl text-[#FCA311] font-medium">Продажа</h2>
          <p className="text-sm max-w-[180px] mx-auto">
            Разместить объявление о продаже
          </p>
        </div>
        <div className="text-[#999999]  bg-[#eee] pt-2 text-center w-[250px] h-[100px]">
          <h2 className="text-2xl  font-medium">Аренда</h2>
          <p className="text-sm max-w-[180px] mx-auto">
            Разместить объявление об аренде
          </p>
        </div>
        <div className="text-[#999999] rounded-tr-xl  bg-[#eee] pt-2 text-center w-[250px] h-[100px]">
          <h2 className="text-2xl  font-medium">Сожительство</h2>
          <p className="text-sm max-w-[180px] mx-auto">
            Разместить объявление о сожительстве
          </p>
        </div>
      </div>
      <div className=" p-6 px-16 rounded-xl bg-white ">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
          layout="vertical"
        >
          <div className="!flex justify-between">
            <div className="mt-9 max-w-[40%] w-full ">
              <Form.Item
                name="propertyCategory"
                label=""
                rules={[{ required: true }]}
              >
                <Select placeholder="Категория недвижимости">
                  <Option value="apartment">Квартира</Option>
                  <Option value="house">Дом</Option>
                  <Option value="commercial">Коммерческая</Option>
                </Select>
              </Form.Item>

              <Form.Item name="region" label="" rules={[{ required: true }]}>
                <Select placeholder="Область" onChange={handleRegionChange}>
                  {regions.map((region) => (
                    <Option key={region.value} value={region.value}>
                      {region.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="district" label="" rules={[{ required: true }]}>
                <Select placeholder="Район" disabled={!districts.length}>
                  {districts.map((district) => (
                    <Option key={district} value={district}>
                      {district}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="repair" label="" rules={[{ required: true }]}>
                <Select placeholder="Ремонт">
                  <Option value="new">Новый</Option>
                  <Option value="used">Б/У</Option>
                </Select>
              </Form.Item>

              <Form.Item name="rooms" label="" rules={[{ required: true }]}>
                <Select placeholder="Количество комнат">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5+</Option>
                </Select>
              </Form.Item>

              <Form.Item name="area" label="" rules={[{ required: true }]}>
                <Select placeholder="Площадь">
                  <Option value="10">10м²</Option>
                  <Option value="20"> 20м²</Option>
                  <Option value="30">30м²</Option>
                  <Option value="40">40м²</Option>
                  <Option value="50">50м²</Option>
                  <Option value="60">60м²</Option>
                </Select>
              </Form.Item>

              <Form.Item name="nearby" label="" rules={[{ required: true }]}>
                <Select placeholder="Рядом">
                  <Option value="park">Парк</Option>
                  <Option value="school">Школа</Option>
                  <Option value="store">Магазин</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="commission"
                label="Комиссионные"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="yes">Есть</Radio>
                  <Radio value="no">Нет</Radio>
                </Radio.Group>
              </Form.Item>
              {/* <Form.Item>
              <Button
                className="!bg-[#FCA311] !text-[#161A1D] font-medium text-sm my-3"
                block
                type="primary"
                htmlType="submit"
              >
                Далее
              </Button>
            </Form.Item> */}
            </div>
            <div>
              {" "}
              <Form.Item
                name="price"
                rules={[{ required: true }]}
                label="Цена *"
                required
              >
                <Input
                  placeholder="Цена"
                  suffix="UZS"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </Form.Item>
              <Form.Item label="Обмен *" required>
                <Radio.Group
                  defaultValue="yes"
                  style={{ display: "flex", gap: "15px" }}
                >
                  <Radio value="yes">Есть</Radio>
                  <Radio value="no">Нет</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Рассрочка *" required>
                <Radio.Group
                  onChange={(e) => setInstallment(e.target.value === "yes")}
                  style={{ display: "flex", gap: "15px" }}
                >
                  <Radio value="yes">Есть</Radio>
                  <Radio value="no">Нет</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Срок рассрочки *" required>
                <Input
                  placeholder="Введите срок рассрочки"
                  suffix="Мес."
                  disabled={!installment}
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    backgroundColor: installment ? "#f0f0f0" : "#e0e0e0",
                  }}
                />
              </Form.Item>
              <Form.Item label="Предоплата *" required>
                <Input
                  placeholder="85%"
                  defaultValue="85%"
                  style={{
                    borderRadius: "8px",
                    padding: "8px",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </Form.Item>
              <Form.Item label="Месячный платеж *" required>
                <InputNumber
                  placeholder="1% - 100%"
                  min={1}
                  max={100}
                  formatter={(value) => `${value}%`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </Form.Item>
              <Form.Item label="Скидка">
                <InputNumber
                  placeholder="0% - 100%"
                  min={0}
                  max={100}
                  formatter={(value) => `${value}%`}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              </Form.Item>
              <Form.Item label="Акция">
                <TextArea
                  placeholder="Описание акции"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  style={{ borderRadius: "8px", backgroundColor: "#f0f0f0" }}
                />
              </Form.Item>
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="w-[40%]">
              <Form.Item
                label="Количество этажей"
                name="floors"
                rules={[{ message: "Введите количество этажей" }]}
              >
                <Input placeholder="Введите количество этажей" />
              </Form.Item>
              <Form.Item
                label="На каком этаже находится"
                name="floor"
                rules={[{ message: "Введите этаж" }]}
              >
                <Input placeholder="Введите этаж" />
              </Form.Item>
              <Form.Item
                label="Высота потолка (метров)"
                name="ceilingHeight"
                rules={[{ message: "Введите высоту" }]}
              >
                <Input placeholder="Введите высоту" />
              </Form.Item>
              <Form.Item label="Точное местоположение">
                <Button className="!bg-[#FCA311]" type="primary">
                  Указать на карте
                </Button>
              </Form.Item>
              <Form.Item
                label="Номер телефона"
                name="phoneNumber"
                rules={[{ message: "Введите номер телефона" }]}
              >
                <Input
                  addonBefore="+998"
                  placeholder="Введите номер телефона"
                />
              </Form.Item>
            </div>
            <div className="w-[42%]">
              {" "}
              <Form.Item
                label="Год постройки"
                name="yearBuilt"
                rules={[{ message: "Введите год постройки" }]}
              >
                <Input placeholder="Введите год постройки" />
              </Form.Item>
              <Form.Item label="" name="features">
                <Select placeholder="В доме имеется">
                  <Option value="parking">Парковка</Option>
                  <Option value="gym">Тренажерный зал</Option>
                  <Option value="pool">Бассейн</Option>
                </Select>
              </Form.Item>
              <Form.Item label="" name="additionalAmenities">
                <Select placeholder="Прочие удобства">
                  <Option value="wifi">Wi-Fi</Option>
                  <Option value="security">Охрана</Option>
                  <Option value="garden">Сад</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Брокерское обслуживание"
                name="brokerService"
                valuePropName="checked"
              >
                <Checkbox>Есть</Checkbox>
              </Form.Item>
              <Form.Item
                label="Дополнительная информация"
                name="additionalInfo"
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Введите текст"
                  maxLength={2048}
                />
              </Form.Item>
            </div>
          </div>

          <Form.Item label="Загрузить фотографии" name="photos">
            <Upload listType="picture-card">
              <Button icon={<UploadOutlined />}>Загрузить фото</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              className="!bg-[#FCA311] !text-[#161A1D] font-medium text-sm my-3"
              block
              type="primary"
              htmlType="submit"
            >
              Опубликовать
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormPage;
