import { useEffect, useState } from "react";
import AllFoodsCard from "../components/AllFoodsCard";
import axios from "axios";



const AllFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect (()=>{
        fetchAllFoods()
    }, [])
    const fetchAllFoods = async () =>{
        const {data} = await axios.get('http://localhost:5000/all-foods')
        setFoods(data)
    }
    console.log(foods)


    return (
        <div className="grid lg:grid-cols-3 gap-4">
            {
                foods.map(food=><AllFoodsCard key={food._id} food={food}></AllFoodsCard>)
            }
        </div>
    );
};

export default AllFoods;