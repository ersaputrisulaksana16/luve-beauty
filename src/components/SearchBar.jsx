import Button from './Button.jsx';

// Komponen input terkontrol untuk pencarian nama produk dengan event onChange
export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-product-input" className="field-label">
        Cari produk
      </label>
      <div className="search-input-wrap">
        <input
          id="search-product-input"
          type="search"
          className="search-input"
          placeholder="Cari nama produk"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Cari nama produk"
        />
        {/* Tombol hapus pencarian ditampilkan secara kondisional saat kata kunci terisi */}
        {searchQuery && (
          <Button
            variant="secondary"
            onClick={() => onSearchChange('')}
            ariaLabel="Hapus kata kunci pencarian"
          >
            Hapus
          </Button>
        )}
      </div>
    </div>
  );
}
