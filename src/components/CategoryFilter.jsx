import Button from './Button.jsx';

// Komponen filter kategori yang menerima daftar kategori, kategori aktif, dan callback onSelectCategory
export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-filter" role="group" aria-label="Filter kategori produk">
      <span className="field-label">Kategori</span>
      <div className="category-list">
        {/* Merender tombol filter untuk setiap kategori menggunakan map dan key unik */}
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <Button
              key={category}
              variant={isActive ? 'active' : 'filter'}
              onClick={() => onSelectCategory(category)}
              ariaPressed={isActive}
              ariaLabel={`Filter kategori ${category}`}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
