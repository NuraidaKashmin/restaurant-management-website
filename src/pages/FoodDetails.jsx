import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            const { data } = await axios.get(`http://localhost:5000/food/${id}`);
            setFood(data);
        } catch (err) {
            console.error("Error fetching food data:", err);
        }
    };

    const { category, description, image, name, origin, price, quantity } = food || {}
    console.log(category)

    return (
        
            <div className="container mx-auto grid bg-base-100">
                <figure>
                    <img
                        src={image}
                        alt="" />
                </figure>
                    <div className="">
                    <h2 >Name: {name}</h2>
                    <p>Category:{category}</p>
                    <p>Origin:{origin}</p>
                    <p>Description:{description}</p>
                    <p>Price{price}</p>
                    <p>Quantity:{quantity}</p>
                    </div>
                
            </div>
        
    );
};

export default FoodDetails;