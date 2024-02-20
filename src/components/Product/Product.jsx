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
                <div className="badge badge-secondary">Price : ${price}</div>
                <p>{description}</p>
                <div className="card-actions">
                    <div className="badge badge-outline bg-secondary text-white">Available Stock: {stock}</div>
                    <div className="badge badge-outline bg-secondary text-white">Discount: {discountPercentage}%</div>
                </div>
                <button onClick={() => handleAddToCart(product)} className="bg-[#FF00D3] text-white rounded py-2 ">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;