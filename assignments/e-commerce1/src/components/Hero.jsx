function Hero() {
    return (
      <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white py-24 flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 animate-fade-in">
            Welcome to ShopEasy!
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Discover unbeatable deals on your favorite products.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </section>
    );
  }
  
  export default Hero;