import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllFoodsCard = ({ food }) => {
    // eslint-disable-next-line react/prop-types
    const { category,  image, name,  price, quantity, _id } = food || {}
    console.log(category)
    return (
        <div className="card shadow-lg p-4 border rounded-md">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600">Price: ${price}</p>
                <p className={`text-sm font-medium ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {quantity > 0 ? `Available: ${quantity}` : 'Out of Stock'}
                </p>
                <Link to={`/food/${_id}`}>
                    <button
                        className="btn btn-primary mt-4"
                        disabled={quantity === 0}
                    >
                        Details
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default AllFoodsCard;