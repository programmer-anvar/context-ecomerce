import { useState } from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useProduct } from './context/ProductContext';

function CartIcon() {
  const { cart } = useProduct();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      Savaat
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Online Do'kon</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <CartIcon />
            </button>
          </div>
        </nav>

        {/* Cart Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Savatcha</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                X
              </button>
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            <Cart />
          </div>
        </div>

        {/* Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsCartOpen(false)}
          />
        )}

        <main className="pt-16">
          <ProductList />
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;
