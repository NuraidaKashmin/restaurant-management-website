
// eslint-disable-next-line react/prop-types
const AllFoodsCard = ({ food }) => {
    // eslint-disable-next-line react/prop-types
    const { category, description, image, name, origin, price, quantity } = food || {}
    console.log(category)
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Category:{category}</p>
                <p>Origin:{origin}</p>
                <p>Description:{description}</p>
                <p>Price{price}</p>
                <p>Quantity:{quantity}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;