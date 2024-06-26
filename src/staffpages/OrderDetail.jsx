<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Table, Button, Typography } from "antd";
import { DownloadOutlined, ProfileOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
=======
// import React from "react";
import { Card, Col, Row, Table, Button, Typography } from "antd";
import { DownloadOutlined, ProfileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2

const { Title, Text } = Typography;

const OrderDetail = () => {
<<<<<<< HEAD
  const { id } = useParams(); // Lấy orderId từ URL
  const [order, setOrder] = useState(null); // State để lưu thông tin đơn hàng
  const [loading, setLoading] = useState(false); // State để quản lý trạng thái loading

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
        // Xử lý lỗi, ví dụ hiển thị thông báo lỗi cho người dùng
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  const {
    shippingInfo,
    total,
    items,
    shippingMethod,
    paymentMethod,
    status,
    voucherId,
  } = order;
=======
  const data = [
    {
      key: "1",
      productName: "Lorem Ipsum",

      quantity: 2,
      total: "$40",
    },
    {
      key: "2",
      productName: "Lorem Ipsum",

      quantity: 2,
      total: "$40",
    },
    {
      key: "3",
      productName: "Lorem Ipsum",

      quantity: 2,
      total: "$40",
    },
    {
      key: "4",
      productName: "Lorem Ipsum",

      quantity: 2,
      total: "$40",
    },
  ];
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

<<<<<<< HEAD
  const data = items.map((item, index) => ({
    key: index.toString(),
    productName: item.productId.name,
    quantity: item.quantity,
    total: `$${item.productId.regular_price * item.quantity}`,
  }));

=======
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
  return (
    <div className="p-6 bg-gray-100">
      <Card className="mb-6 shadow">
        <Row gutter={16} justify="space-between" align="middle">
          <Col>
<<<<<<< HEAD
            <Title level={4}>Order ID: {id}</Title>
            <Text>{shippingInfo.name}</Text>
          </Col>
          <Col>
            <Text>Status: {status}</Text>
=======
            <Title level={4}>Orders ID: 001</Title>
            <Text>Feb 16, 2022 - Feb 20, 2022</Text>
          </Col>
          <Col>
            <Text>Status: Completed</Text>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          </Col>
        </Row>
      </Card>

      <Row gutter={16} className="mb-6">
        <Col span={8}>
          <Card
            title="Customer"
            extra={
              <Link
<<<<<<< HEAD
                to={`/staff/management-user/user-detail/${order.userId}`}
=======
                to="/staff/management-user/user-detail/:id"
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
                type="link"
                icon={<ProfileOutlined />}
              >
                View Profile
              </Link>
            }
            className="shadow"
          >
<<<<<<< HEAD
            <p>Full Name: {shippingInfo.name}</p>
            <p>Email: {shippingInfo.email}</p>
            <p>Phone: {shippingInfo.phone}</p>
=======
            <p>Full Name: Shristi Singh</p>
            <p>Email: shristi@gmail.com</p>
            <p>Phone: +91 904 231 1212</p>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Order Info"
            extra={
              <Button type="link" icon={<DownloadOutlined />}>
                View Order
              </Button>
            }
            className="shadow"
          >
<<<<<<< HEAD
            <p>Shipping: {shippingMethod}</p>
            <p>Payment Method: {paymentMethod}</p>
            <p>Status: {status}</p>
            {voucherId && (
              <p>
                Voucher: {voucherId.voucherCode} - {voucherId.voucher_discount}%
              </p>
            )}
=======
            <p>Shipping: COD</p>
            <p>Payment Method: VN PAY</p>
            <p>Status: Completed</p>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deliver to" className="shadow">
<<<<<<< HEAD
            <p>Address: {shippingInfo.address}</p>
=======
            <p>Address: Dharam Colony, Palam Vihar, Gurgaon, Haryana</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} className="mb-6">
        <Col span={12}>
          <Card title="Payment Info" className="shadow">
            <p>VN PAY: **** 6557</p>
            <p>Phone: +91 904 231 1212</p>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          </Card>
        </Col>
      </Row>

      <Card title="Products" className="shadow">
        <Table columns={columns} dataSource={data} pagination={false} />
        <div className="flex justify-end mt-4">
          <div className="w-full md:w-1/4">
            <div className="flex justify-between py-1">
              <span>Subtotal:</span>
<<<<<<< HEAD
              <span>${total}</span>
            </div>
            {/* Các thông tin khác về tổng tiền, thuế, giảm giá, phí vận chuyển */}
=======
              <span>$40</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Tax (20%):</span>
              <span>$40</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Discount:</span>
              <span>$40</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Shipping Rate:</span>
              <span>$40</span>
            </div>
            <div className="flex justify-between font-semibold text-lg py-1">
              <span>Total:</span>
              <span>$40</span>
            </div>
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;
