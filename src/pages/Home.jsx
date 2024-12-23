import Lottie from "lottie-react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Animation from "../Animation.json";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import AllFoodsCard from "../components/AllFoodsCard";

const Home = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetchAllFoods()
    }, [])
    const fetchAllFoods = async () => {
        const { data } = await axios.get('http://localhost:5000/all-foods')
        setFoods(data)
    }
    return (
        <div className="mx-auto">
            <Banner></Banner>



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
            <Accordion></Accordion>
            <div className="mx-auto w-11/12 mt-14 grid gap-6 justify-items-center">
                <h1 className="text-xl md:text-4xl text-center font-bold dark:text-white">Hurry up! Order Now!</h1>
                <Link to='/all-foods'><button className="btn btn-info text-lg text-white">All Foods</button></Link>
                <Lottie animationData={Animation} loop={true} />;
            </div>








            <Footer></Footer>








        </div>
    );
};

export default Home;