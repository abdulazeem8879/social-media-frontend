import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans antialiased bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-xl mb-6">Your journey to learning and discovery starts here!</p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Website. All Rights Reserved.</p>
        </div>
      </footer>
      
    </div>
  );
};

export default HomePage;
