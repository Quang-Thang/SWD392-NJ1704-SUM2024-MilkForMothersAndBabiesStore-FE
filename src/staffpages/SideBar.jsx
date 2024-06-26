import { Menu } from "antd";
import {
  AppstoreOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-screen w-[15%] bg-white shadow-md sticky top-0 left-0">
      <div className="flex items-center justify-center w-full h-32 py-4 my-4">
        <Link to="/staff/all-products">
          <img
            src="https://cdn.discordapp.com/attachments/887282315116568597/1250125417319497788/image.png?ex=667d9405&is=667c4285&hm=34503128b6212c3fb06641f1c0070dd7f67516a77af66e17647105f26415ab47&"
            alt="Logo"
            className="h-32 rounded-full w-fit"
          />
        </Link>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} className="border-r-0">
        <Menu.Item key="3" icon={<OrderedListOutlined />}>
          <Link to="/staff/order-list">Danh sách đơn hàng</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/staff/management-user">Khách hàng</Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<AppstoreOutlined />}>
          <Link to="/staff/management-product">Quản lý sản phẩm</Link>
        </Menu.Item>

        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          <Link to="/staff/management-order">Quản lý đơn hàng</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideBar;
