import React from "react";

const Body = ({ banner, hotDeals, flashSale }) => {
  return (
    <>
      <div className="mx-32">
        <div>{banner}</div>
        <div className="my-10">{hotDeals}</div>
        <div>{flashSale}</div>
      </div>
    </>
  );
};

export default Body;
