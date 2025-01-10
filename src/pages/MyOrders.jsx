

import { useLocation } from 'react-router-dom';
import moment from 'moment';

const MyOrders = () => {
    const location = useLocation();
    const order = location.state?.order;
    console.log(order)

    if (!order) {
        return <div className="container min-h-screen mx-auto my-8 p-4 bg-base-100 shadow-md rounded-lg">No order details available.</div>;
    }

    return (
        <div className="container min-h-screen mx-auto my-8 p-4 bg-base-100 shadow-md rounded-lg">
            <div className="mt-6 text-center">
                <h1 className="text-3xl font-bold mb-4">Order Details</h1>
                <p className="text-lg mb-2">Food Name: {order.foodName}</p>
                <p className="text-lg mb-2">Price: {order.price}</p>
                <p className="text-lg mb-2">Quantity: {order.quantity}</p>
                <p className="text-lg mb-2">Buyer Name: {order.buyerName}</p>
                <p className="text-lg mb-2">Buyer Email: {order.buyerEmail}</p>
                <p className="text-lg mb-2">Order Date: {moment(order.buyingDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </div>
    );
};

export default MyOrders;


