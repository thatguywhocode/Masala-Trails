 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Hero from './components/Hero';
import RecipeCard from './components/RecipeCard';
import Navbar from "./components/Navbar";
import RecipesPage from './pages/RecipesPage';
import Categories from './pages/Categories';
import Latest from './pages/Latest';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Submit from "./pages/Submit";
 

const featuredRecipes = [
  {
    title: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "45 mins",
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    title: "Pad Thai",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "30 mins",
    servings: 2,
    difficulty: "Easy",
    cuisine: "Thai",
  },
  {
    title: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </section>
        <section className="mt-16">
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Share Your Recipe
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community of food lovers and share your favorite
                recipes with the world.
              </p>
              <Link to="/submit">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                  Submit Your Recipe
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Masala Trails</h3>
              <p className="text-gray-400">
                Discover and share authentic recipes from around the world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get the latest recipes and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-800"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>

  <ScrollToTop 
  smooth 
  style={{ 
    backgroundColor: "#F97316", 
    borderRadius: "50%", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" 
  }} 
  component={<span style={{ fontSize: "24px", color: "white" }}>▲</span>}
/>
      </div>
    </Router>
  );
}

export default App;
