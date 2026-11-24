// Komponen navigasi atas yang menerima prop favoriteCount dari App
export default function Navbar({ favoriteCount }) {
  return (
    <header className="site-header">
      <div className="page-container navbar-inner">
        <a href="#beranda" className="navbar-logo" aria-label="Beranda Luve Beauty">
          Luve Beauty
        </a>

        <nav className="navbar-links" aria-label="Navigasi utama">
          <a href="#beranda" className="navbar-link">
            Beranda
          </a>
          <a href="#katalog" className="navbar-link">
            Katalog
          </a>
          <a href="#favorit" className="navbar-link">
            Favorit
          </a>
          <a href="#tentang" className="navbar-link">
            Tentang
          </a>
        </nav>

        <a
          href="#favorit"
          className="navbar-fav-counter"
          aria-label={`Jumlah produk favorit tersimpan: ${favoriteCount}`}
        >
          Favorit: {favoriteCount}
        </a>
      </div>
    </header>
  );
}
