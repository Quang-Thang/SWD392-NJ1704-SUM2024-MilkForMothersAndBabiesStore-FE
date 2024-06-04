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

  return (
    <Card className="container mx-auto my-20">
      <h1 className="flex items-center justify-center text-2xl font-bold w-full mb-10">
        User Profile
      </h1>
      <div className="flex justify-center w-full h-auto space-x-20">
        <img src="../assets/images/user.png" className="rounded-full w-72" />
        <Form initialValues={user} onFinish={handleProfileSubmit}>
          <Form.Item name="name" label="Name">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input className="w-full" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input className="w-full" />
          </Form.Item>
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
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mt-4">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};

export default UserProfile;
