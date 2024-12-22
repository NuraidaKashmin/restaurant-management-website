import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BannerDescription = ({ image, text, textOne }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-white lg:text-4xl'>
                        {textOne}
                    </h1>
                    <h1 className='text-2xl font-semibold text-white lg:text-3xl pt-6'>
                        {text}
                    </h1>
                    <br />
                    <Link
                        to='/all-foods'
                        className=''
                    >
                        <button className="btn btn-success text-white">All Foods</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerDescription;