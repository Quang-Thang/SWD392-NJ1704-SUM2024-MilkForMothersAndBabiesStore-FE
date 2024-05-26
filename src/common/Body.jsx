import React from "react";

const Body = ({ banner, hotDeals, flashSale, hotSale }) => {
  return (
    <>
      <div className="">
        <div className="mx-32">
          <div>{banner}</div>
          <div className="my-10">{hotDeals}</div>
          <div>{flashSale}</div>
          <div>{hotSale}</div>
        </div>
      </div>
    </>
  );
};

export default Body;
