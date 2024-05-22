import React from "react";
import Header from "../common/Header";
import Banner from "../common/Banner";
import Body from "../common/Body";
import HotDeals from "../common/HotDeals";
import FlashSale from "../common/FlashSale";

const Homepage = () => {
  return (
    <>
      <Header></Header>
      <Body
        banner={<Banner></Banner>}
        hotDeals={<HotDeals></HotDeals>}
        flashSale={<FlashSale></FlashSale>}
      ></Body>
    </>
  );
};

export default Homepage;
