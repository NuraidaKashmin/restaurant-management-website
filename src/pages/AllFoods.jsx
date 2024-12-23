import { useEffect, useState } from "react";
import AllFoodsCard from "../components/AllFoodsCard";
import axios from "axios";
import bgOne from '../assets/bgThree.jpg'



const AllFoods = () => {
    const [foods, setFoods] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        fetchAllFoods()
    }, [])
    const fetchAllFoods = async () => {
        const { data } = await axios.get('http://localhost:5000/all-foods')
        setFoods(data)
    }
    console.log(foods)

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (

        <div>
            <div className="text-white py-8 text-center" style={{ backgroundImage: `url(${bgOne})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h1 className="text-4xl font-semibold">All Foods</h1>
            </div>
            <div className="py-4 px-6 flex gap-4 items-center">
                <label className="block text-2xl bg-green-400 p-2 rounded-lg font-bold  text-gray-700" htmlFor="name">
                    SEARCH
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Search by food name..."
                    className="input input-bordered w-full max-w-xs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-4 py-8">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map(food => (
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