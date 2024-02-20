import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const Products = () => {
    const [products, setProducts] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [filterProdcuts, setFilterProducts] = useState([])
    const { cart, setCart } = useContext(AuthContext)
    console.log({ cart });
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products);
                setFilterProducts(data.products)
            })
    }, [])

    const newValue = (e) => {
        const inputValues = e.target.value.toLowerCase();
        setInputValue(inputValues)
        const filterProduct = products.filter(item => {
            return (
                item?.brand.toLowerCase().includes(inputValues) ||
                item?.price?.toString().includes(inputValues)
            )
        })
        setFilterProducts(filterProduct)
    }
    const addToCart = (productId) => {
        const selectedProduct = products.find(product => product.id === productId.id);
        console.log(selectedProduct)
        setCart([...cart, selectedProduct]);
    };


    console.log({ cart })

    return (
        <div className="my-5 mt-20">
            <div className="flex justify-end px-10">
                <input type="text" value={inputValue} onChange={newValue} placeholder="search with name or price " className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 px-10 my-10">
                {
                    filterProdcuts?.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div >
        </div>
    );
};

export default Products;