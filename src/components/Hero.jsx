import ProductVisual from './ProductVisual.jsx';

// Komponen Hero dua kolom di desktop dengan teks kiri dan kisi visual 2x2 di kanan
export default function Hero({ featuredProducts }) {
  return (
    <section id="beranda" className="hero-section">
      <div className="page-container hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">Luve Beauty</h1>
          <p className="hero-subtitle">
            Katalog 12 produk kosmetik, bisa dicari dan difilter
          </p>
          <p className="hero-identity">R Ersa Putri Sulaksana | NIM: 1247050099</p>
        </div>

        {/* Kisi 2x2 yang merender 4 visual perwakilan kategori menggunakan map */}
        <div className="hero-showcase" aria-label="Contoh visual empat kategori produk">
          {featuredProducts.map((product) => (
            <div key={product.id} className="hero-showcase-cell">
              <ProductVisual product={product} size="sm" />
              <div className="hero-showcase-caption">
                <span className="hero-showcase-category">{product.category}</span>
                <span className="hero-showcase-name">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
