import ProductCard from './ProductCard.jsx';

// Komponen daftar produk yang merender kumpulan ProductCard atau pesan kosong secara kondisional
export default function ProductList({
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  emptyMessage,
}) {
  // Rendering kondisional ketika daftar produk kosong
  if (products.length === 0) {
    return (
      <div className="empty-state" role="status">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {/* Merender daftar kartu produk dengan map() dan key={product.id} */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}
