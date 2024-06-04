// import React from "react";
import { Input, Button } from "antd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="flex  justify-between bg-white-100 mx-20">
        <span className="flex justify-between space-x-2">
          <LocationOnIcon />
          Xem tồn kho <strong className="text-blue-600">Miền Nam</strong>
        </span>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <StorefrontOutlinedIcon />
            <span>Hệ thống cửa hàng</span>
          </div>
          <span>
            <LocalPhoneIcon />
            1900 8198
          </span>
        </div>
      </div>

      <div className="bg-[#FFBE51] w-full">
        <div className="flex items-center justify-between mx-20 bg-[#83B4FF] rounded-b-[40px] px-2">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-20 w-fit"
            />
          </Link>
          <Input
            placeholder="Tìm kiếm sản phẩm"
            prefix={<SearchIcon />}
            className="w-96"
          />

          <Button type="text" icon={<ListAltOutlinedIcon />} className="mr-2">
            Đơn hàng
          </Button>
          <Link to="/login">
            <Button
              type="text"
              icon={<AccountCircleOutlinedIcon />}
              className="mr-2"
            >
              Đăng nhập
            </Button>
          </Link>

          <Link to="/cart">
            <Button type="text" icon={<ShoppingCartIcon />}>
              Giỏ hàng
            </Button>
          </Link>
        </div>
        <div className="flex justify-between items-center mx-20">
          <Link to="/list-product">
            <Button type="text">Mẹ bầu và sau sinh</Button>
          </Link>
          <Button type="text">Sữa cho bé</Button>
          <Button type="text">Bé ăn dặm</Button>
          <Button type="text">Bình sữa và phụ kiện</Button>
          <Button type="text">Combo tiết kiệm</Button>
          <Button type="text">Khuyến mãi hot</Button>
        </div>
      </div>
    </header>
  );
}
