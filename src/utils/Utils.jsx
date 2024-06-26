import { Rate } from "antd";
import { Link } from "react-router-dom";

export const renderProducts = (products) => (
  <div className="flex flex-wrap justify-around">
    {products.map((product) => (
      <Link
        to={`/product-detail/${product.id}`}
        key={product.id}
        className="rounded-lg shadow-md w-1/5 text-center m-4"
        // onClick={() => onClick(product.id)}
      >
        <img
          src={
            product.image === null || product.image === ""
              ? "https://cdn.shopify.com/s/files/1/0761/8769/7443/files/DielacGrowPlus_S2_1400_1.png?v=1699324909&width=2000&height=2000&crop=center"
              : product.image
          }
          alt={product.name}
          className="mx-auto"
        />
        <p className="mt-2 mx-10">{product.name}</p>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <Rate disabled defaultValue={product.rating || 5} />
          <span>({product.reviews || 0})</span>
        </div>
        <div className="text-red-500 font-bold text-xl mt-2">
          {product.price}VND
        </div>
        {/* <div className="text-gray-500 line-through">{product.price} VND</div> */}
      </Link>
    ))}
  </div>
);
