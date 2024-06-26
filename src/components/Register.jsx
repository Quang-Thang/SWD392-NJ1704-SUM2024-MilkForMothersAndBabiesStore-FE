import React, { useState } from "react";
import { Input, Button, DatePicker, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api-service";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState(true);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register({
        email,
        password,
        fullname,
        birthday,
        address,
        gender,
        phone,
      });
      toast.success("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Đăng ký thất bại");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
        <h2 className="text-2xl font-bold text-center mb-4">Đăng Ký</h2>
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
          placeholder="Mật khẩu"
          size="large"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="mb-4"
          placeholder="Họ và tên"
          size="large"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <DatePicker
          className="mb-4 w-full"
          placeholder="Ngày sinh"
          size="large"
          value={birthday}
          onChange={(date) => setBirthday(date)}
        />
        <Input
          className="mb-4"
          placeholder="Địa chỉ"
          size="large"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Radio.Group
          className="mb-4"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <Radio value={true}>Nam</Radio>
          <Radio value={false}>Nữ</Radio>
        </Radio.Group>
        <Input
          className="mb-4"
          placeholder="Số điện thoại"
          size="large"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          type="primary"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded"
          size="large"
          onClick={handleRegister}
        >
          Đăng Ký
        </Button>
      </div>
    </div>
  );
};

export default Register;
