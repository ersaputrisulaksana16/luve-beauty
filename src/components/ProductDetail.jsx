import { useEffect } from 'react';
import Button from './Button.jsx';
import ProductVisual from './ProductVisual.jsx';

// Komponen modal detail produk reusable yang tampil saat prop product bernilai selain null
export default function ProductDetail({
  product,
  isFavorite,
  onToggleFavorite,
  onClose,
}) {
  // Menutup modal saat pengguna menekan tombol Escape pada papan ketik
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const formattedPrice = `Rp ${product.price.toLocaleString('id-ID')}`;
  const formattedRating = `${product.rating.toFixed(1).replace('.', ',')} / 5`;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      {/* Menghentikan propagasi klik agar klik di dalam panel tidak menutup modal */}
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-category">{product.category}</span>
            <h2 id="modal-product-title" className="modal-title">
              {product.name}
            </h2>
          </div>

          <Button variant="secondary" onClick={onClose} ariaLabel="Tutup jendela detail">
            Tutup
          </Button>
        </div>

        <div className="modal-body">
          <div className="modal-visual">
            <ProductVisual product={product} size="lg" />
          </div>

          <div className="modal-info">
            <div className="modal-spec-row">
              <span className="modal-spec-label">Merek</span>
              <span className="modal-spec-value">{product.brand}</span>
            </div>
            <div className="modal-spec-row">
              <span className="modal-spec-label">Harga</span>
              <span className="modal-spec-value">{formattedPrice}</span>
            </div>
            <div className="modal-spec-row">
              <span className="modal-spec-label">Penilaian</span>
              <span className="modal-spec-value">{formattedRating}</span>
            </div>
            <div className="modal-spec-row">
              <span className="modal-spec-label">Warna Produk</span>
              <span className="modal-spec-value modal-color-row">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="13"
                    height="13"
                    rx="1"
                    fill={product.color}
                    stroke="#1C1917"
                    strokeWidth="1"
                  />
                </svg>
                <span>{product.color}</span>
              </span>
            </div>

            <p className="modal-description">{product.description}</p>
          </div>
        </div>

        <div className="modal-footer">
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

          <Button variant="primary" onClick={onClose} ariaLabel="Tutup detail produk">
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}
