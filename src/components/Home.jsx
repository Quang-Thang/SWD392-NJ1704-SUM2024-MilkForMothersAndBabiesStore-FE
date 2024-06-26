<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Information from "./Information";
import { renderProducts } from "../utils/Utils";
import { getAllProducts, getTopSellingProducts } from "../services/api-service";
=======
import { useEffect, useState } from "react";
import Information from "./Information";
import { renderProducts } from "../utils/Utils";
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2

export default function Home() {
  const [productsSale, setProductsSale] = useState([]);
  const [productsHot, setProductsHot] = useState([]);
  const [productsTrend, setProductsTrend] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProductsSale(shuffled.slice(0, 4));
        setProductsTrend(shuffled.slice(8, 12));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const fetchTopSellingProducts = async () => {
      try {
        const topSellingData = await getTopSellingProducts(4); // You can change the number to get more/less top-selling products
        setProductsHot(topSellingData);
      } catch (error) {
        console.error("Error fetching top selling products: ", error);
      }
    };

    fetchProducts();
    fetchTopSellingProducts();
=======
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProductsSale(shuffled.slice(0, 4));
        setProductsHot(shuffled.slice(4, 8));
        setProductsTrend(shuffled.slice(8, 12));
      })
      .catch((error) => console.error("Error fetching data: ", error));
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-blue-100">
        <img
          src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png"
          className="w-11/12"
<<<<<<< HEAD
          alt="Banner"
        />
        <div className="flex justify-around my-6 w-fit mx-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-1/5"
            >
              <img
                src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png"
                alt="Banner"
              />
            </div>
          ))}
        </div>
        <div className="bg-white-500 w-11/12">
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
=======
        />
        <div className="flex justify-around mx-6 my-6 w-fit">
          <div className="w-1/5 p-4 bg-white rounded-lg shadow-md">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="w-1/5 p-4 bg-white rounded-lg shadow-md">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="w-1/5 p-4 bg-white rounded-lg shadow-md">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
          <div className="w-1/5 p-4 bg-white rounded-lg shadow-md">
            <img src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/k/v/kv-sn-16-tuoi.chot-01_6.png" />
          </div>
        </div>
        <div className="w-11/12 bg-white-500">
          <div className="flex items-center justify-between p-4 text-white bg-blue-700 rounded-t-lg">
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
            <h1 className="text-2xl font-bold">FLASH SALE THÁNG 5:</h1>
            <a href="/list-product" className="text-white underline">
              Xem tất cả &gt;&gt;
            </a>
          </div>
<<<<<<< HEAD
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsSale)}
          </div>
        </div>
        <div className="bg-white-100 my-10 w-11/12">
          <div className="bg-white p-4 rounded-t-lg flex justify-between items-center border-b">
            <h1 className="text-2xl font-bold">SẢN PHẨM BÁN CHẠY</h1>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsHot)}
          </div>
        </div>
        <div className="bg-white-100 mb-10 w-11/12">
          <div className="bg-white p-4 rounded-t-lg flex justify-between items-center border-b">
            <h1 className="text-2xl font-bold">XU HƯỚNG TÌM KIẾM</h1>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {renderProducts(productsTrend)}
          </div>
        </div>
        <img
          src="./public/assets/images/image 34.png"
          className="w-11/12"
          alt="Banner"
        />
=======
          <div className="p-4 bg-white rounded-b-lg shadow-md">
            {renderProducts(productsSale)}
          </div>
        </div>
        <div className="w-11/12 my-10 bg-white-100">
          <div className="flex items-center justify-between p-4 bg-white border-b rounded-t-lg">
            <h1 className="text-2xl font-bold">SẢN PHẨM BÁN CHẠY</h1>
          </div>
          <div className="p-4 bg-white rounded-b-lg shadow-md">
            {renderProducts(productsHot)}
          </div>
        </div>
        <div className="w-11/12 mb-10 bg-white-100">
          <div className="flex items-center justify-between p-4 bg-white border-b rounded-t-lg">
            <h1 className="text-2xl font-bold">XU HƯỚNG TÌM KIẾM</h1>
          </div>
          <div className="p-4 bg-white rounded-b-lg shadow-md">
            {renderProducts(productsTrend)}
          </div>
        </div>
        <img src="./public/assets/images/image 34.png" className="w-11/12" />
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
        <Information />
      </div>
    </>
  );
}
