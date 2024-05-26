import React from "react";
import Header from "../common/Header";
import Banner from "../common/Banner";
import Body from "../common/Body";
import HotDeals from "../common/HotDeals";
import FlashSale from "../common/FlashSale";
import HotSale from "../common/HotSale";

const Homepage = () => {
  return (
    <>
      <Body
        banner={<Banner></Banner>}
        hotDeals={<HotDeals></HotDeals>}
        flashSale={<FlashSale></FlashSale>}
        hotSale={<HotSale></HotSale>}
      ></Body>
    </>
  );
};

export default Homepage;
