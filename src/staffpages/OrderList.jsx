<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Breadcrumb,
  Button,
  Menu,
  Dropdown,
  Modal,
  message,
} from "antd";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  getAllOrders,
  updateOrderStatus,
  confirmDeliveredOrder,
  getProductById,
} from "../services/api-service";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const ordersData = await getAllOrders();
        const formattedOrderData = ordersData.map((order) => ({
          ...order,
          createdAt: order.status.orderDate
            ? order.status.orderDate.split("T")[0]
            : order.status.orderDate,
        }));
        setOrders(formattedOrderData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleMenuClick = (action, record) => {
    if (action === "view") {
      setSelectedOrder(record);
      fetchOrderDetails(record.orderDetails);
      setIsModalVisible(true);
    } else if (action === "confirmDelivery") {
      handleConfirmDelivery(record);
    } else {
      handleStatusChange(record, action);
    }
  };

  const handleStatusChange = async (record, status) => {
    console.log(
      `Đang thay đổi trạng thái thành ${status} cho Đơn hàng ID: ${record.id}`
    );
    try {
      await updateOrderStatus(record.id, 37, status);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === record.id
            ? { ...order, status: { ...order.status, orderStatus1: status } }
            : order
        )
      );
      message.success("Cập nhật trạng thái đơn hàng thành công");
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái đơn hàng:", error);
      message.error("Không thể cập nhật trạng thái đơn hàng");
    }
  };

  const handleConfirmDelivery = async (record) => {
    console.log(`Xác nhận giao hàng cho Đơn hàng ID: ${record.id}`);
    try {
      await confirmDeliveredOrder(record.id);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === record.id
            ? {
                ...order,
                status: { ...order.status, orderStatus1: "Delivered" },
              }
            : order
        )
      );
      message.success("Đơn hàng đã được xác nhận là đã giao");
    } catch (error) {
      console.error("Lỗi khi xác nhận giao hàng:", error);
      message.error("Không thể xác nhận giao hàng");
    }
  };

  const fetchOrderDetails = async (orderDetails) => {
    try {
      const details = await Promise.all(
        orderDetails.map(async (detail) => {
          const product = await getProductById(detail.productId);
          return { ...detail, product };
        })
      );
      setOrderDetails(details);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết đơn hàng:", error);
    }
  };

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "orderId",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Ngày",
      dataIndex: "createdAt",
      key: "date",
    },
    {
      title: "Trạng thái",
      dataIndex: ["status", "orderStatus1"],
=======
// import React from "react";
import { Table, Tag, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const OrderList = () => {
  const data = [
    {
      orderId: "1",
      date: "2022-01-01",
      customerName: "John Doe",
      status: "complete",
      amount: "$100",
    },
    {
      orderId: "2",
      date: "2022-01-02",
      customerName: "Jane Smith",
      status: "pending",
      amount: "$200",
    },
    {
      orderId: "3",
      date: "2022-01-03",
      customerName: "Bob Johnson",
      status: "cancel",
      amount: "$300",
    },
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },

    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
      key: "status",
      render: (status) => {
        let color;
        switch (status) {
<<<<<<< HEAD
          case "Pending":
            color = "orange";
            break;
          case "Processing":
            color = "blue";
            break;
          case "Shipped":
            color = "green";
            break;
          case "Delivered":
            color = "cyan";
            break;
          case "Cancelled":
=======
          case "complete":
            color = "green";
            break;
          case "pending":
            color = "orange";
            break;
          case "cancel":
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
            color = "red";
            break;
          default:
            color = "gray";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
<<<<<<< HEAD
      title: "Số tiền",
      dataIndex: "total",
      key: "amount",
    },
    {
      title: "Hành động",
      key: "action",
      render: (text, record) => {
        const menu = (
          <Menu onClick={({ key }) => handleMenuClick(key, record)}>
            <Menu.Item key="view">Xem chi tiết</Menu.Item>
            <Menu.SubMenu key="changeStatus" title="Thay đổi trạng thái">
              <Menu.Item key="Pending">Đang chờ xử lý</Menu.Item>
              <Menu.Item key="Processing">Đang xử lý</Menu.Item>
              <Menu.Item key="Shipped">Đã gửi</Menu.Item>
              <Menu.Item key="Delivered">Đã giao</Menu.Item>
              <Menu.Item key="Cancelled">Hủy bỏ</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="confirmDelivery">Xác nhận giao hàng</Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="default" className="border-0">
              <MoreVertIcon className="h-6 w-6 " />
            </Button>
          </Dropdown>
        );
      },
=======
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Link to={`/staff/order-list/order-detail/${record.orderId}`}>
          View Detail
        </Link>
      ),
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
    },
  ];

  return (
    <>
      <div className="mx-6 p-4 my-4">
        <div className="mb-4">
<<<<<<< HEAD
          <h1 className="text-2xl font-bold">Danh sách đơn hàng</h1>
          <Breadcrumb className="text-gray-600">
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Danh sách đơn hàng</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Table
          dataSource={orders}
          columns={columns}
          loading={loading}
          rowKey="id"
        />
      </div>
      <Modal
        title="Chi tiết đơn hàng"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Table
          dataSource={orderDetails}
          columns={[
            {
              title: "Tên sản phẩm",
              dataIndex: ["product", "name"],
              key: "name",
            },
            { title: "Số lượng", dataIndex: "quantity", key: "quantity" },
            { title: "Giá", dataIndex: "price", key: "price" },
          ]}
          rowKey="id"
        />
      </Modal>
=======
          <h1 className="text-2xl font-bold">Order List</h1>
          <Breadcrumb className="text-gray-600">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Order List</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Table dataSource={data} columns={columns} />
      </div>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
    </>
  );
};

export default OrderList;
