import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Update = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-full max-w-lg bg-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Update Food Item</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Food Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            
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