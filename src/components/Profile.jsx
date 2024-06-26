<<<<<<< HEAD
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

=======
import { useState } from "react";
import { Form, Input, Button, Popover, Card } from "antd";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
  });

  const [passwordPopoverVisible, setPasswordPopoverVisible] = useState(false);

  const handleProfileSubmit = (values) => {
    console.log("Profile form submit: ", values);
  };

  const handlePasswordSubmit = (values) => {
    console.log("Password form submit: ", values);
    setPasswordPopoverVisible(false); // Close the popover after submitting
  };

  const changePasswordContent = (
    <Form onFinish={handlePasswordSubmit}>
      <Form.Item
        name="currentPassword"
        label="Current Password"
        rules={[
          { required: true, message: "Please input your current password!" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="newPassword"
        label="New Password"
        rules={[{ required: true, message: "Please input your new password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        rules={[
          { required: true, message: "Please confirm your new password!" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
  return (
    <Card className="container mx-auto my-20">
      <h1 className="flex items-center justify-center text-2xl font-bold w-full mb-10">
        User Profile
      </h1>
      <div className="flex justify-center w-full h-auto space-x-20">
<<<<<<< HEAD
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
=======
        <img src="../assets/images/user.png" className="rounded-full w-72" />
        <Form initialValues={user} onFinish={handleProfileSubmit}>
          <Form.Item name="name" label="Name">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input className="w-full" />
          </Form.Item>
<<<<<<< HEAD
=======
          <Popover
            content={changePasswordContent}
            title="Change Password"
            trigger="click"
            visible={passwordPopoverVisible}
            onVisibleChange={(visible) => setPasswordPopoverVisible(visible)}
          >
            <Button type="link" className="mt-4">
              Change Password
            </Button>
          </Popover>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mt-4">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
<<<<<<< HEAD
      <div className="flex justify-center w-full h-auto">
        <Button
          type="primary"
          className="mt-4 bg-red-500 text-white font-bold py-2 rounded"
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
=======
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
    </Card>
  );
};

export default UserProfile;
