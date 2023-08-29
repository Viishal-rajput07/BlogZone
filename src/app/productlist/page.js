'use client'
import { useState, useEffect } from "react";
import LoadingBar from "../LoadingBar"; // Adjust the import path
import InfiniteScroll from "react-infinite-scroll-component";



export default function Page() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?page=${currentPage}`);
      const newData = await response.json();
      return newData.products || [];
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  const loadMoreProducts = async () => {
    const newProducts = await fetchProducts();
    if (newProducts.length > 0) {
      setProduct(prevProducts => [...prevProducts, ...newProducts]);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchProducts().then(initialProducts => {
      setProduct(initialProducts);
    });
  }, []);

  return (
    <div>
      <h1 className="my-16 text-9xl font-extrabold text-center">Product List</h1>
      <InfiniteScroll
        dataLength={product.length}
        next={loadMoreProducts}
        hasMore={true} // Assuming there's always more data to load
        loader={<LoadingBar />} // Replace with your loading component
      >
        <div className="grid grid-cols-3 w-5/6 m-auto">
          {product.map((item) => (
            <div key={item.id}>
              <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure><img className="h-60" src={item.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.title}
                  </h2>
                  <div className="badge badge-accent">{item.brand}</div>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-secondary badge-outline">Ratings: {item.rating}</div>
                    <div className="badge badge-primary badge-outline">Stock Available: {item.stock}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}