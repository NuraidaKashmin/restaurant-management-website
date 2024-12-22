import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto grid gap-8 justify-center mt-36 ">
            <p className='text-gray-700 text-5xl'>
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to='/' ><button className="btn btn-warning text-2xl">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;