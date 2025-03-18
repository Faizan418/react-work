function Footer() {
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p className="text-lg font-light mb-4">© 2025 ShopEasy. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;