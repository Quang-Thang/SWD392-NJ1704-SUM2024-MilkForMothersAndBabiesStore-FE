import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import SaleItem from "../components/SaleItem";

const FlashSale = () => {
  return (
    <div className="w-full h-[500px]">
      <div className="bg-[#003189] h-full">
        <h1 className="flex items-center gap-5 px-5 py-5 text-xl font-semibold text-white">
          <p>FLASH SALE THÁNG 5 </p> <FaBoltLightning size={40} />{" "}
        </h1>
        <div className="bg-white h-[410px] z-10 flex items-center">
          <SaleItem></SaleItem>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
