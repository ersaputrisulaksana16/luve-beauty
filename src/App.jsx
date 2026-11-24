import { useState } from 'react';
import { products, CATEGORIES } from './data/products.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SearchBar from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Footer from './components/Footer.jsx';

// Komponen akar aplikasi yang mengelola seluruh state dan menyalurkan props ke komponen anak
export default function App() {
  // State untuk kata kunci pencarian nama produk
  const [searchQuery, setSearchQuery] = useState('');
  // State untuk kategori yang sedang dipilih
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  // State untuk menyimpan daftar id produk favorit
  const [favorites, setFavorites] = useState([]);
  // State untuk produk yang sedang dibuka pada modal detail (null jika tertutup)
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State untuk urutan harga ('asc' = Termurah, 'desc' = Termahal)
  const [sortOrder, setSortOrder] = useState('asc');

  // Event handler untuk menambah atau menghapus id produk dari daftar favorit
  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  // Mengambil 4 produk perwakilan dari masing-masing kategori untuk kisi 2x2 di Hero
  const heroFeaturedProducts = [products[0], products[3], products[6], products[9]];

  // Menyaring produk berdasarkan gabungan kata kunci pencarian dan kategori aktif
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Mengurutkan hasil filter berdasarkan harga termurah atau termahal
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Menyaring daftar produk yang masuk ke dalam array id favorit
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div>
      {/* Menyalurkan jumlah favorit ke Navbar melalui props */}
      <Navbar favoriteCount={favorites.length} />

      <main>
        <Hero featuredProducts={heroFeaturedProducts} />

        {/* Bagian Katalog Produk dengan pencarian, filter kategori, dan pengurutan harga */}
        <section id="katalog" className="catalog-section">
          <div className="page-container">
            <div className="section-header">
              <h2 className="section-heading">Katalog Produk</h2>
              <span className="section-count">
                Menampilkan {sortedProducts.length} dari {products.length} produk
              </span>
            </div>

            <div className="catalog-toolbar">
              <div className="toolbar-top-row">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />

                {/* Event handling onChange pada select untuk mengubah urutan harga */}
                <div className="sort-control">
                  <label htmlFor="sort-price-select" className="field-label">
                    Urutkan harga
                  </label>
                  <select
                    id="sort-price-select"
                    className="sort-select"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    aria-label="Urutkan harga produk"
                  >
                    <option value="asc">Harga: Termurah</option>
                    <option value="desc">Harga: Termahal</option>
                  </select>
                </div>
              </div>

              <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <ProductList
              products={sortedProducts}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectProduct={setSelectedProduct}
              emptyMessage="Produk tidak ditemukan"
            />
          </div>
        </section>

        {/* Bagian daftar produk favorit yang disimpan pengguna */}
        <section id="favorit" className="favorites-section">
          <div className="page-container">
            <div className="section-header">
              <h2 className="section-heading">Produk Favorit</h2>
              <span className="section-count">
                {favoriteProducts.length} produk tersimpan
              </span>
            </div>

            <ProductList
              products={favoriteProducts}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectProduct={setSelectedProduct}
              emptyMessage="Belum ada produk favorit"
            />
          </div>
        </section>

        {/* Bagian informasi singkat mengenai tugas aplikasi katalog */}
        <section id="tentang" className="about-section">
          <div className="page-container">
            <div className="section-header">
              <h2 className="section-heading">Tentang Katalog</h2>
            </div>
            <p className="about-copy">
              Luve Beauty adalah aplikasi katalog satu halaman yang memuat 12 produk
              kosmetik dalam empat kategori: Perawatan Kulit, Riasan, Perawatan
              Rambut, dan Parfum. Aplikasi ini disusun sebagai tugas individu
              pengembangan antarmuka berbasis komponen dengan React menggunakan
              state lokal, props, rendering daftar, dan rendering kondisional.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Rendering kondisional modal detail hanya ketika ada produk yang dipilih */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={handleToggleFavorite}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
