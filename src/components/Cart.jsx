import { useState } from "react";
import { Button, InputNumber, Input, Card } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../features/cart/CartSlice";

export default function Cart() {
  const [discountCode, setDiscountCode] = useState("");
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (value, itemId) => {
    dispatch(updateQuantity({ id: itemId, quantity: value }));
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    console.log("Discount Code:", discountCode);
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center w-11/12 mx-auto my-10">
      <div className="flex w-11/12 my-10 space-x-4 bg-white-100">
        <Card className="w-full p-4 bg-white rounded-lg shadow-md md:w-2/3">
          <h2 className="mb-4 text-xl font-bold text-blue-500">Giỏ hàng</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div className="flex flex-col">
                <span className="font-bold text-blue-500">Sản phẩm</span>
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-20 h-20 mr-4"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-500">Giá</span>
                <p className="mr-4 font-bold text-red-500">{item.price} VND</p>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-500">Số lượng</span>
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) => handleQuantityChange(value, item.id)}
                  className="mr-4"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-blue-500">Tạm tính</span>
                <p className="mr-4 font-bold text-red-500">
                  {(item.price * item.quantity).toLocaleString("vi-VN")} VND
                </p>
              </div>
              <Button
                type="link"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Xóa
              </Button>
            </div>
          ))}
        </Card>
        <div className="flex flex-col space-y-4">
          <Card className="w-full p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-bold">Mã giảm giá</h2>
            <Input
              placeholder="Nhập mã"
              value={discountCode}
              onChange={handleDiscountCodeChange}
              className="mb-2"
              suffix={
                <Button type="primary" onClick={handleApplyDiscount}>
                  Áp dụng
                </Button>
              }
            />
            <Button type="default" className="w-full mb-4">
              CHỌN MÃ
            </Button>
          </Card>
          <Card className="w-full p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>Tổng giá sản phẩm</span>
                <span>{getTotalPrice().toLocaleString("vi-VN")}đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển</span>
                <span>0đ</span>
              </div>
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span className="font-bold text-red-500">
                  {getTotalPrice().toLocaleString("vi-VN")}đ
                </span>
              </div>
              <Link to="/payment">
                <Button
                  to="/payment"
                  type="primary"
                  onClick={handleCheckout}
                  className="w-full"
                >
                  Tiến hành thanh toán
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
