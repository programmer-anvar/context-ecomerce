import { useProduct } from '../context/ProductContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useProduct();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center py-8">Savatchangiz bo'sh</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center bg-gray-50 p-3 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1 ml-3">
                <h3 className="font-medium text-sm line-clamp-1">{item.title}</h3>
                <p className="text-green-600 font-bold text-sm">${item.price}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-white px-2 py-0.5 rounded text-sm border"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-white px-2 py-0.5 rounded text-sm border"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-600 hover:text-red-800 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-bold">Jami:</span>
              <span className="text-xl font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Buyurtma berish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 