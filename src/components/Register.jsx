import React, { useState } from "react";
import { Input, Button, DatePicker, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api-service";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

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
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        fullname,
        email,
        id: res.user.uid,
        blocked: [],
      });

      toast.success("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Đăng ký thất bại");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Đăng Ký</h2>
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
          className="w-full mb-4"
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
          className="w-full py-2 font-bold text-white bg-blue-500 rounded"
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
