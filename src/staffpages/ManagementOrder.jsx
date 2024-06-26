import React, { useState, useEffect } from "react";
import { Button, Table, Modal, message, Breadcrumb } from "antd";
import { getAllOrders, getProductById } from "../services/api-service";

const { confirm } = Modal;

const ManagementOrder = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isOrderDetailModalVisible, setIsOrderDetailModalVisible] =
    useState(false);
  const [orderDetailProducts, setOrderDetailProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const ordersData = await getAllOrders();
      setDataSource(ordersData);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrderDetailProducts = async (orderDetails) => {
    try {
      const products = await Promise.all(
        orderDetails.map(async (detail) => {
          const product = await getProductById(detail.productId);
          return { ...detail, product };
        })
      );
      setOrderDetailProducts(products);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
    }
  };

  const showOrderDetailModal = (record) => {
    setSelectedOrder(record);
    fetchOrderDetailProducts(record.orderDetails);
    setIsOrderDetailModalVisible(true);
  };

  const handleCancel = () => {
    setIsOrderDetailModalVisible(false);
  };

  const calculateTotal = () => {
    return orderDetailProducts.reduce((total, detail) => {
      return total + detail.price * detail.quantity;
    }, 0);
  };

  const columns = [
    {
      title: "ID Đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ID Khách hàng",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Thanh toán",
      dataIndex: "payment",
      key: "payment",
    },
    {
      title: "Tổng cộng",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Trạng thái",
      dataIndex: ["status", "orderStatus1"],
      key: "status",
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: ["status", "orderDate"],
      key: "orderDate",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Chi tiết",
      key: "details",
      render: (text, record) => (
        <Button onClick={() => showOrderDetailModal(record)}>
          Xem Chi tiết
        </Button>
      ),
    },
  ];

  return (
    <div className="p-4 mx-6 my-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="ml-4 text-2xl font-bold">Tất cả đơn hàng</h1>
          <Breadcrumb className="ml-4 text-gray-600">
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Tất cả đơn hàng</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
      <Modal
        title="Chi tiết đơn hàng"
        visible={isOrderDetailModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedOrder && (
          <div>
            <div className="flex justify-between mb-4">
              <div>
                <p>
                  <strong>Mã đơn hàng:</strong> {selectedOrder.id}
                </p>
                <p>
                  <strong>Ngày đặt hàng:</strong>{" "}
                  {new Date(
                    selectedOrder.status.orderDate
                  ).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p>
                  <strong>Khách hàng:</strong>
                </p>
                <p>Tên: {selectedOrder.customerName}</p>
                <p>Email: {selectedOrder.customerEmail}</p>
                <p>Số điện thoại: {selectedOrder.customerPhone}</p>
              </div>
              <div>
                <p>
                  <strong>Thông tin đơn hàng:</strong>
                </p>
                <p>Phương thức thanh toán: {selectedOrder.payment}</p>
                <p>Trạng thái: {selectedOrder.status.orderStatus1}</p>
                <p>Địa chỉ: {selectedOrder.address}</p>
              </div>
            </div>
            <Table
              dataSource={orderDetailProducts}
              columns={[
                {
                  title: "Tên sản phẩm",
                  dataIndex: ["product", "name"],
                  key: "name",
                },
                { title: "Giá", dataIndex: "price", key: "price" },
                { title: "Số lượng", dataIndex: "quantity", key: "quantity" },
              ]}
              rowKey="id"
              pagination={false}
            />
            <div className="flex justify-end mt-4">
              <div>
                <p>
                  <strong>Tổng số tiền:</strong>{" "}
                  {calculateTotal().toLocaleString()} VND
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ManagementOrder;
