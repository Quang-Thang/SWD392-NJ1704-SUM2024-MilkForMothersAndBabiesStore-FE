import { useState, useEffect } from "react";
import {
  Button,
  InputNumber,
  Select,
  Divider,
  Tabs,
  Row,
  Col,
  Rate,
  Progress,
  Input,
  Tag,
} from "antd";
import { StarOutlined } from "@mui/icons-material";
import Information from "./Information";
import { useParams } from "react-router-dom";
import {
  getProductById,
  addToCart,
  getUserCart,
  updateCart,
} from "../services/api-service";
import { toast } from "react-toastify";
import axios from "axios";

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

export default function ProductDetail() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("TP. Hồ Chí Minh");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const { id } = useParams();
  const [ratingBreakdown, setRatingBreakdown] = useState([]);
  const [comments, setComments] = useState();
  const [role, setRole] = useState("");
  const [oneStar, setOneStar] = useState();
  const [twoStar, setTwoStar] = useState();
  const [threeStar, setThreeStar] = useState();
  const [fourStar, setFourStar] = useState();
  const [fiveStar, setFiveStar] = useState();
  const [soldQuantity, setSoldQuantity] = useState();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log("Name:", name);
    console.log("Comment:", comment);
  };

  const handleAddToCart = async () => {
    const accountId = localStorage.getItem("accountId");
    try {
      await addToCart(accountId, product.id, quantity, product.price);
      toast.success("Thêm sản phẩm vào giỏ hàng thành công");
      setIsInCart(true); // Cập nhật trạng thái isInCart
    } catch (error) {
      if (error.response && error.response.status === 400) {
        try {
          await updateCart([
            {
              id: 0,
              accountId,
              productId: product.id,
              quantity,
              price: product.price,
            },
          ]);
          toast.success("Thêm sản phẩm vào giỏ hàng hiện tại thành công");
          setIsInCart(true); // Cập nhật trạng thái isInCart
        } catch (updateError) {
          console.error("Error updating cart:", updateError);
          toast.error("Cập nhật giỏ hàng thất bại");
        }
      } else {
        console.error("Error adding to cart:", error);
        toast.error("Thêm sản phẩm vào giỏ hàng thất bại");
      }
    }
  };

  const getComments = async () => {
    try {
      const res = await axios.get(
        `https://swdprojectapi.azurewebsites.net/api/comments/get-comments-by-product-id/${id}`
      );
      setComments(res.data.data);
      setOneStar(res.data.data.filter((item) => item.rate === 1));
      setTwoStar(res.data.data.filter((item) => item.rate === 2));
      setThreeStar(res.data.data.filter((item) => item.rate === 3));
      setFourStar(res.data.data.filter((item) => item.rate === 4));
      setFiveStar(res.data.data.filter((item) => item.rate === 5));
      console.log(fiveStar.length);
    } catch (error) {
      console.log("Error at comments: ", error);
    }
  };

  const getUserInfo = async () => {
    try {
      const userId = localStorage.getItem("accountId");
      const res = await axios.get(
        `https://swdprojectapi.azurewebsites.net/api/accounts/get-account-by-id?accountId=${userId}`
      );
      console.log(res.data.role);
      setRole(res.data.role);
    } catch (error) {
      console.log("Error at fetch user info: ", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`);
        const data = await getProductById(id);
        setSoldQuantity(data.quantitySold);
        setProduct(data);
        setRatingBreakdown([
          data.ratingBreakdown?.fiveStar,
          data.ratingBreakdown?.fourStar,
          data.ratingBreakdown?.threeStar,
          data.ratingBreakdown?.twoStar,
          data.ratingBreakdown?.oneStar,
        ]);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
      }
    };

    const checkProductInCart = async () => {
      try {
        const accountId = localStorage.getItem("accountId"); // Assuming accountId is stored in localStorage
        if (!accountId) {
          throw new Error("User not authenticated");
        }
        const cartItems = await getUserCart(accountId);
        const isProductInCart = cartItems.some(
          (item) => item.productId === parseInt(id)
        );
        setIsInCart(isProductInCart);
      } catch (error) {
        console.error("Error checking cart:", error.message);
      }
    };

    fetchProduct();
    checkProductInCart();
    getComments();
    getUserInfo();
  }, [id]);

  if (error) {
    return <div className="text-red-500">Lỗi: {error}</div>;
  }

  if (!product) {
    return <div>Đang tải...</div>;
  }

  const shortDescription = (description) => {
    return description?.length > 300
      ? description.substring(0, 300) + "..."
      : description;
  };

  const fullDescription = (description) => {
    return description;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(price)
      .replace("₫", " VNĐ");
  };

  const handleCreateReview = async () => {
    try {
      const accountId = localStorage.getItem("accountId");
      const now = new Date();

      // Example usage
      const res = await axios.post(
        "https://swdprojectapi.azurewebsites.net/api/comments/create-comment",
        {
          userId: accountId,
          productId: product.id,
          content: review,
          commentDate: now,
          rate: rating,
          status: true,
        }
      );
      toast.success("Gửi đánh giá thành công");
      setReview("");
      console.log("Rate success: ", res);
    } catch (error) {
      console.log("Bug at rating", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `https://swdprojectapi.azurewebsites.net/api/comments/delete-comment?id=${commentId}`
      );
      toast.success("Xóa bình luận thành công");
      console.log(commentId);
    } catch (error) {
      console.log("Error at delete comment: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-gray-100">
      <div className="w-11/12 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-2/3">
            <img
              src={product?.image}
              alt="Sản phẩm"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-2/3 pl-8">
            <h1 className="text-2xl font-bold">{product?.name} (New)</h1>
            <p className="text-gray-500">Thương hiệu: {product?.brand}</p>
            <Divider />
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-gray-500">Giá bán tại: TP. HCM</p>
                {product?.discount > 0 ? (
                  <p className="text-2xl font-bold text-red-500">
                    <s className="mr-5">{formatPrice(product?.price)}</s>
                    {formatPrice(product?.onDiscountPrice)}
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-red-500">
                    {formatPrice(product?.price)}
                  </p>
                )}
              </div>
            </div>
            <Button
              type="primary"
              className="w-full py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              size="large"
            >
              FLASH SALE THÁNG 5
            </Button>
            <div className="flex items-center mt-4">
              <img
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png"
                alt="VNPAY"
                className="w-16 h-12 mr-4"
              />
              <div>
                <p className="text-gray-500">Ưu đãi giảm thêm qua VNPAY</p>
                <p className="text-blue-500">
                  Nhập mã VNPAYKID51 - Giảm thêm 15K - Áp dụng đơn hàng từ 400K
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Số lượng</p>
              <div className="flex items-center">
                <Button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="mx-2"
                />
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
              </div>
              <Button
                type="primary"
                className="w-full py-2 mt-4 font-bold text-white bg-orange-500 rounded hover:bg-orange-700"
                size="large"
                onClick={handleAddToCart}
                disabled={isInCart}
              >
                {isInCart
                  ? "Sản phẩm đã có trong giỏ hàng"
                  : "Thêm vào giỏ hàng"}
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Vận chuyển đến: {location}</p>
              <Select
                defaultValue={location}
                onChange={handleLocationChange}
                className="w-full"
              >
                <Option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</Option>
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
              </Select>
              <p className="mt-2 text-green-500">Freeship 7km</p>
            </div>
            <div className="mt-4 text-red-500">
              <p>
                <strong>Đã bán: </strong> {soldQuantity} sản phẩm
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/4 pl-8">
            <img
              src="https://cdn-v2.kidsplaza.vn/media/wysiwyg/Landing-2024/5/tai-app/186x186-TAI-APP-T5.png"
              alt="Voucher"
              className="w-full mb-4 rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn-v2.kidsplaza.vn/media/catalog/Group_15.png"
                  alt="Chính sách đổi trả"
                  className="w-6 h-6 mr-2"
                />
                <p className="text-gray-500">Đổi trả hàng miễn phí 15 ngày</p>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn-v2.kidsplaza.vn/media/catalog/Group_15018.png"
                  alt="Bảo hành"
                  className="w-6 h-6 mr-2"
                />
                <p className="text-gray-500">Bảo hành chính hãng 12 tháng</p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://cdn-v2.kidsplaza.vn/media/catalog/Group_15019.png"
                  alt="Freeship"
                  className="w-6 h-6 mr-2"
                />
                <p className="text-gray-500">Freeship dưới 7km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 p-8 mx-auto bg-white rounded-lg shadow-lg">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Mô tả" key="1">
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <h2 className="text-xl font-bold text-blue-600">
                  {product?.name} (New) cho bé hệ miễn dịch khỏe mạnh
                </h2>
                <p className="mt-4">
                  {isExpanded
                    ? fullDescription(product?.description)
                    : shortDescription(product?.description)}
                </p>
                <Button
                  type="primary"
                  className="mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={toggleReadMore}
                >
                  {isExpanded ? "Thu gọn" : "Xem thêm"}
                </Button>
              </Col>
              <Col span={8}>
                <h3 className="text-lg font-bold">Thông tin chi tiết</h3>
                <p className="mt-4">
                  <strong>Xuất xứ: </strong>
                  {product.origin}
                </p>
                <p className="mt-4">
                  <strong>Thương hiệu: </strong>
                  {product.brand}
                </p>
                <p className="mt-4">
                  <strong>Độ tuổi: </strong>
                  {product.age} tuổi
                </p>
                <p className="mt-4">
                  <strong>Kích thước: </strong>
                  {product.size}
                </p>
                <p className="mt-4">
                  <strong>Dung tích: </strong>
                  {product.capacity} ml
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Đánh giá" key="2">
            <div className="flex items-center justify-around my-10 space-y-2">
              <div className="text-2xl font-bold">
                {product.rating} <Rate disabled defaultValue={product.rating} />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-4">
                  <Rate disabled defaultValue={5} />{" "}
                  {fiveStar?.length != 0 ? fiveStar?.length : "0"} đánh giá
                </div>
                <div className="flex items-center gap-4">
                  <Rate disabled defaultValue={4} />{" "}
                  {fourStar?.length != null ? fourStar?.length : "0"} đánh giá
                </div>
                <div className="flex items-center gap-4">
                  <Rate disabled defaultValue={3} />{" "}
                  {threeStar?.length != null ? threeStar?.length : "0"} đánh giá
                </div>
                <div className="flex items-center gap-4">
                  <Rate disabled defaultValue={2} />{" "}
                  {twoStar?.length != null ? twoStar?.length : "0"} đánh giá
                </div>
                <div className="flex items-center gap-4">
                  <Rate disabled defaultValue={1} />{" "}
                  {oneStar?.length != null ? oneStar?.length : "0"} đánh giá
                </div>
                {/* {[5, 4, 3, 2, 1].map((star, index) => (
                  <div key={index} className="flex items-center space-x-2 w-96">
                    <div className="w-24">
                      {star} <StarOutlined />
                    </div>
                    <Progress
                      percent={
                        (ratingBreakdown[index] /
                          ratingBreakdown.reduce(
                            (acc, count) => acc + count,
                            0
                          )) *
                        100
                      }
                      showInfo={false}
                    />
                    <div className="w-full text-sm"> Đánh giá</div>
                  </div>
                ))} */}
              </div>
            </div>
            {role != null && role == "member" ? (
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <h3 className="text-lg font-bold">Đánh giá sản phẩm</h3>
                  <Rate value={rating} onChange={handleRatingChange} />
                  <p className="mt-4">
                    <strong>Đánh giá của bạn:</strong> {rating}/5
                  </p>
                  <Progress percent={rating * 20} showInfo={false} />
                </Col>
                <Col span={12}>
                  <h3 className="text-lg font-bold">Viết đánh giá</h3>
                  <TextArea
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Viết đánh giá của bạn..."
                    rows={4}
                  />
                  <Button
                    type="primary"
                    className="py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    size="large"
                    onClick={handleCreateReview}
                  >
                    Gửi đánh giá
                  </Button>
                </Col>
              </Row>
            ) : (
              ""
            )}

            <div className="space-y-6">
              <Divider />
              <div className="mb-4">
                <h2 className="mb-4 text-xl font-semibold">Lọc xem theo</h2>
                <div className="flex space-x-2">
                  {["Tất cả", "5 sao", "4 sao", "3 sao", "2 sao", "1 sao"].map(
                    (item) => (
                      <Tag
                        key={item}
                        color={filter === item ? "blue" : "default"}
                        onClick={() => handleFilterChange(item)}
                        className="cursor-pointer"
                      >
                        {item}
                      </Tag>
                    )
                  )}
                </div>
              </div>
              <Divider />
              <h3 className="space-x-4 text-lg font-bold">
                Đánh giá của người dùng
              </h3>
              {comments != null
                ? comments.map((item, index) => (
                    <div key={index} className="mt-2">
                      <div className="flex items-center justify-between">
                        <div className="">
                          <span className="font-bold">{item.username}</span>
                          <Rate
                            disabled
                            defaultValue={item.rate}
                            className="ml-2"
                          />
                          <p className="text-gray-500">{item.content}</p>
                        </div>
                        {/* <p className="text-sm text-gray-400">
                        0 lượt thích 04-07-2023
                      </p> */}
                        {role != null && role === "staff" ? (
                          <button
                            onClick={() => handleDeleteComment(item.id)}
                            className="px-4 py-2 bg-red-400 rounded-lg"
                          >
                            Xóa bình luận
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                : "Hiện tại chưa có đánh giá cho sản phẩm này"}
            </div>
          </TabPane>
          <TabPane tab="Mẹ hỏi / Shop trả lời" key="3">
            <div className="flex flex-col items-center w-1/2 space-y-4">
              <Input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Họ và tên"
                className="w-full h-12"
              />
              <TextArea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Mời bạn để lại bình luận..."
                rows={4}
                className="w-full"
              />
              <Button
                type="primary"
                className="w-full h-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={handleSubmitComment}
              >
                Gửi bình luận
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
      <div className="w-11/12 my-10 bg-white-100">
        <div className="flex items-center justify-between p-4 bg-white border-b rounded-t-lg">
          <h1 className="text-2xl font-bold">SẢN PHẨM CÓ THỂ BẠN QUAN TÂM</h1>
        </div>
        <div className="p-4 bg-white rounded-b-lg shadow-md">
          <div className="flex justify-around mt-6">
            {[1, 2, 3, 4].map((productIndex) => (
              <div
                key={productIndex}
                className="w-1/5 p-4 text-center bg-gray-100 rounded-lg shadow-md"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt={`Product ${productIndex}`}
                  className="mx-auto"
                />
                <p className="mt-2">
                  Sữa Healthy Care số 3 (Úc) Toddler 900g dành cho trẻ 1
                </p>
                <div className="mt-2 text-xl font-bold text-red-500">
                  {formatPrice(465000 * productIndex)}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-gray-500">(1101)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Information />
    </div>
  );
}
