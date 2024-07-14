import { useEffect, useState } from "react";
import Information from "./Information";
import { renderProducts } from "../utils/Utils";
import { Button, Rate, Pagination, Checkbox, Input } from "antd";
import { Link } from "react-router-dom";
import {
  getAllProducts,
  filterProductsByAge,
  filterProductsByBrand,
  filterProductsByOrigin,
  filterProductsBySize,
  filterProductsByCapacity,
} from "../services/api-service"; // Đảm bảo đường dẫn đúng đến file api-service.ts

export default function ListProduct() {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showCapacityFilter, setShowCapacityFilter] = useState(false);
  const [showOriginFilter, setShowOriginFilter] = useState(false);
  const [showBrandFilter, setShowBrandFilter] = useState(false);
  const [showAgeFilter, setShowAgeFilter] = useState(false);
  const [showSizeFilter, setShowSizeFilter] = useState(false);
  const [productsHot, setProductsHot] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    filteredProducts.length >= 0
      ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
      : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleFilterChange = async (filterType, value, checked) => {
    if (!checked) {
      // If the checkbox is unchecked, reset to all products
      setFilteredProducts(await getAllProducts());
      return;
    }

    try {
      let filteredData;
      switch (filterType) {
        case "age":
          filteredData = await filterProductsByAge(parseInt(value));
          break;
        case "brand":
          filteredData = await filterProductsByBrand(value);
          break;
        case "origin":
          filteredData = await filterProductsByOrigin(value);
          break;
        case "size":
          filteredData = await filterProductsBySize(value);
          break;
        case "capacity":
          filteredData = await filterProductsByCapacity(parseInt(value));
          break;
        default:
          filteredData = [];
      }
      setFilteredProducts(filteredData);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  const togglePriceFilter = () => setShowPriceFilter(!showPriceFilter);
  const toggleCapacityFilter = () => setShowCapacityFilter(!showCapacityFilter);
  const toggleOriginFilter = () => setShowOriginFilter(!showOriginFilter);
  const toggleBrandFilter = () => setShowBrandFilter(!showBrandFilter);
  const toggleAgeFilter = () => setShowAgeFilter(!showAgeFilter);
  const toggleSizeFilter = () => setShowSizeFilter(!showSizeFilter);

  const origin = [
    { name: "Ba Lan", value: "Ba Lan" },
    { name: "Hàn Quốc", value: "Hàn Quốc" },
    { name: "Mỹ ", value: "Mỹ" },
    { name: "Nhật Bản", value: "Nhật Bản" },
    { name: "Thụy Điển", value: "Thụy Điển" },
    { name: "Thụy Sỹ", value: "Thụy Sỹ" },
    { name: "Trung Quốc ", value: "Trung Quốc" },
    { name: "Úc", value: "Úc" },
    { name: "Pháp", value: "Pháp" },
    { name: "Việt Nam ", value: "Việt Nam" },
  ];

  const brand = [
    { name: "Nestle", value: "Nestle" },
    { name: "Vinamilk", value: "Vinamilk" },
    { name: "Morinaga", value: "Morinaga" },
    { name: "Glico", value: "Glico" },
    { name: "Nuvita", value: "Nuvita" },
    { name: "Abbot", value: "Abbot" },
    { name: "Semper", value: "Semper" },
    { name: "Aptamilk", value: "Aptamilk" },
  ];

  const age = [
    { name: "0-6M", value: "0" },
    { name: "3M+", value: "3" },
    { name: "3-6M", value: "3" },
    { name: "7-10M", value: "7" },
    { name: "1Y+", value: "12" },
    { name: "3Y+", value: "36" },
  ];

  const size = [
    { name: "S38", value: "S38" },
    { name: "S40", value: "S40" },
    { name: "S42", value: "S42" },
    { name: "S", value: "S" },
    { name: "M", value: "M" },
    { name: "L", value: "L" },
    { name: "XL", value: "XL" },
    { name: "XXL", value: "XXL" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        const shuffled = productsData.sort(() => 0.5 - Math.random());
        const discountedItems = productsData.filter(
          (item) => item.discount > 0
        );
        console.log(discountedItems);
        setProductsHot(shuffled.slice(0, 4));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center p-4 bg-gray-100 ">
        <div className="w-11/12 p-4 bg-white border-b rounded-t-lg">
          <h1 className="text-xl font-bold">Mẹ bầu và sau sinh</h1>
          <p className="mt-2 text-gray-600">
            Kidsplaza cung cấp đầy đủ các sản phẩm cần thiết cho mẹ bầu và sau
            sinh như sữa bầu, quần áo bầu, vitamin, máy hút sữa...giúp việc mang
            thai và nuôi con trở nên đơn giản hơn.
          </p>
        </div>
        <div className="w-11/12 p-4 bg-white rounded-b-lg shadow-md">
          <img
            src="https://cdn-v2.kidsplaza.vn/media/catalog/category/banner_danh_m_c_sap_sinh_t5_1.png"
            alt="Banner"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-around mt-6">
            <div className="w-1/5 text-center">
              <img
                src="https://cdn-v2.kidsplaza.vn/media/catalog/category/sua-cho-me-bau.jpg"
                alt="Product 1"
                className="mx-auto"
              />
              <p className="mt-2">Sữa cho mẹ bầu</p>
            </div>
            <div className="w-1/5 text-center">
              <img
                src="https://cdn-v2.kidsplaza.vn/media/catalog/category/bo-nao-healthy-care-ginkgo-biloba-2000-12y-1_1.png"
                alt="Product 2"
                className="mx-auto"
              />
              <p className="mt-2">Vitamin cho mẹ bầu và mẹ sau sinh</p>
            </div>
            <div className="w-1/5 text-center">
              <img
                src="https://cdn-v2.kidsplaza.vn/media/catalog/category/bo-quan-ao-sau-sinh-cho-me-in-tim-co-ren-xanh-m23-1.png"
                alt="Product 3"
                className="mx-auto"
              />
              <p className="mt-2">Quần áo mẹ bầu và sau sinh</p>
            </div>
            <div className="w-1/5 text-center">
              <img
                src="https://cdn-v2.kidsplaza.vn/media/catalog/category/may-hut-sua-cho-be.png"
                alt="Product 4"
                className="mx-auto"
              />
              <p className="mt-2">Máy hút sữa</p>
            </div>
            <div className="w-1/5 text-center">
              <img
                src="https://cdn-v2.kidsplaza.vn/media/catalog/category/tui-tru-sua-sunmum-50pcs-mau-moi-1.png"
                alt="Product 5"
                className="mx-auto"
              />
              <p className="mt-2">Túi trữ sữa</p>
            </div>
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
        <div className="flex w-11/12 bg-gray-100">
          <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Bộ lọc tìm kiếm</h2>
            {/* <div className="mb-4">
              <h3
                className="mb-3 text-xl font-bold cursor-pointer"
                onClick={togglePriceFilter}
              >
                Khoảng giá
              </h3>
              {showPriceFilter && (
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Input
                      type="text"
                      placeholder="Từ"
                      className="w-1/2 p-2 mr-2 border rounded"
                    />
                    <Input
                      type="text"
                      placeholder="Đến"
                      className="w-1/2 p-2 border rounded"
                    />
                    <Button className="w-full px-4 py-2 m-2 text-white bg-blue-500 rounded">
                      Áp dụng
                    </Button>
                  </div>
                </div>
              )}
            </div> */}
            <div className="mb-4">
              <h3
                className="mb-4 text-xl font-bold cursor-pointer"
                onClick={toggleCapacityFilter}
              >
                Dung tích
              </h3>
              {showCapacityFilter && (
                <div className="grid grid-cols-2 gap-3">
                  {[
                    25, 60, 100, 125, 150, 160, 180, 190, 200, 210, 250, 550,
                    600, 1000,
                  ].map((size) => (
                    <Checkbox
                      key={size}
                      onChange={(e) =>
                        handleFilterChange("capacity", size, e.target.checked)
                      }
                    >
                      {size} ml
                    </Checkbox>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4">
              <h3
                className="mb-4 text-xl font-bold cursor-pointer"
                onClick={toggleOriginFilter}
              >
                Xuất xứ
              </h3>
              {showOriginFilter && (
                <div className="grid grid-cols-1 gap-3">
                  {origin.map((origin, index) => (
                    <Checkbox
                      key={index}
                      onChange={(e) =>
                        handleFilterChange(
                          "origin",
                          origin.value,
                          e.target.checked
                        )
                      }
                    >
                      {origin.name}
                    </Checkbox>
                  ))}
                </div>
              )}
            </div>
            <h3
              className="mb-4 text-xl font-bold cursor-pointer"
              onClick={toggleBrandFilter}
            >
              Thương hiệu
            </h3>
            {showBrandFilter && (
              <div className="grid grid-cols-1 gap-3 mb-4 ">
                {brand.map((brand, index) => (
                  <Checkbox
                    key={index}
                    onChange={(e) =>
                      handleFilterChange("brand", brand.value, e.target.checked)
                    }
                  >
                    {brand.name}
                  </Checkbox>
                ))}
              </div>
            )}
            <h3
              className="mb-4 text-xl font-bold cursor-pointer"
              onClick={toggleAgeFilter}
            >
              Độ tuổi
            </h3>
            {showAgeFilter && (
              <div className="grid grid-cols-1 gap-3">
                {age.map((age, index) => (
                  <Checkbox
                    key={index}
                    onChange={(e) =>
                      handleFilterChange("age", age.value, e.target.checked)
                    }
                  >
                    {age.name}
                  </Checkbox>
                ))}
              </div>
            )}
            <h3
              className="mb-4 text-xl font-bold cursor-pointer"
              onClick={toggleSizeFilter}
            >
              Kích thước
            </h3>
            {showSizeFilter && (
              <div className="grid grid-cols-1 gap-3">
                {size.map((size, index) => (
                  <Checkbox
                    key={index}
                    onChange={(e) =>
                      handleFilterChange("size", size.value, e.target.checked)
                    }
                  >
                    {size.name}
                  </Checkbox>
                ))}
              </div>
            )}
          </div>

          <div className="w-3/4 ml-4">
            <div className="flex items-center justify-between p-4 bg-white border-b rounded-t-lg">
              <h1 className="text-xl font-bold">Tất cả sản phẩm</h1>
              <div className="flex items-center space-x-4">
                <p>Sắp xếp theo</p>
                {[
                  "Vị trí",
                  "Bán chạy",
                  "Giá tăng dần",
                  "Nổi bật",
                  "Mới nhất",
                ].map((buttonName) => (
                  <Button
                    key={buttonName}
                    onClick={() => handleButtonClick(buttonName)}
                    style={{
                      backgroundColor:
                        selectedButton === buttonName ? "#1890ff" : "#f0f0f0",
                      color: selectedButton === buttonName ? "#fff" : "#000",
                      borderRadius: "4px",
                      padding: "4px 16px",
                    }}
                  >
                    {buttonName}
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white rounded-b-lg shadow-md">
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-4 gap-4">
                  {currentProducts.map((product) => (
                    <Link
                      to={`/product-detail/${product.id}`}
                      key={product.id}
                      className="relative p-4 text-center bg-gray-100 rounded-lg shadow-md"
                    >
                      {product.discount > 0 ? (
                        <div className="absolute px-4 py-5 font-bold text-yellow-300 bg-red-500 rounded-full right-5">
                          -<span>{product.discount}</span>%
                        </div>
                      ) : (
                        ""
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="mx-auto"
                      />
                      <p className="mt-2">{product.name}</p>
                      {product.discount > 0 ? (
                        <div className="gap-4 mt-2 text-xl font-bold text-red-500">
                          <s>{product.price} VND</s>{" "}
                          <span>{product.onDiscountPrice}</span> VND
                        </div>
                      ) : (
                        <div className="mt-2 text-xl font-bold text-red-500">
                          {product.price} VND
                        </div>
                      )}

                      <div className="flex items-center justify-center mt-2">
                        <Rate disabled defaultValue={product.rating} />
                        <span className="ml-2 text-gray-500">
                          {product.reviews}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>Không tìm thấy sản phẩm phù hợp</p>
              )}
              <div className="flex items-start justify-center w-full my-10">
                <Pagination
                  current={currentPage}
                  onChange={paginate}
                  total={products.length}
                  pageSize={productsPerPage}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
        <Information />
      </div>
    </>
  );
}
