import Lottie from "lottie-react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Animation from "../Animation.json";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner></Banner>




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