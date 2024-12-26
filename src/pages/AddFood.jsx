import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const AddFood = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        category: "",
        quantity: 0,
        price: 0,
        origin: "",
        description: "",
        purchaseCount: 0,
    });
    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodItem = {
            ...formData,
            purchaseCount: 0,
            addedBy: {
                name: user.displayName,
                email: user.email,
            },
        };

        try {
            const response = await fetch("http://localhost:5000/add-food", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(foodItem),
            });

            if (response.ok) {
                toast.success("Food item added successfully!");
                navigate('/my-food')
                setFormData({
                    name: "",
                    image: "",
                    category: "",
                    quantity: 0,
                    price: 0,
                    origin: "",
                    description: "",
                    purchaseCount: 0,
                });
            } else {
                throw new Error("Failed to add food item.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error adding food item. Please try again.");
        }
    };
    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Add Food Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
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
                            value={formData.image}
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
                            value={formData.category}
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
                            value={formData.quantity}
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
                            value={formData.price}
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
                            value={formData.origin}
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
                            value={formData.description}
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
                        Add Food
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;