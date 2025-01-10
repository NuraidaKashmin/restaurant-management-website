import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const FoodDetails = () => {
    const { id } = useParams();
    console.log(id)
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetchFoodData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const fetchFoodData = async () => {
        try {
            const { data } = await axios.get(`https://restaurant-server-tawny.vercel.app/food/${id}`);
            setFood(data);
            console.log("Fetched data:", data);
        } catch (err) {
            console.error("Error fetching food data:", err);
        }
    };

    const { category, description, image, name, origin, price, quantity, purchaseCount } = food || {}
    console.log(purchaseCount)

    return (

        <div className="container mx-auto my-8 p-4 bg-base-100 shadow-md rounded-lg">
            <figure className="flex justify-center">
                <img
                    src={image}
                    alt=""
                    className="w-full max-w-lg rounded-lg shadow-md"
                />
            </figure>
            <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Name: {name}</h2>
                <p className="text-lg mb-2">Category: {category}</p>
                <p className="text-lg mb-2">Origin: {origin}</p>
                <p className="text-lg mb-2">Description: {description}</p>
                <p className="text-lg mb-2">Price: {price}</p>
                <p className="text-lg mb-2">Quantity: {quantity}</p>
                <p className="text-lg mb-2">Purchase Count: {purchaseCount}</p>
                <Link to={`/food-purchased/${id}`}>
                    <button
                        className="btn btn-success text-white text-base"
                        disabled={quantity === 0}
                    >
                        {quantity === 0 ? "Out of Stock" : "Click to Purchase"}
                    </button>
                </Link>



            </div>




        </div>



    );
};

export default FoodDetails;