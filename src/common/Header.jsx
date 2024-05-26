import React from "react";
import { GiPositionMarker } from "react-icons/gi";
import { IoStorefront } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const titleList = [
  {
    name: "MẸ BẦU VÀ SAU SINH",
  },
  {
    name: "SỮA CHO BÉ",
  },
  {
    name: "BÉ ĂN DẶM",
  },
  {
    name: "BÌNH SỮA VÀ PHỤ KIỆN",
  },
  {
    name: "COMBO TIẾT KIỆM",
  },
  {
    name: "KHUYẾN MÃI HOT",
  },
];
const Header = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="flex items-center justify-between mx-20 mt-2">
          <div className="">
            <div className="flex items-center gap-2">
              <GiPositionMarker size={30} color="blue" />
              <span>Xem tồn kho</span>
              <span className="font-bold text-blue-800">Miền Nam</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <IoStorefront size={30} color="blue" />
              <span>Hệ thống cửa hàng</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneSquareAlt size={30} color="blue" />
              <span>1900 8198</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[154px] bg-[#FFBE31] flex justify-center mt-2">
          <div>
            <div className="w-[1600px] h-[100px] bg-[#83B4FF] rounded-bl-3xl rounded-br-3xl">
              <div className="flex items-center gap-5 py-3">
                <img
                  src="https://th.bing.com/th/id/R.584ee4cdabe1b2be18bd905ed0c55fd3?rik=TxKHudR7n6dqZQ&riu=http%3a%2f%2fimages.emojiterra.com%2fgoogle%2f512px%2f1f37c.png&ehk=7mwzt69NrVYvKtaLI6H95e6xE1emg4teKLzyxseWBdw%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[120px] h-[77px]"
                />
                <div className="relative w-[850px]">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    className="w-full py-4 pl-10 pr-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosPaper size={30} color="white" />
                  <span className="font-semibold">Đơn hàng</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <FaCircleUser size={30} color="white" />
                  <button className="font-semibold">Đăng nhập</button>
                </div> */}
                <div className="flex items-center gap-3">
                  <FaCircleUser size={30} color="white" />
                  <Link to="/login">
                    <button className="font-semibold">Đăng nhập</button>
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <RiShoppingBasketFill size={30} color="white" />
                  <span className="font-semibold">Giỏ hàng</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 my-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ebdf/2a12/667ef2302e606e963bb47a314741cef7?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LIX5Iowj6BjkcSQGlbqzTAFE3X6gM2VD6EAAcz~ZGSdFodm2fjstFHIgWkcx8aGUS0xI7iavClIhIe~59ux9brv6y7nqmnGjL24Gh54JSLTKG7DkCpm5T5rXq7OJtcCzladsfTf9qXZCM0i4Lj9tE2DFs6txp1Q4doH2lnCOievieSoKLsX2S9XEwRnpoQ2DhgKm4KItDhTlSNUT9sMvRyzm521wjy4tUhYf7W9ZJhWunsukjdNyrkwYvNc~iBW4ygy34FcCocaPmHeDixf-TYRe8R--k2dtjIz2AJPUEzWnYJmX6DId7JEBBWlNctVpMqegwW-Mqq7ab30GN1HKvw__"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
                <div className="flex items-center gap-36">
                  {titleList.map((item, index) => (
                    <p key={index} className="font-semibold text-blue-800">
                      {item.name}
                    </p>
                  ))}
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b30c/719f/97e92469779596f9ac2ea9640d171553?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdO7-2BZwF0vqeWxsp--wKRcC02cppmoi-WgxNg0H2OIEh3CKh5G-fb15SZkoQ6jX6KIJMYeHOgA6bYZU5Qt-5a8c22QoUv0MCDnjw1DvwZRgB0DN5VNYRxS8qpKyr3g38KsIA9CJpz6UKZzuVrcAvj7-oyMRvjBepUc1LFZS~dFvSwMvngiQM~~0Yrr4YIjJaOkA01mMSMJL0hW3cR6Q8MqoBNvEc-I6U4z3iectwtiKhcrdEGsLhQi2GxR1atv1E23Xwz7REQzFPZ1k-3lygGRygXZkmOGAQCKaPwemgcc9Gi2QcNmkCYwmw-AhLHfguc8W1HbUh8EfN-hNS9MRg__"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      <footer className="py-5 text-center bg-[#00BAF2] mt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-3">Bách Hoá Xanh</h2>
              <p>© 2021 Bách Hoá Xanh. All rights reserved.</p>
              <ul className="mt-2 list-inline">
                <li className="list-inline-item">
                  <a href="#">Privacy</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;
