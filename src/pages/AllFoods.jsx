import { useEffect, useState } from "react";
import AllFoodsCard from "../components/AllFoodsCard";
import axios from "axios";
import bgOne from '../assets/bgThree.jpg';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // Default sort order: ascending

    useEffect(() => {
        fetchAllFoods();
    }, []);

    const fetchAllFoods = async () => {
        const { data } = await axios.get('https://restaurant-server-tawny.vercel.app/all-foods');
        setFoods(data);
    };

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedFoods = [...filteredFoods].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.price - b.price; 
        }
        if (sortOrder === "desc") {
            return b.price - a.price; 
        }
        return 0; 
    });

    return (
        <div>
            <div
                className="text-white py-8 text-center"
                style={{
                    backgroundImage: `url(${bgOne})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1 className="text-4xl font-semibold">All Foods</h1>
            </div>

            <div className="py-4 px-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
                
                <div className="flex items-center gap-4">
                    <label
                        className="block text-lg bg-green-400 p-2 rounded-lg font-bold text-gray-700"
                        htmlFor="search"
                    >
                        SEARCH
                    </label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search by food name..."
                        className="input input-bordered w-full max-w-xs"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

               
                <div className="flex items-center gap-4">
                    <label
                        className="block text-lg bg-green-400 p-2 rounded-lg font-bold text-gray-700"
                        htmlFor="sort"
                    >
                        SORT BY PRICE
                    </label>
                    <button
                        className="btn btn-sm btn-active text-gray-700"
                        onClick={() =>
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                        }
                    >
                        {sortOrder === "asc" ? "Low to High" : "High to Low"}
                    </button>
                </div>
            </div>

            
            <div className="grid lg:grid-cols-4 justify-center gap-4 py-8">
                {sortedFoods.length > 0 ? (
                    sortedFoods.map(food => (
                        <AllFoodsCard key={food._id} food={food} />
                    ))
                ) : (
                    <p className="text-center text-xl">No foods found.</p>
                )}
            </div>
        </div>
    );
};

export default AllFoods;
