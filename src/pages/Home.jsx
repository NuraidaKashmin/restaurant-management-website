import Lottie from "lottie-react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Animation from "../Animation.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AllFoodsCard from "../components/AllFoodsCard";

const Home = () => {
    const [foods, setFoods] = useState([])


    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        const fetchTopFoods = async () => {
            try {
                const response = await axios.get('https://restaurant-server-tawny.vercel.app/top-foods');
                setTopFoods(response.data);
            } catch (error) {
                console.error('Error fetching top foods:', error);
            }
        };

        fetchTopFoods();
    }, []);






    
    useEffect(() => {
        fetchAllFoods()
    }, [])
    const fetchAllFoods = async () => {
        const { data } = await axios.get('https://restaurant-server-tawny.vercel.app/all-foods')
        setFoods(data)
    }
    return (
        <div className="mx-auto">
            <Banner></Banner>




            <div>
            <h1 className="text-3xl font-bold text-center mb-8">Top Selling Foods</h1>
            <div className="grid lg:grid-cols-3 mb-8 gap-4">
                {topFoods.length > 0 ? (
                    topFoods.map((food) => (
                        <div key={food._id} className="card shadow-lg p-4 border rounded-md">
                            <img src={food.image || '/placeholder.png'} alt={food.name} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold">{food.name}</h3>
                            <p className="text-gray-600">Price: ${food.price}</p>
                            <p className="text-gray-600">Purchased: {food.purchaseCount} times</p>
                            <Link to={`/food/${food._id}`}>
                                <button className="btn btn-success text-white text-lg mt-6">Details</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No top foods available.</p>
                )}
            </div>
            <div className="grid justify-center">
                <Link to="/all-foods">
                    <button className="btn btn-info text-white text-lg mb-8">See All</button>
                </Link>
            </div>
        </div>




            
            <Accordion></Accordion>
            <div className="mx-auto w-11/12 mt-14 grid gap-6 justify-items-center">
                <h1 className="text-xl md:text-4xl text-center font-bold dark:text-white">Hurry up! Order Now!</h1>
                <Link to='/all-foods'><button className="btn btn-info text-lg text-white">All Foods</button></Link>
                <Lottie animationData={Animation} loop={true} />;
            </div>

            <div>
                <h1 className="text-3xl font-bold text-center mb-8">Explore Our Foods</h1>
                <div className="grid lg:grid-cols-3 mb-8 gap-4">
                    {
                        foods.map(food => <AllFoodsCard key={food._id} food={food}></AllFoodsCard>)
                    }
                </div>
                <div className="grid justify-center">
                    <Link
                        to='/all-foods'
                        className=''
                    >
                        <button className="btn btn-success text-white text-lg mb-8">All Foods</button>
                    </Link>
                </div>
            </div>








            








        </div>
    );
};

export default Home;