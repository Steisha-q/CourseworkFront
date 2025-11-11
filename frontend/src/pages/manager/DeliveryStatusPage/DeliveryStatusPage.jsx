import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      orderNo: 1,
      orderId: "2ee4778d-70da-46de-89ea-7196de903320",
      orderDate: "15.05.2025 15:22:58",
      status: "Growing",
    },
    {
      orderNo: 3,
      orderId: "3d4acaff-939e-499b-bb06-18b5c91c919",
      orderDate: "13.05.2025 10:06:18",
      status: "Cancel",
    },
    {
      orderNo: 4,
      orderId: "4a8b0z07-fa9b-4439-883e-87abc951aa0",
      orderDate: "15.05.2025 20:18:23",
      status: "Growing",
    },
    {
      orderNo: 5,
      orderId: "92eefc79-8ef9-4454-886d-93504c2078b4",
      orderDate: "13.05.2025 10:11:02",
      status: "Growing",
    },
    {
      orderNo: 6,
      orderId: "dbcz582c-2071-ab6b-D7bb-bb10881cca60",
      orderDate: "15.05.2025 20:07:10",
      status: "Growing",
    },
    {
      orderNo: 7,
      orderId: "c9221a9a-180a-4654-8208-423c449a2b52",
      orderDate: "13.05.2025 10:09:32",
      status: "Growing",
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleBulkStatusChange = () => {
    setOrders(orders.map((order) => ({ ...order, status: selectedStatus })));
  };

  return (
    <div className={styles.ordersPage}>
      <h1>Управління замовленнями</h1>

      <div className={styles.ordersList}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>No.</div>
          <div className={styles.headerCell}>Order ID</div>
          <div className={styles.headerCell}>Order Date</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Actions</div>
        </div>

        {orders.map((order) => (
          <div key={order.orderId} className={styles.orderRow}>
            <div className={styles.cell}>{order.orderNo}</div>
            <div className={styles.cell}>
              <span className={styles.orderId}>{order.orderId}</span>
            </div>
            <div className={styles.cell}>{order.orderDate}</div>
            <div className={styles.cell}>
              <span
                className={`${styles.status} ${
                  styles[order.status.toLowerCase()]
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className={styles.cell}>
              <select
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(order.orderId, e.target.value)
                }
                className={styles.statusDropdown}
              >
                <option value="Growing">Growing</option>
                <option value="Pending">Pending</option>
                <option value="Update">Update</option>
                <option value="Cancel">Cancel</option>
              </select>
              <Link
                to={`/manager/orders/${order.orderId}`}
                className={styles.detailsBtn}
              >
                Деталі
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
