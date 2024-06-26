import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { getAccountById, updateAccount } from "../services/api-service";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const accountId = localStorage.getItem("accountId");
      if (!accessToken || !accountId) {
        message.error("No access token found. Please log in.");
        navigate("/login");
        return;
      }

      try {
        const data = await getAccountById(accountId);
        setUser({
          id: data.id,
          fullName: data.fullname,
          phone_number: data.phone,
          email: data.email,
        });
        form.setFieldsValue({
          fullName: data.fullname,
          phone_number: data.phone,
          email: data.email,
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while fetching user data");
      }
    };

    fetchUserData();
  }, [form, navigate]);

  const handleProfileSubmit = async (values) => {
    const accountId = user.id; // Ensure the user ID is stored in the user state
    try {
      const updatedData = { id: accountId, ...values };
      const response = await updateAccount(updatedData);

      if (response) {
        message.success("Profile updated successfully");
        // Update local storage
        localStorage.setItem("user", JSON.stringify({ name: values.fullName }));
        localStorage.setItem("phone_number", values.phone_number);
        localStorage.setItem("email", values.email);
        document.location.reload();
      } else {
        message.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating profile");
    }
  };

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        localStorage.clear();
        navigate("/");
        window.location.reload();
      } else {
        message.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging out");
    }
  };

  return (
    <Card className="container mx-auto my-20">
      <h1 className="flex items-center justify-center text-2xl font-bold w-full mb-10">
        User Profile
      </h1>
      <div className="flex justify-center w-full h-auto space-x-20">
        <img
          src="../assets/images/user.png"
          className="rounded-full w-72"
          alt="User"
        />
        <Form form={form} initialValues={user} onFinish={handleProfileSubmit}>
          <Form.Item name="fullName" label="Name">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="phone_number" label="Phone">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mt-4">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="flex justify-center w-full h-auto">
        <Button
          type="primary"
          className="mt-4 bg-red-500 text-white font-bold py-2 rounded"
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
    </Card>
  );
};

export default UserProfile;
