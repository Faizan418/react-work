function Products() {
    const products = [
      {
        id: 1,
        name: "Cool Sneakers",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Wireless Earbuds",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Leather Jacket",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1564584217132-6f61c9dadd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{product.price}</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Products;