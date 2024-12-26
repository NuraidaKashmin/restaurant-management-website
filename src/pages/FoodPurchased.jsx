import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const FoodPurchased = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState(null);


// dl
    const [quantity, setQuantity] = useState(1);





    useEffect(() => {
        fetchFoodData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const fetchFoodData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/food/${id}`);
            setFood(data);
        } catch (err) {
            console.error("Error fetching food data:", err);
            toast.error("Failed to fetch food data.");
        }
    };

    const handlePurchase = async (e) => {
        e.preventDefault();



// dl
        if (quantity > food.quantity) {
            toast.error("Selected quantity exceeds available stock.");
            return;
        }







        // const purchaseData = {
        //     foodId: id,
        //     foodName: food.name,
        //     price: food.price,
        //     quantity: food.quantity,
        //     buyerName: user.displayName,
        //     buyerEmail: user.email,
        //     buyingDate: Date.now(),
        // };

        // try {
        //     const response = await axios.post(`http://localhost:5000/food-purchased/${id}`, purchaseData);

        //     if (response.status === 200) {
        //         toast.success("Purchase successful!");
        //     } else {
        //         toast.error("Error processing the purchase. Please try again.");
        //     }
        // } catch (err) {
        //     console.error("Error purchasing food:", err);
        //     toast.error("Failed to process purchase. Please try again.");
        // }
    
    
    
    // dl
    const purchaseData = {
        foodId: id,
        foodName: food.name,
        price: food.price * quantity, // Total price
        quantity,
        buyerName: user?.displayName || "Anonymous",
        buyerEmail: user?.email || "No Email Provided",
        buyingDate: Date.now(),
    };

    try {
        const response = await axios.post(`http://localhost:5000/food-purchased/${id}`, purchaseData);

     
        if (response.status === 200) {
            toast.success("Purchase successful!");
            setQuantity(1); // Reset quantity after successful purchase
        } else {
            toast.error("Error processing the purchase. Please try again.");
        }
    } catch (err) {
        console.error("Error purchasing food:", err);
        toast.error("Failed to process purchase. Please try again.");
    }
    
    
    
    
    
    };

    if (!food) return <div>Loading...</div>;

    // return (
    //     <div className="flex justify-center items-center my-16">
    //         <div className="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6">
    //             <h2 className="text-2xl font-bold text-center mb-4">Food Purchase</h2>
    //             <form onSubmit={handlePurchase}>
    //                 <div className="mb-4">
    //                     <label className="block text-sm font-medium text-gray-700" htmlFor="name">
    //                         Food Name
    //                     </label>
    //                     <input
    //                         type="text"
    //                         id="name"
    //                         name="name"
    //                         value={food.name}
    //                         readOnly
    //                         className="w-full px-3 py-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

    //                 <div className="mb-4">
    //                     <label className="block text-sm font-medium text-gray-700" htmlFor="price">
    //                         Price
    //                     </label>
    //                     <input
    //                         type="number"
    //                         id="price"
    //                         name="price"
    //                         value={food.price}
    //                         readOnly
    //                         className="w-full px-3 py-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

    //                 <div className="mb-4">
    //                     <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
    //                         Quantity
    //                     </label>
    //                     <input
    //                         type="number"
    //                         id="quantity"
    //                         name="quantity"
    //                         value={food.quantity}
    //                         readOnly
    //                         className="w-full px-3 py-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

                    
    //                 <div className="mb-4">
    //                     <label className="block font-medium mb-2">Buyer Name</label>
    //                     <input
    //                         type="text"
    //                         value={user?.displayName || "Anonymous"}
    //                         readOnly
    //                         className="w-full p-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

    //                 <div className="mb-4">
    //                     <label className="block font-medium mb-2">Buyer Email</label>
    //                     <input
    //                         type="text"
    //                         value={user?.email || "No Email Provided"}
    //                         readOnly
    //                         className="w-full p-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

                   
    //                 <div className="mb-4">
    //                     <label className="block font-medium mb-2">Buying Date</label>
    //                     <input
    //                         type="text"
    //                         value={new Date().toLocaleString()}
    //                         readOnly
    //                         className="w-full p-2 border rounded bg-gray-100"
    //                     />
    //                 </div>

    //                 <Link to="/my-orders" ><button
    //                     type="submit"
    //                     className="w-full bg-green-950 text-white py-2 rounded"
    //                 >
    //                     Purchase
    //                 </button></Link>
    //             </form>
    //         </div>
    //     </div>
    // );





    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Food Purchase</h2>
                <form onSubmit={handlePurchase}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={food.name}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="price">
                            Price (Per Unit)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={food.price}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min={1}
                            max={food.quantity}
                            className="w-full px-3 py-2 border rounded"
                        />
                        <p className="text-sm text-gray-500 mt-1">Available: {food.quantity}</p>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Buyer Name</label>
                        <input
                            type="text"
                            value={user?.displayName || "Anonymous"}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Buyer Email</label>
                        <input
                            type="text"
                            value={user?.email || "No Email Provided"}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );





};

export default FoodPurchased;
