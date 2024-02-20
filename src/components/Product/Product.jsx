const Product = ({ product, addToCart }) => {
    const { thumbnail, brand, category, description, price, discountPercentage, title, stock
    } = product

    const handleAddToCart = (id) => {
        addToCart(id)

    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">
                    {brand}
                </h2>
                <div className="badge bg-[#bebcbc] text-black font-bold">Price : ${price}</div>

                <div className="card-actions">
                    <div className="badge badge-outline bg-[#bebcbc] text-black font-bold">Available Stock: {stock}</div>
                    <div className="badge badge-outline bg-[#bebcbc] text-black font-bold">Discount: {discountPercentage}%</div>
                </div>
                <p>{description}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;