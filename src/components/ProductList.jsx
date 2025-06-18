import { useProduct } from '../context/ProductContext';

const ProductList = () => {
  const { products, addToCart } = useProduct();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Mahsulotlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Savatchaga qo'shish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 