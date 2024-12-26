import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState({});

    useEffect(() => {
        fetchFoodData();
    }, [id]);

    const fetchFoodData = async () => {
        try {
            const { data } = await axios.get(`https://restaurant-server-tawny.vercel.app/food/${id}`);
            setFood(data);
        } catch (err) {
            console.error("Error fetching food data:", err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFood({
            ...food,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFood = {
            ...food,
            addedBy: {
                name: user?.displayName || "Anonymous",
                email: user?.email || "No Email Provided",
            },
        };

        try {
            const response = await fetch(`https://restaurant-server-tawny.vercel.app/update-food/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFood),
            });

            if (response.ok) {
                toast.success("Food item updated successfully!");
                navigate('/my-food'); 
            } else {
                throw new Error("Failed to update food item.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error updating food item. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Update Food Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={food.name || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                            Food Image (URL)
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={food.image || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="category">
                            Food Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={food.category || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            type="number"
                            min="0"
                            id="quantity"
                            name="quantity"
                            value={food.quantity || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="price">
                            Price
                        </label>
                        <input
                            type="number"
                            min="0"
                            id="price"
                            name="price"
                            value={food.price || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="origin">
                            Food Origin (Country)
                        </label>
                        <input
                            type="text"
                            id="origin"
                            name="origin"
                            value={food.origin || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                            Description (Ingredients, Procedure, etc.)
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={food.description || ""}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded"
                            rows="4"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Added By (Name)</label>
                        <input
                            type="text"
                            value={user?.displayName || "Anonymous"}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-2">Added By (Email)</label>
                        <input
                            type="text"
                            value={user?.email || "No Email Provided"}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-950 text-white py-2 rounded"
                    >
                        Update Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
