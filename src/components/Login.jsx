import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/api-service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      if (data && data.accessToken) {
        // Kiểm tra nếu có accessToken trong phản hồi
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify({ name: data.fullname }));
        localStorage.setItem("role", JSON.stringify({ name: data.role }));
        localStorage.setItem("accountId", data.id);
        var role = data.role;
        switch (role) {
          case "member":
            message.success("Login successful");
            navigate("/");
            window.location.reload();
            break;
          case "staff":
            message.success("Login successful");
            navigate("/staff/dashboard");
            break;
          case "admin":
            message.success("Login successful");
            navigate("/admin/dashboard");
            break;
          default:
            message.error("Unknown role");
            break;
        }
      } else {
        message.error("Login failed: No access token received");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Wrong email or password");
    }
  };

  return (
    <div className="px-20 my-10 bg-white">
      <div className="flex justify-center items-center">
        <img
          className="absolute z-0 top-[180px]"
          src="./public/assets/images/image 83.png"
          alt="login"
        />
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
        <div className="bg-white rounded-lg shadow-lg w-1/3 z-10">
          <div className="flex">
            <div className="w-1/2 text-center py-6 bg-yellow-400 rounded-s-md">
              <h2 className="text-2xl font-bold text-blue-900">ĐĂNG NHẬP</h2>
            </div>
            <Link
              to="/register"
              className="w-1/2 text-center py-6 bg-gray-200 rounded-e-md"
            >
              <h2 className="text-2xl font-bold text-blue-900">ĐĂNG KÝ</h2>
            </Link>
          </div>
          <div className="mx-12 my-8 w-5/6">
            <Input
              className="mb-4"
              placeholder="Email"
              type="email"
              size="large"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              className="mb-4"
              placeholder="Mật khẩu*"
              size="large"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center mb-4">
              <Button type="link" className="p-0 text-black font-bold">
                Lưu thông tin đăng nhập
              </Button>
              <Button type="link" className="p-0 text-black font-bold">
                Quên mật khẩu?
              </Button>
            </div>
            <Button
              type="primary"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded"
              size="large"
              onClick={handleLogin}
            >
              ĐĂNG NHẬP
            </Button>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Hoặc đăng nhập bằng</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Button
              type="primary"
              className="w-full bg-[#D54B3D] text-white font-bold py-2 rounded"
              size="large"
            >
              GOOGLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
