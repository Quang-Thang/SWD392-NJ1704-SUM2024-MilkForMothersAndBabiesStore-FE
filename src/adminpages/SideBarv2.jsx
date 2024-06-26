<<<<<<< HEAD
=======
// import React from "react";
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
import { Menu } from "antd";
import { DashboardOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBarv2 = () => {
  return (
    <div className="h-screen w-[15%] bg-white shadow-md sticky top-0 left-0">
      <div className="flex items-center justify-center py-4 w-full h-32">
<<<<<<< HEAD
        <Link to="/admin/dashboard">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-42 w-fit"
          />
=======
        <Link to="/staff/dashboard">
          <img src="" alt="Logo" className="h-auto w-52" />
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
        </Link>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} className="border-r-0">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
<<<<<<< HEAD
          <Link to="/admin/dashboard">Bảng điều khiển</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to="/admin/management-staff">Quản lý nhân viên</Link>
=======
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to="/admin/management-staff">Management Staff</Link>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBarv2;
