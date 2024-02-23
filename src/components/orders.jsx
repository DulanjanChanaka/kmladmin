import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://caltexserver.netlify.app/api/orders');
        setOrders(response.data); // Assuming the response data is an array of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5">
            <h2 className="text-xl font-semibold mb-2">Order Code: {order.code}</h2>
            <p className="mb-4">Description: {order.description}</p>
            <h3 className="font-semibold mb-2">Products:</h3>
            <ul>
              {order.quantity.map((product, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-semibold">Product Code:</span> {product.code}, 
                  <span className="font-semibold"> Quantity:</span> {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
