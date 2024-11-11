import { useParams } from "react-router-dom";
import request from "../axios";
import { GoBack } from "../components/GoBack";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { data } from "./HomePage";
import {
  FireOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const SinglePage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<data>();
  useEffect(() => {
    request.get(`/products/${id}`).then((data) => setProducts(data.data));
  }, []);

  console.log(products);

  return (
    <>
      {products && (
        <div className="w-full      gap-[100px]">
          <div className="flex items-center   ">
            <div className="flex flex-col gap-[35px]">
              <GoBack path="/" />
              <div className="flex gap-[30px] ">
                <div className="flex flex-col gap-[30px] w-[350px]">
                  <img className=" rounded-2xl " src={products.image} alt="" />
                  <div className="w-full ml-[1px]">
                    <Swiper
                      spaceBetween={2}
                      slidesPerView={3}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      // pagination={{
                      //   clickable: true,
                      // }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>{" "}
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="pl-[21px]">
                        <img
                          className=" w-[140px] rounded-2xl"
                          src={products.image}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="flex flex-col gap-[15px] items-end">
                    <div className="flex gap-[12px] items-center">
                      <p className="text-[#55575a]">+998 99 555 60-70</p>
                      <button className="bg-[#fca311] text-black py-[6px] px-[30px] rounded-xl">
                        Показать номер
                      </button>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <p className="text-[#55575a] w-[230px] text-end">
                        г.Ташкент, Чиланзарский р-н ул.Улица, Дом 65
                      </p>
                      <button className="bg-[#fca311] text-[14px] text-black py-[3px] px-[30px]  rounded-xl">
                        Посмотреть на карте
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <iframe
                      className="rounded-xl"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5085.5611582596985!2d69.19973150643499!3d41.28418738196768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1731163178539!5m2!1sru!2s"
                      width="350"
                      height="400"
                      allowFullScreen={true}
                      loading="lazy"
                      // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="w-[470px] bg-white rounded-2xl p-[30px] flex flex-col gap-[25px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[10px]">
                      <FireOutlined
                        style={{ color: "#FCA311", fontSize: "28px" }}
                      />
                      <h2 className="text-2xl">{products.title}</h2>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <ShareAltOutlined style={{ fontSize: "28px" }} />
                      <HeartOutlined style={{ fontSize: "28px" }} />
                    </div>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    <h2 className="text-5xl text-[#89b03f]">
                      $ {products.price}
                    </h2>
                    <div className="bg-red-500  px-[12px] py-[3px] text-white rounded-s rounded-e">
                      1%
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                      <p>Стоимость м2 </p>
                      <p className="text-[#444]">$ 18,950</p>
                    </button>
                    <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                      <p> Предоплата </p>
                      <p className="text-[#444]">85%</p>
                    </button>
                    <button className="flex flex-col  p-[10px] bg-[#f6f6f6] text-[#999] rounded-xl">
                      <p> Рассрочка</p>
                      <p className="text-[#444]">Есть </p>{" "}
                    </button>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">
                        Месячный платеж
                      </p>
                      <p className="text-[#6a6d6f] w-[200px]">1%</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Скидка</p>
                      <p className="text-[#6a6d6f] w-[200px]">1%</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Акция</p>
                      <p className="text-[#6a6d6f] w-[200px]">
                        Описание акции, здесь будет подробная информация об
                        акции
                      </p>
                    </div>
                    <div className="flex gap-[50px] mb-[50px]">
                      <p className="text-[#6a9b0c] w-[150px]">Комиссионные</p>
                      <p className="text-[#6a9b0c] w-[200px]">Нет</p>
                    </div>
                    <hr />
                    <div className="flex gap-[50px] mt-[50px]">
                      <p className="text-[#999999] w-[150px]">
                        Количество комнат
                      </p>
                      <p className="text-[#6a6d6f] w-[200px]">28 комнат</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Площадь</p>
                      <p className="text-[#6a6d6f] w-[200px]">100 м2</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">
                        Количество этажей
                      </p>
                      <p className="text-[#6a6d6f] w-[200px]">
                        3 этажа и подвал
                      </p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Санузел</p>
                      <p className="text-[#6a6d6f] w-[200px]">
                        10 отдельных санузлов
                      </p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Состояние</p>
                      <p className="text-[#6a6d6f] w-[200px]">Евроремонт</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Планировка</p>
                      <p className="text-[#6a6d6f] w-[200px]">Планировка</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Год постройки</p>
                      <p className="text-[#6a6d6f] w-[200px]">2020</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Высота потолка</p>
                      <p className="text-[#6a6d6f] w-[200px]">3.5 м</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">В доме имеется</p>
                      <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-[50px]">
                      {" "}
                      <p className="text-[#999999] w-[150px]">
                        {" "}
                        Прочие удобства
                      </p>
                      <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">Рядом</p>
                      <div className="flex gap-[10px] flex-wrap items-center w-[200px]">
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                        <button className="bg-[#f6f6f6] rounded-2xl px-[12px] py-[3px]">
                          интернет
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">
                        Брокерское обслуж.
                      </p>
                      <p className="text-[#6a6d6f] w-[200px]">Есть</p>
                    </div>
                    <div className="flex gap-[50px]">
                      <p className="text-[#999999] w-[150px]">
                        Опубликовано 22:38 25-Окт 2021
                      </p>
                      <button className="bg-[#fca311] text-black py-[2px] px-[30px] rounded-xl">
                        Продлить топ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
