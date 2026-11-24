# Luve Beauty — Katalog Produk Kosmetik

Aplikasi web satu halaman yang menampilkan katalog 12 produk kosmetik dalam empat kategori (Perawatan Kulit, Riasan, Perawatan Rambut, dan Parfum). Proyek ini dibuat sebagai tugas individu Pengembangan Antarmuka Berbasis Komponen menggunakan React dan Vite tanpa pustaka antarmuka eksternal maupun CSS pihak ketiga.

**Identitas Mahasiswa**
- Nama: R Ersa Putri Sulaksana
- NIM: 1247050099

## Fitur Utama

1. Pencarian nama produk secara langsung.
2. Penyaringan produk berdasarkan kategori yang dipadukan dengan pencarian.
3. Pengurutan harga produk dari termurah maupun termahal.
4. Penyimpanan dan penghapusan produk favorit beserta penghitung pada bilah navigasi serta daftar favorit khusus.
5. Jendela detail produk yang menampilkan keterangan lengkap serta warna kemasan.

## Cara Menjalankan Proyek

Pastikan Node.js sudah terpasang pada perangkat Anda, lalu jalankan perintah berikut di direktori proyek:

```bash
npm install
npm run dev
npm run build
```

- `npm install`: memasang seluruh dependensi yang diperlukan proyek.
- `npm run dev`: menjalankan peladen pengembangan lokal melalui Vite.
- `npm run build`: menghasilkan berkas statis siap pakai di dalam folder `dist`.

## Daftar Komponen dan Konsep React

- **`src/App.jsx`**: menyimpan seluruh *state* utama (`searchQuery`, `selectedCategory`, `favorites`, `selectedProduct`, dan `sortOrder`) melalui `useState`, menangani pengubahan data, serta menyalurkan *props* dan fungsi penangan peristiwa ke komponen anak.
- **`src/components/Navbar.jsx`**: menerima *prop* `favoriteCount` untuk menampilkan jumlah produk favorit dan menyediakan tautan gulir ke setiap bagian halaman.
- **`src/components/Hero.jsx`**: menerima *prop* `featuredProducts` untuk merender kisi 2x2 ilustrasi kategori produk menggunakan `map()` serta menampilkan judul dan identitas mahasiswa.
- **`src/components/SearchBar.jsx`**: komponen input terkontrol yang menerima *prop* `searchQuery` dan `onSearchChange` untuk menangani peristiwa `onChange` serta tombol hapus kondisional dengan `onClick`.
- **`src/components/CategoryFilter.jsx`**: menerima *props* `categories`, `selectedCategory`, dan `onSelectCategory` untuk merender tombol kategori melalui `map()` dan menangani peristiwa `onClick`.
- **`src/components/ProductList.jsx`**: menerima *props* `products`, `favorites`, `onToggleFavorite`, `onSelectProduct`, dan `emptyMessage`; menerapkan rendering kondisional saat data kosong serta rendering daftar menggunakan `map()` dengan `key={product.id}`.
- **`src/components/ProductCard.jsx`**: komponen kartu pakai ulang yang menerima *props* `product`, `isFavorite`, `onToggleFavorite`, dan `onSelectProduct` untuk menampilkan data produk, status tombol `"Simpan"` / `"Tersimpan"`, dan tombol `"Lihat Detail"`.
- **`src/components/ProductDetail.jsx`**: komponen jendela detail pakai ulang yang dirender secara kondisional saat `selectedProduct` terpilih, menerima *props* `product`, `isFavorite`, `onToggleFavorite`, dan `onClose` untuk menangani penutupan jendela dengan klik maupun tombol `"Tutup"`.
- **`src/components/ProductVisual.jsx`**: komponen ilustrasi SVG pakai ulang yang menerima *props* `product` dan `size` untuk menggambar bentuk kemasan sesuai kategori dan warna heksadesimal produk.
- **`src/components/Button.jsx`**: komponen tombol pakai ulang yang menerima *props* `variant`, `onClick`, `ariaLabel`, `ariaPressed`, dan `children` untuk seluruh tombol di aplikasi.
- **`src/components/Footer.jsx`**: menampilkan nama mahasiswa, NIM, dan tahun pembuatan di bagian kaki halaman.
