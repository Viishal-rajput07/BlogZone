import Button from "./Button";

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const newData = await response.json();
      return newData.products ;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

export default async function Page() {
  let product = await fetchProducts();
  return (
    <div>
      <h1 className="my-16 text-9xl font-extrabold text-center">Product List</h1>
        <div className="grid grid-cols-3 w-5/6 m-auto">
          {product.map((item) => (
            <div key={item.id}>
              <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure><img className="h-60" src={item.thumbnail} alt="Loading" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.title}
                  </h2>
                  <div className="badge badge-accent">{item.brand}</div>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-secondary badge-outline">Ratings: {item.rating}</div>
                    <div className="badge badge-primary badge-outline">Stock Available: {item.stock}</div>
                    <Button price={item.price}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}