import Button from './Button.jsx';
import ProductVisual from './ProductVisual.jsx';

// Komponen kartu produk reusable yang menerima data produk dan handler aksi via props
export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onSelectProduct,
}) {
  // Memformat harga Rupiah dengan pemisah ribuan Indonesia dan rating dengan koma desimal
  const formattedPrice = `Rp ${product.price.toLocaleString('id-ID')}`;
  const formattedRating = `${product.rating.toFixed(1).replace('.', ',')} / 5`;

  return (
    <article className="product-card">
      <div>
        <div className="product-visual-box">
          <ProductVisual product={product} size="md" />
        </div>

        <div className="product-meta">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>

        <h3 className="product-title">{product.name}</h3>

        <div className="product-price-row">
          <span className="product-price">{formattedPrice}</span>
          <span className="product-rating" aria-label={`Penilaian ${formattedRating}`}>
            {formattedRating}
          </span>
        </div>
      </div>

      {/* Penanganan event onClick untuk tombol favorit dan tombol buka detail */}
      <div className="product-actions">
        <Button
          variant={isFavorite ? 'saved' : 'secondary'}
          onClick={() => onToggleFavorite(product.id)}
          ariaPressed={isFavorite}
          ariaLabel={
            isFavorite
              ? `Hapus ${product.name} dari favorit`
              : `Simpan ${product.name} ke favorit`
          }
        >
          {isFavorite ? 'Tersimpan' : 'Simpan'}
        </Button>

        <Button
          variant="primary"
          onClick={() => onSelectProduct(product)}
          ariaLabel={`Lihat detail ${product.name}`}
        >
          Lihat Detail
        </Button>
      </div>
    </article>
  );
}
