// Komponen visual produk berbasis SVG sesuai kategori dan warna hex dari prop product
export default function ProductVisual({ product, size = 'md' }) {
  const dimension = size === 'sm' ? 76 : size === 'lg' ? 128 : 104;
  const labelText = `Ilustrasi kemasan ${product.name} kategori ${product.category}`;

  // Merender siluet kemasan berbeda untuk tiap kategori produk
  if (product.category === 'Perawatan Kulit') {
    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        role="img"
        aria-label={labelText}
      >
        <rect x="44" y="10" width="12" height="8" fill="#1C1917" />
        <rect x="38" y="14" width="24" height="5" fill="#1C1917" />
        <rect
          x="40"
          y="19"
          width="20"
          height="9"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <rect
          x="28"
          y="28"
          width="44"
          height="62"
          rx="2"
          fill={product.color}
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <rect
          x="33"
          y="44"
          width="34"
          height="28"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="1"
        />
        <line x1="39" y1="53" x2="61" y2="53" stroke="#1C1917" strokeWidth="1.5" />
        <line x1="39" y1="60" x2="55" y2="60" stroke="#6B635B" strokeWidth="1.2" />
      </svg>
    );
  }

  if (product.category === 'Riasan') {
    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        role="img"
        aria-label={labelText}
      >
        <rect
          x="18"
          y="20"
          width="64"
          height="64"
          rx="2"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <rect
          x="24"
          y="26"
          width="52"
          height="52"
          rx="2"
          fill="#F4EFE9"
          stroke="#1C1917"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="52"
          r="19"
          fill={product.color}
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <line x1="42" y1="14" x2="58" y2="14" stroke="#1C1917" strokeWidth="2" />
      </svg>
    );
  }

  if (product.category === 'Perawatan Rambut') {
    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        role="img"
        aria-label={labelText}
      >
        <rect x="41" y="8" width="18" height="12" rx="1" fill="#1C1917" />
        <path
          d="M35 24 L65 24 L68 32 L68 90 L32 90 L32 32 Z"
          fill={product.color}
          stroke="#1C1917"
          strokeWidth="1.5"
        />
        <rect
          x="36"
          y="42"
          width="28"
          height="30"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="1"
        />
        <line x1="41" y1="52" x2="59" y2="52" stroke="#1C1917" strokeWidth="1.5" />
        <line x1="41" y1="59" x2="54" y2="59" stroke="#6B635B" strokeWidth="1.2" />
      </svg>
    );
  }

  // Kategori Parfum: botol kaca persegi dengan tutup padat
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      role="img"
      aria-label={labelText}
    >
      <rect x="38" y="10" width="24" height="15" fill="#1C1917" />
      <rect
        x="44"
        y="25"
        width="12"
        height="7"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="1.5"
      />
      <rect
        x="24"
        y="32"
        width="52"
        height="56"
        rx="2"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="1.5"
      />
      <rect
        x="29"
        y="40"
        width="42"
        height="43"
        fill={product.color}
        stroke="#1C1917"
        strokeWidth="1"
      />
      <rect
        x="36"
        y="50"
        width="28"
        height="20"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="1"
      />
      <line x1="41" y1="58" x2="59" y2="58" stroke="#1C1917" strokeWidth="1.5" />
      <line x1="44" y1="63" x2="56" y2="63" stroke="#6B635B" strokeWidth="1.2" />
    </svg>
  );
}
